const arr = ['yes', 'n/no', 'n', 'y', 'noo', 'nno']

arr.forEach(element => {
    if (element.match(/^y$/) || element.match(/^n$/) || element.match(/^yes$/) || element.match(/^no$/)) console.log(true)
    else console.log(false)
});