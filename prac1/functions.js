// function declaration
function factorial(num) {
    if (num <= 0) return 0;
    if (num == 1) return 1;

    return num * factorial(num - 1)
}

console.log(factorial(5));


// function expression
const getDate = function () {
    const date = new Date();
    return `${String(date.getDate()).padStart(2, 0)}/${String(date.getMonth() + 1).padStart(2, 0)}/${date.getFullYear()}`;
}

console.log(getDate())

// arrow functions
const getTime = () => {
    return new Date(new Date().getTime());
}

console.log(getTime())