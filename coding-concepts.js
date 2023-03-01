// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
console.log(cohort.split(""))

// a) Your answer: 'A', 'l', 'p', 'h', 'a', ' ', '2', '0', '2', '3'
// b) Verify and explain: this happens because .split breaks down each value in a string and makes each letter its own value.

// --------------------2) What will this log?

const greeter = (name) => {
 `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:  Undefined
// b) Verify and explain: this returns as undefined because you dont have a return.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
 console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: this returns the way it does because .map iterates on the array returning an array of the same length and multiplies the value of each element in the array by 2

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: this is the return because .filter is a method that iterates on each element in an array and only returns ones that meet the specified condition, in this case it was if the number divided by 2 and has no remainder, meaning it is an odd number. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: Javascript is the return because with objects you have to specify the path to get to where you want to be, in this instance, Javascript is the 0 index of the array assigned to the languages object.
