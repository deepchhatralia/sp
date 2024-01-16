const arr = [10, 20, 2, 10, 30, 20]

const set = new Set(arr)

console.log("Initial :", set)

set.add(10)

set.delete(2)

console.log("Does set has element 20?", set.has(20))

console.log("Size of set :", set.size)

console.log(set.entries())

set.forEach(element => {
    console.log(element)
});

console.log("Set to array :", [...set])

set.clear()
console.log("Set cleared :", set)