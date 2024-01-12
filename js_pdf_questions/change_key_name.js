let obj = { name: 'JJ', job: 'Programmer', age: 22 };
const renameKey = { name: 'firstName', job: 'Role' };

let str = JSON.stringify(obj)

for (let key in renameKey) {
    str = str.replace(key, renameKey[key])
}

console.log("Orignal : ", obj)
obj = JSON.parse(str)
console.log("Renamed :", obj)




// let map = new Map(Object.entries(obj))

// for (let key in renameKey) {
//     if (map.has(key)) {
//         map.set(renameKey[key], map.get(key))
//         map.delete(key)
//     }
// }
// console.log(map)