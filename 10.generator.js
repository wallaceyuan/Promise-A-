/**
 * Created by yuanyuan on 2018/1/7.
 */
function *read(books) {
    for(let i = 0;i<books.length;i++){
        yield books[i]
    }
    console.log('结束')
}

let it = read(['js','node'])
/*let r1 = it.next()
console.log(r1)


let r2 = it.next()
console.log(r2)

let r3 = it.next()
console.log(r3)*/
var value = ''
do{
    value = it.next()
    console.log(value)
}while(!value.done)