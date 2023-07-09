

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

function outputsNumbers1 (min, max,) {
    let str: string = ''
    if (min == max) {
        return str = ' ' + max + ' '
    }else{
        return str = ' ' + max + ' '+[outputsNumbers1 (min, max - 1,)]
    }
}
document.write (`<p>Числа в обратном порядке: ${outputsNumbers1 (start, end,)}</p>`)
document.write (`<hr>`)
document.write (`<p>3. Написать функцию, которая выводит переданное ей число задом наперед. Например: число 1234 вывести как 4321.</p>`)

let num: string = '87654'
document.write (`<p>Дано число: ${num}</p>`)
function flipTheNumber (s, i) {
    let a: string
    if (i == 0) {
        return a = s[i]
    } else {
        return a = s[i] + flipTheNumber (s, --i)
    }
    
}

document.write (`<p>Перевернули это число: ${flipTheNumber (num, num.length - 1)}</p>`)
document.write (`<hr>`)
document.write (`<p>4. Написать функцию, которая считает сумму цифр числа.
Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.</p>`)

function sumDigitsOfTheNumber (s, i) {
    let sum
   // console.log (s)
   // console.log (i)
   // console.log (Number(s[i]))
    if (i == 0) {
        return sum = +s[i]
    } else {
        return  sum = +s[i] + (+sumDigitsOfTheNumber (s, --i))
    }
}

document.write (`<p>Сумма цифр числа "${num}" равна: ${sumDigitsOfTheNumber (num, num.length - 1)}</p>`)
document.write (`<hr>`)
document.write (`<p>5. Написать функцию, которая принимает число и выводит
соответствующее количество вложенных пар круглых скобок.
Например: число 4 – (((()))).</p>`)
/*
let brackets:any [] =[]
function printTheBrackets (num){
    if (num == 1){
        
        return brackets.unshift('(') + brackets.push(')')
    }else{
        
        return brackets.unshift('(') + brackets.push(')') + printTheBrackets (--num)
    }
}
console.log (printTheBrackets (5))
console.log (brackets.join(''))
*/
function printTheBrackets (num) {
    if (num == 1){
        return '('+')'
    } else {
        return '('+ printTheBrackets (num - 1)+')'
    }
}

document.write (`<p>число 5 - ${printTheBrackets (5)}</p>`)
document.write (`<p>число 10 - ${printTheBrackets (10)}</p>`)











/*
document.write (`<p></p>`)


5. Написать функцию, которая принимает число и выводит
соответствующее количество вложенных пар круглых скобок.
Например: число 4 – (((()))).
*/