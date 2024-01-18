const arr = [
    { col1: 'a', },
    { col1: 'c', col2: 'd', col3: 'q' },
    { col1: 'p', col2: 'q' }
]
const set = new Set()
let str = ""
// let str = Object.keys(arr[0]).join(',');

const tempArr = [];
// const tempArr = [str];

arr.forEach(element => {
    Object.keys(element).forEach(element => {
        set.add(element)
    });

    const temp = Object.values(element).join(',')

    tempArr.push(temp)
});

str = str.concat([...set].join(','))
str = str.concat('\\n', tempArr.join('\\n'))

console.log(str)