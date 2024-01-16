// Write a function addSpeaker to add a speaker to the array of speakers.The speaker you add must be an object with a key of name and a value of whatever you'd like.

// Write a function addLanguage that adds a language to the languages object.The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.

// Write a function addCountry that adds a European country to the countries object(inside of the continents object, inside of the countries object).The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.


let nestedObject = {
    speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
    data: {
        continents: {
            europe: {
                countries: {
                    switzerland: {
                        capital: "Bern",
                        population: 8000000
                    }
                }
            }
        },
        languages: {
            spanish: {
                hello: "Hola"
            },
            french: {
                hello: "Bonjour"
            }
        }
    }
}

// Object.defineProperty(nestedObject, 'addSpeaker', {
//     value: function (obj) {
//         this.speakers.push(obj)
//         return this.speakers;
//     }
// })

nestedObject.addSpeaker = function (obj) {
    this.speakers.push(obj)
}

nestedObject.addSpeaker({ name: "Deep" })

nestedObject.addLanguage = function (langName, langObj) {
    this.data.languages[langName] = langObj
}
nestedObject.addLanguage('English', { hello: 'hi' })

nestedObject.addCountry = function (countryName, countryObj) {
    this.data.continents.europe.countries[countryName] = countryObj;
}
nestedObject.addCountry("France", { capital: "Paris", population: 1000000 })

console.log("Speakers :", nestedObject.speakers)
console.log("Languages :", nestedObject.data.languages)
console.log("Countries in europe :", nestedObject.data.continents.europe)