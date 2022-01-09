/*
 * @Author: your name
 * @Date: 2022-01-07 21:52:43
 * @LastEditTime: 2022-01-09 12:21:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \demo\demo-1.js
 */
// importClass("android.content.pm.PackageManager");
// importClass("android.provider.Settings");
// const myPackageName = context.getPackageName();//获取应用的包名

"ui";
auto() //开启无障碍服务 v1.7.3 无障碍服务未启动会停止脚本
//auto.waitFor() //检查无障碍服务是否已经启用，如果没有启用则跳转到无障碍服务启用界面，并等待无障碍服务启动；当无障碍服务启动后脚本会继续运行
// auto.setMode() //设置无障碍模式 fast 快速模式 normal 正常模式，默认

//开启悬浮窗显示
// if (floaty && floaty.hasOwnProperty("checkPermission") && !floaty.checkPermission()) {
//     floaty.requestPermission(); toast("请先开启悬浮窗权限再运行,否则无法显示提示"); exit()
// }

// 获取设备宽高
let deviceWidth = device.width
let deviceHeight = device.height

//判断屏幕大小，实现自动缩放缩放
// if(deviceWidth != 1080 && deviceHeight != 2340){
//     console.log("设备屏幕尺寸不符最佳，自动缩放屏幕大小")
//     setScreenMetrics(deviceWidth, deviceHeight)
// }

//判断系统版本
if(device.sdkInt >= 24){
    console.log("系统版本大于7")
    //安卓7以上的触摸和手势模拟，代码仅在7以上生效

}


// 运行淘宝
const appState = launch("com.taobao.taobao");
console.log()
if(appState){
    const btn = text("芭芭农场").findOne()
    btn.click()
}














