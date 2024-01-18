// [1,2,3]
// [[],[1],[2],[3],[2,1],[3,2],[3,2,1]]

const arr = [1, 2, 3, 4]

const ans1 = [[]]
const ans2 = [[]]

const x = arr.reduce((acc, curr) => {
    acc.push([curr])    // [[1],[2],]
    if (acc.length > 1) {
        // console.log(acc.reduce((a1, c1) => a1.push(...c1), []))
        acc.push(acc.reduce((a1, c1) => a1.push(...c1), []))
    }
    return acc
}, [])


// console.log(x)

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         const temp = []
//         for (let k = i; k <= j; k++) {
//             temp.push(arr[k])
//         }
//         ans1.push(temp)
//     }
// }
// console.log(ans1)

// for (let i = 0; i < arr.length; i++) {
//     const temp2 = []
//     for (let j = i; j < arr.length; j++) {
//         temp2.push(arr[j])

//         // if directly passed temp2 than it is passed as referenced
//         // so in subsequent iteration the pushed temp2 in ans2 is also modified
//         ans2.push([...temp2])
//     }
// }
// console.log(ans2)