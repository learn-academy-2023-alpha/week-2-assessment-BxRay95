// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.


















// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.



// psuedocode: 
// create a function called divisibleBy3
// input: taking in a random number
// determine if that number is divisible by 3 using an else if statement
// output: return the statement in a string whether the number is divisible by 3 or not, with a catch all that returns an error if the given input is not a number


describe("divisibleBy3", () => {
const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
    it("returns whether or not the number is divisible by 3", () => {
      expect(divisibleBy(object1)).toEqual("15 is divisible by 3")
      expect(divisibleBy(object2)).toEqual("0 is divisible by 3")
      expect(divisibleBy(object3)).toEqual("-7 is not divisible by 3")
    })
})
// ---> divisibleBy3 is not defined

const divisibleBy = (object) => {
    if(object.number % 3 === 0){
        return `${object.number} is divisible by 3`
    } else {
        return `${object.number} is not divisible by 3`
    }
}
// output ---> pass



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.


describe("capitalLetters", () => {
it("returns an array with all the words capitalized", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    expect(capitalLetters(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalLetters(["temperature", "database", "chopsticks", "mango"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})
// output ---> capitalLetters is not defined

// b) Create the function that makes the test pass.

// psuedocode:
// input: an array of various words
// using the built in method .map, iterate through the array and using charAt pinpoint the first character of each word and .toUpperCase to make each of them capitalized
// output: will return an array with all of the first letters of the words capitalized 

const capitalLetters = (array) => {
    return array.map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
}



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("vowelExtractor", () => {
    const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
it("returns the index of the first vowel", () => {
    expect(vowelExtractor(vowelTester1)).toEqual(1)
    expect(vowelExtractor(vowelTester2)).toEqual(0)
    expect(vowelExtractor(vowelTester3)).toEqual(2)
  })
})

// Pseudocode: 
// input: a string
// create a function called vowelExtractor that takes in a string as a parameter. Create the vowelsArray, split the input string into an array. Use forEach to iterate through each character(item) to use in the conditional. In the conditional its checking for the index using the built in method indexOf to find the vowel if the index of it does not equal -1, meaning it does exist within the string and meets the other condition of being undefined since vowelsIndex is not assigned until after the conditions are both met. When both conditions are met vowelsIndex is assigned to the index of the vowel appearing in the given input
// output: will return the index position of the first vowel in the given string

// b) Create the function that makes the test pass.


const vowelsArray = ["a", "e", "i", "o", "u", "y"]

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

function vowelExtractor(string) {
    let vowelIndex
    string.split("").forEach(item => {
        if(vowelsArray.indexOf(item) != -1 && vowelIndex === undefined) {
            vowelIndex = string.indexOf(item) 
         }
    });
    return vowelIndex
}
