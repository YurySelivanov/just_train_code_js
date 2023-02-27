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



// 4. Напишите программу которая принимает на вход целое число n и строку s и возвращает строку s повторённую n раз

//Variant 1
function repeater_1(n, s) {
    return s.repeat(n)
}
//console.log(repeater_1(5, 'Hello world!'));

//Variant 2
function repeater_2(n, s) {
    let str = ''

    for (let i = 1; i <= n; i++) {
        str += s
    }
    return str
}
//console.log(repeater_2(5, 'Hello world!'));



// 5. "На вход подаётся слово, нужно вернуть среднюю букву (ы) по следующему принципу:
// Если количество букв в слове нечётное - вернуть среднюю букву
// Если четное - вернуть две средние"

function average_letter(word) {

    if (word.length % 2 != 0) {
        return word[Math.floor(word.length / 2)]
    } else {
        return word[Math.floor(word.length / 2) - 1] + word[Math.floor(word.length / 2)]
    }

}

//console.log(average_letter('printer'));
//console.log(average_letter('computer'));



// 6. "Напишите функцию, которая принимает список строк в качестве аргумента и возвращает отфильтрованный список, содержащий те же элементы, но с удаленными «гусями».
// Гуси — это любые строки в следующем массиве, который предварительно заполнен в вашем решении
// Элементы в возвращаемом массиве должны быть в том же порядке, что и в исходном массиве, переданном вашей функции, хотя и с удаленными «гусями».
// Обратите внимание, что все строки будут в том же регистре, что и предоставленные, а некоторые элементы могут повторяться."

// примеры:
// "input:
// [""Кряква"", ""Крюк Билл"", ""Африканка"", ""Хохлатая"", ""Пилигрим"", ""Тулуза"", ""Синий шведский""]
// Гуси = [""Африканка"", ""Римская хохлатая"", ""Тулуза"", ""Пилигрим"", ""Штайнбахер""]
// Output:
// [""Кряква"", ""Крюк Билл"", ""Хохлатая"", ""Синий шведский""]"

function geese(sortOfBirds) {

    const geese = ["Африканка", "Римская хохлатая", "Тулуза", "Пилигрим", "Штайнбахер"]

    const withoutGeese = []
    let isGeese = false

    for (let bird of sortOfBirds) {
        isGeese = false
        for (let goose of geese) {
            if (bird == goose) {
                isGeese = true
            }
        }

        if (isGeese == false) {
            withoutGeese.push(bird)
        }
    }

    return withoutGeese
}

//console.log(geese(["Кряква", "Крюк Билл", "Африканка", "Хохлатая", "Пилигрим", "Тулуза", "Синий шведский"]));
