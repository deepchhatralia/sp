// for in loop iterates over keys in case of object and index in case of array and length in case of string

const colors = { 1: "red", 2: "yellow", 3: "green" }

for (let x in colors) {
    console.log(x)
}