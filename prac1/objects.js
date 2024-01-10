const temp = { id: 321 }

const obj = {
    id: 1,
    name: "Deep",
    age: 21,
    email: "d@gmail.com",
    display() {
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}

Object.assign(temp, obj)

// console.log(temp)


// it creates new object from an existing object acting as a prototype for another object
// it is like inheritance
const x = Object.create(obj)
console.log(x.name)     // Deep
x.id = 1
x.name = "John"
x.age = 22
console.log(x.name)     // John


// this function is used so that we can set specific property descriptor (ex. read only , not show a property in 'for in' loop) 
Object.defineProperty(x, "email", {
    value: "x@gmail.com",
    writable: false,
    enumerable: false,
    // get() {
    //     return this.id;
    // }
})

// this wont show error but will not set new value for email
// in strict mode it will show error
x.email = "xEmail@gmail.com"
console.log("X email :", x.email)

// this will not show email key because enumerable is set to false
// for (let val in x) {
//     console.log(val)
// }


let newObj = {}

// allows us to set multiple properties with its descriptor
Object.defineProperties(newObj, {
    id: {
        value: 2
    },
    name: {
        value: "Mary Hail"
    }
})
console.log(newObj)


const a = {
    pid: 1,
    name: "Laptop",
    price: 70000
}
// console.log(Object.entries(a))
for (let [key, value] of Object.entries(a)) {
    console.log(key, value)
}

// it wont allow addition or deletion of any properties
Object.freeze(a);
a.occupation = "intern"     // wont add
delete a.pid                // wont delete
console.log(a)


// only takes index 0 as key and index 1 as value, other values in array are ignored
const tempArr = [["id", 1], ["name", "pratik", "age", 21], ["email", "pratik@gmail.com"]]
const arr2 = Object.fromEntries(tempArr)
console.log(arr2)

const arr3 = arr2

// === treats -0 and +0 as equal, NaN === NaN -> false
// but is method of Object gives true
console.log(Object.is(arr2, arr3))


