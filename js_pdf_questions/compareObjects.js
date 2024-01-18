const obj1 = {
    id: 111,
    name: "Deep",
    email: "d@gmail.com",
    isAdmin: true
}

const obj2 = {
    id: 111,
    name: "Deep",
    email: "d@gmail.com",
    isAdmin: true
}
// a b c
// b a d

// use some method in place of for loop 
function compare(x, y) {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);

    if (xKeys.length !== yKeys.length) return false;

    for (let element of xKeys) {
        //     if (!y.hasOwnProperty(element)) return false;
        if (yKeys.some(val => val === element)) {

            if (x[element] !== y[element]) {
                return false;
            }
        }

    }
    return true;
}

console.log(compare(obj1, obj2))