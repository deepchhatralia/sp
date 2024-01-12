const arr = [0, 14, 10, 23, 12, 9, 20]

arr.forEach(element => {
    if (element === 0) console.log(12 + " AM");
    else if (element === 12) console.log(12 + " PM")
    else if (element > 12) console.log((element - 12) + " PM")
    else console.log(element + " AM")
});