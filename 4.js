// 1. Find the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

function sumMul(n, m) {

    let count = 0

    for (let i = 1; i < (m / n); i++) {
        count += (n * i)
    }

    return (count > 0) ? count : "INVALID"
}

// console.log(sumMul(2, 9));
// console.log(sumMul(4, -7));



// 2.There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points.
// For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  
    let average = (classPoints.reduce((sum, el) => sum +el) + yourPoints) / (classPoints.length + 1)
    
    return yourPoints > average
}

// console.log(betterThanAverage([2, 3], 5));
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
// console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
// console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));


// 3. Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle

function findNeedle(haystack) {
  
   for (let i in haystack) {
    if (haystack[i] == "needle") {
        return `found the needle at position ${i}`
    }
   }  
}

//console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
