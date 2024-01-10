const str = "Hello World! Hey Universe Universe";
const temp = "     trim example   "

console.log("String : " + str)

console.log("Length : " + str.length)

console.log("Index of 'l' : " + str.indexOf('l'))

console.log("Last index of : " + str.lastIndexOf('l'))

// if you want to use regular expression then use 'search' instead of 'indexOf'
console.log("Search : " + str.search(/l/))

console.log("Slice : " + str.slice(str.indexOf(" ") + 1, str.lastIndexOf(" ")))

// ending index not included
console.log("Sub string : " + str.substring(1, 8));

// it takes length as secong argument instead of ending index, this function is depricated
console.log("substr : " + str.substr(1, 6));

// it only replaces first instance, to replace all instances use regular expression
console.log("Replace : " + str.replace("Universe", "World"))

console.log("Replace all instances : " + str.replace(/Universe/g, "World"))

console.log("Uppercase : " + "uppercase".toUpperCase())

console.log("Lowercase : " + "lowercase".toLowerCase())

// it does not modify orignal string but rather returns new string
console.log("Concat : " + str.concat(str))

console.log("String length before trim : " + temp.length);
console.log("Trim : " + temp.trim())
console.log("String length after trim : " + temp.trim().length)

console.log("Char at index 5 : " + str.charAt(5))

// returns unicode value
console.log("Char code at 5 : " + str.charCodeAt(5))