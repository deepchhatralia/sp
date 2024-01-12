// [1,2]
// [[],[1],[2],[2,1]]

const arr = [1, 2, 3]

const ans1 = [[]]
const ans2 = [[]]

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        const temp = []
        for (let k = i; k <= j; k++) {
            temp.push(arr[k])
        }
        ans1.push(temp)
    }
}
console.log(ans1)

for (let i = 0; i < arr.length; i++) {
    const temp2 = []
    for (let j = i; j < arr.length; j++) {
        temp2.push(arr[j])

        // if directly passed temp2 than it is passed as referenced
        // so in subsequent iteration the pushed temp2 in ans2 is also modified 
        ans2.push([...temp2])
    }
}
console.log(ans2)