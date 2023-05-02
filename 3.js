// 1. Напишите программу которая принимает на вход целое число n и строку s и возвращает строку s повторённую n раз

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



// 2. "На вход подаётся слово, нужно вернуть среднюю букву (ы) по следующему принципу:
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



// 3. "Напишите функцию, которая принимает список строк в качестве аргумента и возвращает отфильтрованный список, содержащий те же элементы, но с удаленными «гусями».
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