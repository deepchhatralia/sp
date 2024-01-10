const arr = [10, 20, 30, 40, 20, 10, 20]

arr.forEach(element => {
    console.log(element)
});

console.log("Index of 20 : " + arr.indexOf(20))

console.log("Last Index of 20 : " + arr.lastIndexOf(20))

console.log("Includes 50 or not : " + arr.includes(50))

// if any element matches the condition than it returns that element otherwise returns undefined
console.log("Find : " + arr.find(val => val === 40))

// returns index if found otherwise returns -1
// returns index of first occurance of that element
console.log("Find index of 20 : " + arr.findIndex(val => val === 50))

console.log("Filter : " + arr.filter(val => val > 20))

console.log("Map : " + arr.map(val => val + 5))

// sort, reversemethod modifies orignal array

// console.log([10, 2, 34, 54, 19, 20].sort())
arr.sort((a, b) => {
    if (a > b) return 1;
    return -1;
})
console.log("Sort : " + arr)

console.log("Reverse : " + arr.reverse())

// split, join, reduce, reduceRight, some, every

const temp = "Hello World".split(" ");
console.log("Split : " + temp)

console.log("Join : " + temp.join(" "))

console.log("Reduce : " + arr.reduce((acc, curr) => acc + curr, 0))

console.log("Any of the element is greater than 40 ? : " + arr.some(val => val > 40))

console.log("Every element is greater than or equal to 10 ? : " + arr.every(val => val >= 10))

// reduce right iterates in descending order
console.log("Reduce right : " + arr.reduceRight((acc, curr) => acc + curr, 0))

const str = "Hello World".split("")
console.log("Reduce : " + str.reduceRight((acc, curr) => acc + curr, ""))

// function myMap(arr, callback) {
//     arr.forEach((element, index) => {
//         arr[index] = callback(element)
//     });
// }
// myMap(arr, (val) => val + 100)
// console.log("My map : " + arr)

