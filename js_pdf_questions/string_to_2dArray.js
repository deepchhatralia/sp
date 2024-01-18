const inputString = 'col1,col2,col3\na,b,p\nc,d,q,g\nr';

// const inputString = 'col1,col2,col3\na\nc,d,q'
// const inputString = 'col1,col2,col3\na\nc,d,q\np,q'

// [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}]
/*
[col1,col2],
[a,b]
[c,d]
*/

const arr = inputString.split('\n')

const keys = arr[0].split(',')  // fetching first element of array which are keys

const ans = []

arr.forEach((element, index) => {
    if (index === 0) return

    const subArr = element.split(',')   // c d q g  // col1 col2 col3

    const tempObj = {}

    const len = subArr.length > keys.length ? keys.length : subArr.length;

    for (let i = 0; i < len; i++) {
        tempObj[keys[i]] = subArr[i]
    }

    // subArr.forEach((element, i) => {
    //     tempObj[element] = subArr[i]
    // });

    ans.push(tempObj)
});

console.log(ans)