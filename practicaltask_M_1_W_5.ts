

document.write (`<p>Задание</p>`)
document.write (`<p>* Во всех заданиях обязательно использовать рекурсию.</p>`)
document.write (`<p>1. Написать функцию, которая вычисляет факториал заданного числа.</p>`)
let d = 6
function calculatingTheFactorial (a,): any {
    let f = 1
     if (0 <= a && a <= 1){
        return f
    }else if (a > 1) {
       return f = a * calculatingTheFactorial (a - 1)
    }
    
}
document.write (`<p>Факториал числа ${d} равен ${calculatingTheFactorial ( d,)}</p>`)
document.write (`<hr>`)
document.write (`<p>2. Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом порядке. И еще одну функцию – для вывода в обратном порядке.</p>`)

let start = 3
let end = 18
document.write (`<p>Задаем диапазон от ${start} до ${end}</p>`)
function outputsNumbers (min, max,) {
    let str: string = ''
    if (min == max) {
        return str = ' ' + min + ' '
    }else{
        return str = ' ' + min + ' '+[outputsNumbers ((min + 1), max,)]
    }
}
document.write (`<p>Числа в прямом порядке: ${outputsNumbers (start, end,)}</p>`)
console.log (outputsNumbers (start, end,))

function outputsNumbers1 (min, max,) {
    let str: string = ''
    if (min == max) {
        return str = ' ' + max + ' '
    }else{
        return str = ' ' + max + ' '+[outputsNumbers1 (min, max - 1,)]
    }
}
document.write (`<p>Числа в обратном порядке: ${outputsNumbers1 (start, end,)}</p>`)
console.log (outputsNumbers1 (start, end,))
document.write (`<hr>`)
document.write (`<p>3. Написать функцию, которая выводит переданное ей число задом наперед. Например: число 1234 вывести как 4321.</p>`)

let num: string = '87654'
function flipTheNumber (s) {
    let arr: any = []
    if (s < 0) {
        return arr
    } else {
        return arr.push(num [flipTheNumber (s-1)])
    }
    
}
console.log (flipTheNumber (num.length - 1))








document.write (`<p></p>`)
/*

3. Написать функцию, которая выводит переданное ей число
задом наперед.
Например: число 1234 вывести как 4321.
4. Написать функцию, которая считает сумму цифр числа.
Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.
5. Написать функцию, которая принимает число и выводит
соответствующее количество вложенных пар круглых скобок.
Например: число 4 – (((()))).
*/