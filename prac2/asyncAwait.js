async function add() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const d = await data.json()
        console.log(d)
    } catch (err) {
        console.log(err)
    }
    // return new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res("hello world")
    //     }, 1000);
    // })
}
console.log(add())
// add().then(ele => {
//     ele.forEach(element => {
//         console.log(element.id)
//     });
// }).catch(err => console.log(err))







// async function add() {
//     console.log("add function")

//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("hello world")
//         }, 2000);
//     })
// }

// async function sub() {
//     console.log("sub function")

//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("hello sub")
//         }, 1000);
//     })
// }
// add().then(ele => console.log(ele)).catch(err => console.log(err))
// sub().then(ele => console.log(ele)).catch(err => console.log(err))