/**
 * Created by yuanyuan on 2018/1/7.
 */
function ajax(url= new Error('url不能为空'),method='GET',dataType='json') {
    console.log(url)
    console.log(method);
    console.log(dataType);
}

ajax('/.1.js')



//reduce 计算 汇总 收敛

function sum(prefix,...rest) {
    var result = ''
    return prefix+(result)
}
sum('$',1,2,3,4)




let arr4 = [1,2,3,4]




Array.prototype.reduce1 = function (reducer,initialVal) {
    for(let i= 0 ;i<this.length;i++){
        initialVal = reducer(initialVal,this[i])
    }
    return initialVal
}


//第二个参数0 表示初始值
//上一次执行结果会成为下一次的初始值
//如果没有给初始值的话 第一次执行函数的时候 val=第一个元素 item=第二个元素
arr4.reduce1(function (val,item,index,origin) {
    console.log(val,item,index)
    return val + item
},0)

arr4.reduce(function (val,item,index,origin) {
    console.log(val,item,index)
    return val + item
},0)



let arr6 = [1,2,3]

let max = Math.max.apply(null,arr6)
console.log(max);


console.log(...arr6)
let max2 = Math.max(...arr6)
console.log(max2);



//对象属性copy
let obj1 = {name:'zfpx'}
let obj2 = {age:18}
let obj3 = {}
Object.assign(obj3,obj1,obj2)
console.log(obj3)



let obj4 = {...obj1,...obj2}
console.log(obj4)


let obj5 = {name:'zfpx',home:{city:'beijing'}}

function clone(origin) {
    let newObj = {}
    for(let key in origin){
        if(typeof origin[key] == 'object'){
            newObj[key] = clone(origin[key])
        }else{
            newObj[key] = origin[key]
        }
    }
    return newObj
}
console.log(clone(obj5));