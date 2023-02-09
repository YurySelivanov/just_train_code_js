// 1.
// "на вход подается 5 чисел, программа должна вернуть минимальное и максимальное число
// + усложнение числа должны быть только целочисленными
// + усложнение: количество подаваемых цифр может быть любым"

function maxMinNumbers(numbers) {

    let allInt = 1
    for (let i = 0; i < numbers.length; i++) {
        if (!Number.isInteger(numbers[i])) {
            allInt = -1
        }
    }
    if (allInt == 1) {
        let sortArr = numbers.sort((a, b) => a - b)
        return [sortArr[0], sortArr[sortArr.length - 1]]
    } else {
        return 'You need to type only integer numbers'
    }
}

//console.log(maxMinNumbers([5, 6, 2, 9.3, 1, 65, 34]));


// 2.
// На вход подается массив из положительных и отрицательных чисел. Вернуть нужно массив, где все числа поменяли свой знак ( с + на - и наоборот)
// Пример:
// при аргументе [1,-2,3,-4,5] выводим [-1,2,-3,4,-5]


function changeSign(arrNumbers) {

    return arrNumbers.map(el => el * (-1))
}

//console.log(changeSign([1,-2,3,-4, 5]));


// 3."Ваша задача состоит в том, чтобы вернуть выходную строку, созданную из входной строки s , 
// заменив каждый символ в s числом, представляющим количество раз, 
// которое этот символ встречается в s, и разделив каждое число символом (символами) sep."
// Пример:
// "freqSeq('hello world', '-')
// //result '1-1-3-3-2-1-1-2-1-3-1'
// freqSeq('19999999',    ':')
// //result '1:7:7:7:7:7:7:7'
// freqSeq('^^^**$',      'x')
// //result '3x3x3x2x2x1'"

function freqSeq(str, sign) {
    let newStr = ''

    for (let i = 0; i < str.length; i++) {
        let count = 0
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++
            }
        }
        newStr += count + sign
    }

    return newStr.slice(0, newStr.length - 1)
}

// console.log(freqSeq('hello world', '-'));
// console.log(freqSeq('19999999', ':'));
// console.log(freqSeq('^^^**$', 'x'));



// 4. 
//A) "Нужно написать валидацию для канала для взрослых. На вход подаётся возраст:
//      Если тебе строго меньше 18 - программа должна вернуть строку ""Доступ закрыт для несовершеннолетних""
//      Если тебе от 18 до 65 включительно - ""Добро пожаловать!""
//      Если тебе выше 65 - ""Ну какое вам уже порно?)""
//      Если пришло число меньше 5 или больше 100 - Неверный возраст
//      На вход может падать что угодно, проверить надо что это число, и если нет - кинуть валидационную ошибку про тип данных
// B) Усложнение номер два - программа на вход принимает массив чисел, нужно вернуть по очереди ответы для каждого
// C) Усложнение номер 3 -
//      Программа на вход принимает массив объектов типа [{ name: ""Jake"", age: 18}...]
//      Вернуть массив имен тех, кому доступ разрешен, на остальных кинуть в консоль сообщение из первоначальных условий"

// task A
function adultChannalOne(age) {

    if (Number.isInteger(age)) {
        if (age < 18 && age >= 5) {
            console.log('Access denied to minors')
        } else if (age >= 18 && age <= 65) {
            console.log('Welcome!')
        } else if (age > 65 && age <= 100) {
            console.log('Well, what kind of porn do you already?')
        } else {
            console.log('Wrong age')
        }

    } else {
        console.log('Wrong data')
    }
}

//adultChannalOne(23)

// task B
function adultChannalArr(arrAges) {

    for (let i = 0; i < arrAges.length; i++) {

        if (Number.isInteger(arrAges[i])) {
            if (arrAges[i] < 18 && arrAges[i] >= 5) {
                console.log('Access denied to minors')
            } else if (arrAges[i] >= 18 && arrAges[i] <= 65) {
                console.log('Welcome!')
            } else if (arrAges[i] > 65 && arrAges[i] <= 100) {
                console.log('Well, what kind of porn do you already?')
            } else {
                console.log('Wrong age')
            }

        } else {
            console.log('Wrong data')
        }
    }
}

//adultChannalArr([10, 23, 80, 3, 102, 'hello', true, null, '#'])

//task C
function adultChannalObj(arrObjects) {

    arrObjects.forEach(el => {
            if (Number.isInteger(el.age)) {
                if (el.age < 18 && el.age >= 5) {
                    console.log('Access denied to minors')
                } else if (el.age >= 18 && el.age <= 65) {
                    console.log('Welcome!')
                } else if (el.age > 65 && el.age <= 100) {
                    console.log('Well, what kind of porn do you already?')
                } else {
                    console.log('Wrong age')
                }

            } else {
                console.log('Wrong data')
            }         
    });
}
//adultChannalObj([{ name: "Jake", age: 10 }, { name: "Liza", age: 23 }, { name: "Bob", age: 80 }, { name: "Bob", age: 'hello' }])
