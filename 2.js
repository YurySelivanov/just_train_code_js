// 1. "Напишите программу, которая считывает целое положительное число n, 1 <= n <= 9, и выводит сумму равную 
// n + nn + nnn, где n не перемножаются, а конкатенируются

// "Пример: n = 1
// На выходе: 1 + 11 + 111 = 123"

function sum(num) {

    let newNum = String(num)

    let arr = []
    let str = ''

    for (let i = 1; i <= 3; i++) {        
        arr.push(newNum.repeat(i))
        str += newNum.repeat(i) + ' + '
    }

    let result = `${str.slice(0, str.length - 3)} = ${arr.map(Number).reduce((sum, el) => sum +el)}`

    return result

}

//console.log(sum(1));


// 2. "Написать программу, решающую квадратное уравнение методом дискриминанта:
// Формула дискриминанта  - D = b2 -4ac
// D < 0 - решений неи
// D = 0 - решение одно −b/2a. 
// D > 0 - решений два "

// "Пример 1. Решить уравнение: 3x2 - 4x + 2 = 0.
// Ответ: D < 0, корней нет.

// Пример 2. Решить уравнение: x2 - 6x + 9 = 0.
// Ответ: корень уравнения 3.

// Пример 3. Решить уравнение: x2 - 4x - 5 = 0.
// x1 = (4 + 6) : 2 = 5,
// x2 = (4 - 6) : 2 = -1."

function equation(a, b, c) {

    let D = b ** 2 - 4 * a * c

    if (D < 0) {
        return 'There are no solutions'
    } else if (D == 0) {
        return `There is one solution\nx1 = ${(-b) / (2 * a)}`
    } else if (D > 0) {
        return `There are two solutions\nx1 = ${(-b + Math.sqrt(D)) / (2 * a)}\nx2 = ${(-b - Math.sqrt(D)) / (2 * a)}`
    }
    
}

// console.log(equation(3, -4, 2));
// console.log(equation(1, -6, 9));
// console.log(equation(1, -4, -5));



// 3. "Напишите программу которая принимает на вход несортированный массив целых чисел и возвращает новый массив который содержит 
// [наименьшее число в массиве, наименьшее число между двумя границами массива, которое не находится в массиве,
// наибольшее число в массиве] 
// Наименьшим целым числом должно быть целое число из массива с наименьшим значением.
// Наибольшее целое число должно быть целым числом из массива с наибольшим значением.
// MinimumAbsent — это наименьшее число между наибольшим и наименьшим числом, которого нет в массиве."

function newArr(arr) {
    let minNumber
    let maxNumber
    let minimumAbsent
    
    sortArr = arr.sort((a, b) => a - b)
    minNumber = sortArr[0]
    maxNumber = sortArr.at(-1)

    for (let i = 0; i < sortArr.length; i++){
        if (sortArr[i] !== (sortArr[i + 1] - 1)) {
            minimumAbsent = sortArr[i] + 1
            break
        }
    }    
    
    return [minNumber, minimumAbsent, maxNumber]
}

//console.log(newArr([4, 6, 56, 43, 8, 32, 54, -3, 5, 7, 12, 9]));
