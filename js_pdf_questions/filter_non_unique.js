const input = [1, 2, 2, 3, 4, 4, 5];

// Output : [1,3,5]

// const frequency = {}
// const ans = []

// input.forEach(element => {
//     frequency[element] ? frequency[element]++ : frequency[element] = 1
// });

// for (let key in frequency) {
//     if (frequency[key] === 1) ans.push(Number(key))
// }

// console.log(ans)



// optimized 

input.sort();

let size = 0;

const ans = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[i + 1]) {
        ans.push(input[i])
    }

    for (let j = i; j < input.length; j++) {
        if (input[j] !== input[j + 1]) {
            i = j;
            break;
        }
    }
}

// while (size < input.length) {
//     if (input[size] !== input[size + 1]) {
//         ans.push(input[size])
//     }
//     while (input[size] === input[size + 1]) {
//         size++;
//     }
//     size++;
// }

console.log(ans)