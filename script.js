// console.log("Hello World");

// let sentence = [
//   "The",
//   "walrus",
//   "danced",
//   "through",
//   "the",
//   "trees",
//   "in",
//   "the",
//   "light",
//   "of",
//   "the",
//   "moon",
// ];
// function addExcitement (theWordArray) {
//     let buildMeUp = " "

//     for (let i = 0; i < theWordArray.length; i++) {
//         buildMeUp += `${theWordArray[i]} `
//         console.log(buildMeUp)
//     }

// }
// addExcitement(sentence)

// Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {

        if ((i + 1) % 3 === 0){
            buildMeUp += `${theWordArray[i]}! `
            console.log(buildMeUp)
        } else {
            buildMeUp += `${theWordArray[i]} `
            console.log(buildMeUp)
        }

    }

}

addExcitement(sentence, "!")

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

// I want to use a question mark
// function addExcitement (theWordArray, question) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {

//         if ((i + 1) % 3 === 0){
//             buildMeUp += `${theWordArray[i]} ${question} `
//             console.log(buildMeUp)
//         } else {
//             buildMeUp += `${theWordArray[i]} `
//             console.log(buildMeUp)
//         }

//     }

// }

// addExcitement(sentence, "?")
// function addExcitement (theWordArray, question, asterick) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {

//         if ((i + 1) % 3 === 0){
//             for (let k = 0; k < asterick; k++){
//                 buildMeUp += question
//             }
//             buildMeUp += " "
//         } else {
//             buildMeUp += `${theWordArray[i]} `}
//             console.log(buildMeUp)

//     }

// }

// addExcitement = (sentence) = {"*": "4"}
// let sentence = [
//     "The",
//     "walrus",
//     "danced",
//     "through",
//     "the",
//     "trees",
//     "in",
//     "the",
//     "light",
//     "of",
//     "the",
//     "moon",
//   ];
// let addExcitement = (theWordArray, question, asterick) => {
//   let buildMeUp = ""

//   for (let i = 0; i < theWordArray.length; i++) {
//     if ((i + 1) % 3 === 0) {
//         buildMeUp += theWordArray[i]
//       for (let k = 0; k < asterick; k++) {
//         buildMeUp += question;
//       }
//       buildMeUp += " "
//     } else {
//       buildMeUp += `${theWordArray[i]} `;
//     }
//     console.log(buildMeUp)
//   }
// };

// addExcitement(sentence, "?", "4")
