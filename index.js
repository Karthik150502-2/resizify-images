console.log("hello world");
console.log("My name is Karthik J");
console.log("The new change from the master branch 1");
console.log("The new change from the master branch 2");
console.log("The changes from the feat branch......");


console.log(1+5)
console.log(7+8)
console.log(1 + 5)
console.log(7 + 8)



function fibonacci() {
    let prev = 0;
    let curr = 1;
    return () => {
        let temp = prev;
        prev = curr; 
        curr = temp + curr; 
        return temp;
    }
}
let fib = fibonacci()

console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())

function multiplyBy(n){
    return (m)=>{
        return m * n
    }
}


let mulBy2 = multiplyBy(2)
console.log(mulBy2(5))
console.log(mulBy2(15))
