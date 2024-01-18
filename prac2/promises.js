// const fetchData = function (data) {
//     return new Promise(function (res, rej) {
//         if (data) {
//             setTimeout(() => {
//                 res("Promise fulfilled")
//             }, 1000);
//         } else {
//             rej("Promise rejected")
//         }
//     })
// }

// new Promise(function (res, rej) {
//     if (true) {
//         setTimeout(() => {
//             res("Promise fulfilled")
//         }, 1000);
//     } else {
//         rej("Promise rejected")
//     }
// }).then(ele => console.log(ele))

// fetchData('api')
//     .then((resolved) => console.log(resolved), (rejected) => console.log(rejected))
//     .finally(() => console.log("finally"))}



// const p1 = new Promise((res, rej) => {
//     setTimeout(() => res('Promise 1 resolved'), 400);
// })

// const p2 = new Promise((res, rej) => {
//     setTimeout(() => res('Promise 2 resolved'), 200);
// });

// const p3 = new Promise((res, rej) => {
//     setTimeout(() => rej('Promise 3 rejected'), 150);
// });

// const x = Promise.all([p1, p2, p3]);

// x.then(val => {
//     console.log(val)
//     // throw new Error("Hello World")
// }).catch(err => console.log(err))

// async function getData() {
//     try {
//         const x = await fetch('https://jsonplaceholder.typicode.com/posts/');
//         const data = await x.json();
//         const desc = [];

//         const promises = [];
//         for (let i = 0; i < 10; i++) {
//             promises.push(fetch(`https://jsonplaceholder.typicode.com/posts/${i}`).then(response => response.json()));
//         }

//         const results = await Promise.all(promises);

//         console.log(results);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getData();

const myPromise = () => new Promise((res, rej) => {
    if (true) {
        setTimeout(() => {
            res("resolved")
        }, 1000);
        // res("resolved")
    }
    console.log('reached to reject')
    rej("error")
    console.log("after rejected")
})
// console.log(myPromise())

myPromise().then(val => console.log(val)).catch(err => console.log(err))
// setTimeout(() => {
//     console.log("timeout function")
// }, 1000);