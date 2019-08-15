

/** 
 * 工具函数
 * */
var navigator = weex.requireModule('navigator');
const util = {
	/**
	 * 时间戳转时间字符串(毫秒和秒通用)
	 * @param {*} timestamp 
	 * @param {*} temp 要转成字符串的格式 
	 */
	navigatorPush(name,animatedState){
        
        navigator.push({
            url: name,
            animated: animatedState
          })
    }
}
export default util
