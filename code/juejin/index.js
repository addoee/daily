// 引入依赖
const axios = require('axios')

//读取环境变量
var value = process.env.cookie 

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
<<<<<<< HEAD
    "cookie":value
}


//签到
const checkIn = async () => {
    const {baseURL, apiURL, cookie} = config;
    let {err_no, isCheck} =await getTodayCheckStatus();
    if(err_no) return console.log("查询签到失败");
    if(isCheck){
        str = "掘金今日签到成功"
        console.log(str)
        return str
    }
    let {data} = await axios({url:baseURL+apiURL.checkIn, method: 'post', headers: {Cookie: cookie}})
=======
    "cookie":""
//主函数
const main = async ()=> {
    // let {err_msg} = await checkIn();
    let {lottery_name} = await draw();
    let {dip_value} =await dipLucky();
>>>>>>> 0aed6780a960ada357035fa6f77ae9f3ba84898d
    console.log(data )
    if(data.err_no){
        console.log("掘金签到失败")
        return  data;
    }else{
        console.log("掘金签到成功");
        return data;
    }
}

// 查询签到
const getTodayCheckStatus = async () => {
    const {baseURL, apiURL, cookie} = config;
    let {data} = await axios({url: baseURL+apiURL.getTodayStatus, method: 'get', headers:{Cookie:cookie}})
    if(data.err_no){
        console.log("查询签到失败")
    }
    return {error: data.err_no, isCheck: data.data}
}


//抽奖
const draw = async ()=> {
    let {error, isDraw} =await getTodayDrawStatus()
    console.log(isDraw)
    if(error) return console.log("查询抽奖次数失败");
    if(isDraw === 0){
        str = "无免费抽奖次数"
        console.log(str)
        return str
    }
    const {baseURL, apiURL, cookie} = config;
    let {data} = await axios({url: baseURL+apiURL.draw, method: 'post', headers: {Cookie: cookie}})
    if(data.err_no){
        console.log("抽奖失败");
        return data
    }else{
        console.log("抽到了:"+data.data.lottery_name);
        return data.data 
    }
}
//查询免费抽奖
const getTodayDrawStatus = async ()=> {
    const {baseURL, apiURL, cookie} = config;
    let {data} = await axios({url: baseURL+apiURL.getTodayDrawStatus, method: 'get', headers: {Cookie: cookie}})
    if(data.err_no){
        console.log("抽奖次数查询错误");
        return {error: true}
    }else{
        console.log("抽奖次数查询成功");
        return {error: false, isDraw: data.data.free_count}
    }
    
}
//查询今日是否沾福气
const dipLucky = async ()=>{
    /*
    这个是粘福气请求的接口，应该是还有一个参数传递的
    如果单纯的只是请求这个接口，返回的是查询状态
    */
    const {baseURL, apiURL, cookie} = config;
    let {data} = await axios({url: baseURL+apiURL.dipLucky, method: 'post', headers: {Cookie: cookie}})
    if(data.err_no){
        console.log("粘福气失败");
        return data
    }else{
        let {dip_value, total_value} = data.data
        console.log("沾福气成功,获得"+dip_value+"点福气"+"当前福气值："+total_value)
        return data
    }
}

// 发送消息提醒
const sendMsg = async (signMsg, drawMsg, dipMsg) => {
    if(!signMsg &  !drawMsg & !dipMsg) return;
    let {sendNews, queryNewStatu} = config;
    msg = "签到成功,钻石数："+signMsg.data.sum_point+","+"抽奖成功，获取到："+drawMsg.data.lottery_name+",获取到："+drawMsg.data.draw_lucky_value+"点福气，当前福气值："+drawMsg.data.total_lucky_value
    let {data} = await axios({url: sendNews, method: 'post', params:{'title':'掘金消息通知', 'desp':msg}})
    if(data.err_no){
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
<<<<<<< HEAD
// 主函数
exports.main = async (avent, context)=> {
    console.log('开始')
    let checkindata = await checkIn();
    let drawdata = await draw();
    let dipdata =await dipLucky(); 
    sendMsg(checkindata, drawdata, dipdata)
    console.log('结s束')
}
=======
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
>>>>>>> 0aed6780a960ada357035fa6f77ae9f3ba84898d
