/**
 * Created by yuanyuan on 2018/1/7.
 */
function read(books) {
    let index = 0
    return{
        next(){
            let done = index == books.length - 1
            let value = books[index++]
            return{
                value,
                done
            }
        }
    }
}

let it = read(['js','node','mysql'])

let result

do{
    result = it.next()
    console.log(result)
}while(!result.done)

/*let r1 = it.next()
let r2 = it.next()
console.log(r1,r2)*/
