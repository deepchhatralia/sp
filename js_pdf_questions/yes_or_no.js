const arr = ['yes', 'YeS', 'n/no', 'N', 'y', 'noo', 'nno', 'Y']

arr.forEach(element => {
    if (element.match(/^(y|yes)$/i) || element.match(/^(n|no)$/i)) console.log(element, true)
    else console.log(element, false)
});