// it iterates over an array or any iterator
// it iterates over values in an iterator
// eg array list etc

const user = {
    id: 1,
    name: "Deep",
    email: "deep@gmail.com"
}

for (let x of Object.keys(user)) {
    console.log(x)
}

for (let x of Object.values(user)) {
    console.log(x)
}

for (let [k, v] of Object.entries(user)) {
    console.log(k, v)
}