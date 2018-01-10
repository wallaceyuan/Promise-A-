/**
 * Created by yuanyuan on 2018/1/7.
 */
function Promise(task) {
    let that = this
    that.status = 'pending' //默认状态为pending
    //此变量里放着此promise的结果
    that.value = undefined
    that.onResolvedCallbacks = []
    that.onRejectedCallbacks = []
    function resolve(reason) {
        if(that.status == 'pending'){
            that.status = 'fulfilled'
            that.value = reason
            that.onResolvedCallbacks.forEach(item=>item(reason))
        }
    }
    function reject(reason) {
        if(that.status == 'pending'){
            that.status = 'rejected'
            that.value = reason
            that.onRejectedCallbacks.forEach(item=>item(reason))
        }
    }
    try{
        task(resolve,reject)
    }catch(e){
        reject(e)
    }
}
//onFulfilled 成功回调 onReject 失败回调
Promise.prototype.then = function (onFulfilled,onReject) {
    let that = this
    that.onResolvedCallbacks.push(onFulfilled)
    that.onRejectedCallbacks.push(onReject)
}

module.exports = Promise