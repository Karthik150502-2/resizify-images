console.log("hello world");
console.log("My name is Karthik J");
console.log("The new change from the master branch 1");
console.log("The new change from the master branch 2");
console.log("The changes from the feat branch......");


console.log(1 + 5)
console.log(7 + 8)
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

function multiplyBy(n) {
    return (m) => {
        return m * n
    }
}
let mulBy2 = multiplyBy(2)
console.log(mulBy2(5))
console.log(mulBy2(15))
console.log(mulBy2(7))
console.log(mulBy2(8))

function divideBy(n) {
    return (m) => {
        return m / n
    }
}
let divBy2 = divideBy(2)
console.log(divBy2(5))
console.log(divBy2(15))


function powerOf(n) {
    return (m) => {
        return Math.pow(m, n)
    }
}

let powOf2 = powerOf(2)

console.log("Hello, i am Cristiano Ronaldo")


console.log("Changes one..........")
console.log(1)
console.log(2)
console.log(3)
console.log(4)