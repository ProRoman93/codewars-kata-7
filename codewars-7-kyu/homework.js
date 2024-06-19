//write a func to count sum of elements using reduce

// function someFunction(n){
//     for(let i = 0; i < n; i * 2) {
//         console.log(n)
//     }
// }
//
// someFunction(2)

//Прийняти вхідний параметр num.
// Перетворити num на рядок.
// Розбити рядок на масив окремих символів.
// Для кожного символу в масиві:
//
//     Перетворити символ на число.
//     Піднести число до квадрату.
//     Перетворити результат знову на рядок.
//
// Об'єднати всі рядки результатів у один рядок.
// Перетворити об'єднаний рядок на число.
// Повернути результат.

function squareDigits(num) {
    const numToStr = num.toString()
    const strToArr = numToStr.split('').map(item => item * item).join('')
    return strToArr

}

console.log(squareDigits(3212)) // 9414

console.log(squareDigits(2112)) // 4114)


//Прийняти два вхідних параметри s1 та s2.
// Створити порожній масив.
// Для кожного індексу i від 0 до довжини s1 мінус 1:
//
//     Перевірити, чи елемент в s1 за індексом i не дорівнює елементу в s2 за індексом i.
//     Якщо не дорівнює, додати індекс i до масиву.
//
// Повернути масив.


function spot(s1,s2){
    const result = []

    for (let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]){
            result.push(i)
        }
    }

    return result
}


console.log(spot('abcdefg', 'abcqetg')) //[3, 5]
console.log(spot('Hello World!', 'hello world.')) //[0, 6, 11]
console.log(spot('FixedGrey', 'FixedGrey')) //[]
