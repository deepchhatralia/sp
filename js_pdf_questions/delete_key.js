const obj = { a: 1, b: '2', c: 3 }
const remove = ['b', 'd', 'a']

console.log("Orignal :", obj)

remove.forEach(element => {
    if (obj.hasOwnProperty(element)) {
        delete obj[element]
    }
});

console.log("Modified :", obj);