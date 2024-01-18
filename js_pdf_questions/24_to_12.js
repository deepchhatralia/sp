const arr = [0, 14, 10, 23, 12, 48, 36, 37, 73]

function convert(orignal, element) {
    if (element > 24) convert(orignal, element % 24)
    else if (element === 0) console.log(orignal + " -> " + 12 + " AM");
    else if (element === 12) console.log(orignal + " -> " + 12 + " PM")
    else if (element > 12) console.log(orignal + " -> " + (element - 12) + " PM")
    else console.log(orignal + " -> " + element + " AM")
}

arr.forEach(element => {
    convert(element, element % 24)
});

// function convert(orignal, element) {
//     if (element > 24) convert(orignal, element % 24)
//     else if (element === 0) console.log(orignal + " -> " + 12 + " AM");
//     else if (element === 12) console.log(orignal + " -> " + 12 + " PM")
//     else if (element > 12) console.log(orignal + " -> " + (element - 12) + " PM")
//     else console.log(orignal + " -> " + element + " AM")
// }

// arr.forEach(element => {
//     convert(element, element)
// });

