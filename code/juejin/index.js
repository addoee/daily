// 引入依赖
const axios = require('axios')

// 参数配置
const config = {
    "baseURL": "https://api.juejin.cn",
    "apiURL": {
        "getTodayStatus": "/growth_api/v1/get_today_status",
        "checkIn": "/growth_api/v1/check_in",
        "draw": "/growth_api/v1/lottery/draw",
        "getTodayDrawStatus": "/growth_api/v1/lottery_config/get",
        "dipLucky": "/growth_api/v1/lottery_lucky/dip_lucky"
    },
    "sendNews": "",
    "queryNewStatu": "https://sctapi.ftqq.com/push?id={pushid}&readkey={readkey}",
    "sendKey": "",
    "cookie":""
//主函数
const main = async ()=> {
    // let {err_msg} = await checkIn();
    let {lottery_name} = await draw();
    let {dip_value} =await dipLucky();
    console.log(data )
}
// 发送消息提醒
const sendMsg = async (msg) => {
    // if(!msg) return;
    let {sendNews, queryNewStatu} = config;
    let {data} = await axios({url: sendNews, method: 'post', params:{'title':msg, 'desp':msg}})
    if(data.errno){
        //查询是否推送完成
        let queryStatu = async () => {
            await axios({url:queryNewStatu, method: 'post', prams: {id: data.pushid, readkey: data.readkey}})
        }
        if(queryStatu){
            console.log("消息推送成功")
        }else{
            console.log("消息推送失败")
        }
    }
    console.log("微信消息推送成功")
}
//签到
const checkIn = async () => {
    const {baseURL, apiURL, cookie} = config;
    let {err_no, isCheck} = getTodayCheckStatus();
    if(err_no) return console.log("查询签到失败");
    if(isCheck) return console.log("今日签到成功");
    let {data} = await axios({url:baseURL+apiURL.checkIn, method: 'post', headers: {Cookie: cookie}})
    if(data.err_no){
        console.log("掘金签到失败")
        return  data;
    }else{
        //console.log("掘金签到成功");
        return data;
    }
}

// 查询签到
const getTodayCheckStatus = async () => {
    const {baseURL, apiURL, cookie} = config;
    let {data} = await axios({url: baseURL+apiURL.getTodayStatus, method: 'get', headers:{Cookie:cookie}})
    console.log("今日已经签到")
    if(data.err_no){
        console.log("查询签到失败")
    }
    return {error: data.err_no, isCheck: data.data}
}


//抽奖
const draw = async ()=> {
    let {error, isDraw} = getTodayDrawStatus()
    if(error) return console.log("查询抽奖次数失败");
    if(!isDraw) return console.log("无免费抽奖次数");
    const {baseURL, apiURL, cookie} = config;
    let {data} = await axios({url: baseURL+apiURL.draw, method: 'post', Cookie: cookie})
    if(data.err_no){
        console.log("抽奖失败");
        return data
    }else{
        console.log("抽到了:"+data.data.lottery_name);
        return data
    }
}
//查询免费抽奖的次数
const getTodayDrawStatus = async ()=> {
    const {baseURL, apiURL, cookie} = config;
    let {data} = await axios({url: baseURL+apiURL.getTodayDrawStatus, method: 'get', Cookie: cookie})
    if(data.err_no){
        console.log("抽奖次数查询错误");
        return {error: true}
    }else{
        console.log("抽奖次数查询成功");
        return {error: false, isDraw: data.data.free_count}
    }

}
//沾福气
const dipLucky = async ()=>{
    const {baseURL, apiURL, cookie} = config;
    let {data} = await axios({url: baseURL+apiURL.dipLucky, method: 'post', headers: {Cookie: cookie}})
    if(data.err_no){
        console.log("粘福气失败");
        return data
    }else{
        console.log("恭喜沾到"+data.data.dip_value+"点福气");
        return data
    }
}


console.log("执行到这里222")
main()
// exports.main = async(event, context) => {
//     console.log('开始')
//     getTodayCheckStatus()
//     console.log('结束')
// }
