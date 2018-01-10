/**
 * Created by yuanyuan on 2018/1/7.
 */
let name = 'zfpx',age = 9
let desc = `${name} 今年 ${age} 岁了`

function replace(desc){
    return desc.replace(/\$\{([^}]+)\}/g,function(matched,key){
        return eval(key);
    });
}


console.log(replace(desc));

//rest 其他运算符只能作为最后一个参数
function descfunc(string,...rest) {
    console.log(string)
    console.log(rest)
    return ''
}


let str = descfunc`${name}今年${age}岁了`