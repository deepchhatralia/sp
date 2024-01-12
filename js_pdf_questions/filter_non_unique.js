const input = [1, 2, 2, 3, 4, 4, 5];

// [1,3,5]

const frequency = {}
const ans = []

input.forEach(element => {
    frequency[element] ? frequency[element]++ : frequency[element] = 1
});

for (let key in frequency) {
    if (frequency[key] === 1) ans.push(Number(key))
}

console.log(ans)