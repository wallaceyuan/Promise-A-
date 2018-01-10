/**
 * Created by yuanyuan on 2018/1/7.
 */
let Promise = require('./Promise')
let p1 = new Promise(function (resolve,reject) {
    setTimeout(()=>{
        resolve(100)
    },1000)
})

let p2 = p1.then(function (data) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve(data+100)
        },100)
    })
},function (err1) {
    console.log('err1',err1)
    return err1 + 100
})

p2.then(function (data) {
    console.log('p2成功',data)
},function (err2) {
    console.log('p2失败',err2)
})