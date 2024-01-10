const date = new Date();
const hours = date.getHours();

if (hours >= 6 && hours < 12) {
    console.log("Good Morning")
} else if (hours >= 12 && hours < 17) {
    console.log("Good Afternoon")
} else if (hours >= 17 && hours < 21) {
    console.log("Good Evening")
} else {
    console.log("Good Night")
}