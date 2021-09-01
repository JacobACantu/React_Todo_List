// // Given a string of random numbers, write an algorithm that returns the most repeateed element in the string.

// function mostCommon(str) {
//     // Loop over str and populate object 
//     const populatedObject = populateObject(str)
//     return getHighestValueInGivenObject(populatedObject)
// }

// function getHighestValueInGivenObject(obj) {
//     // make max
//     let max = 0
//     // make a return value
//     let returnValue = null

//     // loop over object and find highest value for given key
//     for(let key in obj) {
//         if(obj[key] > max) {
//             max = obj[key]
//             returnValue = key
//         }
//     }
//     return returnValue
// }   

// function populateObject(str) {
//     // Create empty object to populate
//     const obj = {}
    
//     // loop over the string, populate object
//     for(let i = 0; i < str.length; i++) {
//         let current = str[i]
//         if(!obj[current]) {
//             obj[current] = 1
//         } else {
//             obj[current]++
//         }
//     }
//     // return object that is populated
//     return obj
// }

// const str = '145677'
// console.log(mostCommon(str))


// // Anagram algorithm

const magazineText = "this is the text I am given."
const note = "this is the text text"

// algorithm should return a true / false (boolean) as to if you could make 
// ransom note out of magazine text.

function magazineLoop(str){
    const populateMagazine = populateMagazine(str)
}

// seperate the magazineText as keys in an object
