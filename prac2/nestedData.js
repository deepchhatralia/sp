// Using a for loop, console.log all of the numbers in the primeNumbers array.
// Using a for loop, console.log all of the even Fibonnaci numbers.
// Console.log the value "second" inside the order array.
// Invoke the addSnack function and add the snack "chocolate".
// Inside of the addSnack function there is a special keyword called this.What does the word this refer to inside the addSnack function?

let nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [2, 3, 5, 7, 11],
            fibonnaci: [1, 1, 2, 3, 5, 8, 13]
        },
        addSnack: function (snack) {
            this.snacks.push(snack);
            return this;
        }
    }
}

const primeNumbers = nestedData.innerData.numberData.primeNumbers;
const fibonnaci = nestedData.innerData.numberData.fibonnaci;

console.log("Prime numbers")
for (let i = 0; i < primeNumbers.length; i++) {
    console.log(primeNumbers[i])
}

console.log("Even fibonacci numbers")
for (let i = 0; i < fibonnaci.length; i++) {
    if (fibonnaci[i] % 2 === 0) console.log(fibonnaci[i])
}

console.log("second value printed to console from order array :", nestedData.innerData.order[1])

console.log(nestedData.innerData.addSnack('choclates'))

// the 'this' keyword inside addSnack function refers to the innerData object 