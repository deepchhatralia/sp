const orderedBy = ['age', 'name']
const orders = ['asc', 'asc']

const input = [
    { name: 'fred', age: 48 },
    { name: 'barney', age: 49 },
    { name: 'fred', age: 50 },
    { name: 'barney', age: 48 },
];
// [
//     {"name":"barney","age":36},
//     {"name":"fred","age":48},
//     {"name":"fred","age":40}
// ]

input.sort((a, b) => {
    if (orderedBy[0] === 'name') {
        if (a.name === b.name) {
            return orders[1] === 'asc' ? a.age < b.age ? -1 : 1 : a.age > b.age ? -1 : 1
        }
        return orders[0] === 'asc' ? a.name < b.name ? -1 : 1 : a.name > b.name ? -1 : 1;
    } else {
        if (a.age === b.age) {
            return orders[1] === 'asc' ? a.name < b.name ? -1 : 1 : a.name > b.name ? -1 : 1
        }
        return orders[0] === 'asc' ? a.age < b.age ? -1 : 1 : a.age > b.age ? -1 : 1
    }
})

console.log(input)