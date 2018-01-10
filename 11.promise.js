/**
 * Created by yuanyuan on 2018/1/7.
 */
/*Promise是个类 可以创建实例*/

let Promise = require('./Promise')

let p = new Promise(function (resolve,reject) {
    setTimeout(()=>{
        let num = Math.random()
        if(num > .5){
            resolve('大成功')
        }else{
            reject('小失败')
        }
    },1000)
})

p.then((data)=>{
    console.log('成功1=',data)
},(reason)=>{
    console.log('失败1=',reason)
})

p.then((data)=>{
    console.log('成功2=',data)
},(reason)=>{
    console.log('失败2=',reason)
})