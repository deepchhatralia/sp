var a = 20

console.log("a:" + a) // 20

if (a == 20) {
    var a = 10
    console.log("a:" + a) // 10
}

console.log("a:" + a) // 10




let b = 10

console.log("b:" + b)

if (b == 10) {
    let b = 20
    console.log("b:" + b)
}

console.log("b:" + b)


const c = 30
// c = 100; not allowed
// console.log("c:" + c)

{
    console.log(c);
    c = 20
    console.log(c)
}