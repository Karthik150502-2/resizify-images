console.log("hello world");
console.log("My name is Karthik J");
console.log("The new change from the master branch 1");
console.log("The new change from the master branch 2");
console.log("The changes from the feat branch......");


console.log(1 + 5)
console.log(7 + 8)

function factorial(n) {
    let res = 1;
    if (n === 1 || n === 0) {
        return 1
    };
    for(let i=1;i<=n;i++){
        res = res * i 
    }
    return res;
}
console.log(factorial(6))
console.log(factorial(5))
console.log(factorial(4))
