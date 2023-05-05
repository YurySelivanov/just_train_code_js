// 1.  Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
//     The first word within the output should be capitalized only if the original word was capitalized 
//     (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//      Examples
//       "the-stealth-warrior" gets converted to "theStealthWarrior"

function toCamelCase(str) {

    let newStr = str.replace(/[^a-z]/gi, ' ')
    let newStr2 = ''

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i - 1] === ' ') {
            newStr2 += newStr[i].toUpperCase()
        } else {
            newStr2 += newStr[i]
        }
    }

    return newStr2.replaceAll(' ', '')

}

// console.log(toCamelCase('the_stealth_warrior'));



// 2.   Someone was hacking the score. Each student's record is given as an array The objects in the array are given 
//      again as an array of scores for each name and total score.
//      The scores for each grade is:

//      A: 30 points
//      B: 20 points
//      C: 10 points
//      D: 5 points
//      Everything else: 0 points
//      If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

//      Returns the name of the hacked name as an array when scoring with this rule.


var array = [
    ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 120, ["B", "A", "A", "A"]],
    ["name3", 160, ["B", "A", "A", "A","A"]],
    ["name4", 140, ["B", "A", "A", "C", "A"]]
    ]

function findHack(arr) {

    let hacked = []

    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr[i][2].length; j++) {
            if (arr[i][2][j] == 'A') count += 30
            if (arr[i][2][j] == 'B') count += 20
            if (arr[i][2][j] == 'C') count += 10
            if (arr[i][2][j] == 'D') count += 5
        }

        if (arr[i][2].length >= 5) {
            let award = true
            for (let j = 0; j < arr[i][2].length; j++) {
                if (arr[i][2][j] !== 'A' && arr[i][2][j] !== 'B') {
                    award = false
                    break
                }
            }
            if (award) count += 20
        }        

        if (count > 200) count = 200

        if (count != arr[i][1]) {
            hacked.push(arr[i][0])
        }
    }

    return hacked
}

// console.log(findHack(array));


// 3.  You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
//     Write a simple function to check if the string contains the word hallo in different languages.

function validateHello(greetings) {

    let obj = {
        hello: 'english',
        ciao: 'italian',
        salut: 'french',
        hallo: 'german',
        hola: 'spanish',
        ahoj: 'czech republic',
        czesc: 'polish'
    }

    let result = false

    for (let key in obj) {
        if (key == greetings) {
            result = true
        }
    }
    return result
}

//   console.log(validateHello('ahoj'));
//   console.log(validateHello('meh'));


// 4.  Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
//     Example:
//     Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenAndSort(array) {

    let arr = []

    for (let i = 0; i < array.length; i++) {
        arr.push(...array[i])
    }
    return arr.sort((a, b) => a - b)
  }

//   console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));