const str = "hello @deep world@tarun universe@john "

const arr = str.split('@').map((val, index) => {
    const temp = val.indexOf(' ') === -1 ? val.length : val.indexOf(' ')
    return val.slice(0, temp)
})

if (str[0] !== '@' || arr[0] === '') arr.shift()

console.log(arr)