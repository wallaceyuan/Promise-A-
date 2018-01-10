/**
 * Created by yuanyuan on 2018/1/7.
 */
//箭头函数没有自己的this,使用上层的this

let obj = {
    name:'zfpx',
    getName:()=>{
        console.log(this.name)
    }
}
//console.log(obj.getName());
let obj2 = {
    name:'9',
    gN:obj.getName
}
console.log(obj2.gN());

//map reduce reducerRight filter every
//some find findIndex every