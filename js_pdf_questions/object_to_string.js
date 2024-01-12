const arr = [
    { col1: 'a', col2: 'b', col3: 'p' },
    { col1: 'c', col2: 'd', col3: 'q' }
]

let str = Object.keys(arr[0]).join(',');

const tempArr = [str];

arr.forEach(element => {
    const temp = Object.values(element).join(',')

    tempArr.push(temp)
});

str = tempArr.join('\\n')

console.log(str)