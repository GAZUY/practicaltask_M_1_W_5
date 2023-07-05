document.write("<p>\u0417\u0430\u0434\u0430\u043D\u0438\u0435</p>");
document.write("<p>* \u0412\u043E \u0432\u0441\u0435\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u0445 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u043A\u0443\u0440\u0441\u0438\u044E.</p>");
document.write("<p>1. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u044B\u0447\u0438\u0441\u043B\u044F\u0435\u0442 \u0444\u0430\u043A\u0442\u043E\u0440\u0438\u0430\u043B \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430.</p>");
var d = 6;
function calculatingTheFactorial(a) {
    var f = 1;
    if (0 <= a && a <= 1) {
        return f;
    }
    else if (a > 1) {
        return f = a * calculatingTheFactorial(a - 1);
    }
}
document.write("<p>\u0424\u0430\u043A\u0442\u043E\u0440\u0438\u0430\u043B \u0447\u0438\u0441\u043B\u0430 " + d + " \u0440\u0430\u0432\u0435\u043D " + calculatingTheFactorial(d) + "</p>");
document.write("<hr>");
document.write("<p>2. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u0432\u0441\u0435 \u0447\u0438\u0441\u043B\u0430 \u0438\u0437 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u0432 \u043F\u0440\u044F\u043C\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435. \u0418 \u0435\u0449\u0435 \u043E\u0434\u043D\u0443 \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u2013 \u0434\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430 \u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435.</p>");
var start = 3;
var end = 18;
document.write("<p>\u0417\u0430\u0434\u0430\u0435\u043C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u043E\u0442 " + start + " \u0434\u043E " + end + "</p>");
function outputsNumbers(min, max) {
    var str = '';
    if (min == max) {
        return str = ' ' + min + ' ';
    }
    else {
        return str = ' ' + min + ' ' + [outputsNumbers((min + 1), max)];
    }
}
document.write("<p>\u0427\u0438\u0441\u043B\u0430 \u0432 \u043F\u0440\u044F\u043C\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435: " + outputsNumbers(start, end) + "</p>");
console.log(outputsNumbers(start, end));
function outputsNumbers1(min, max) {
    var str = '';
    if (min == max) {
        return str = ' ' + max + ' ';
    }
    else {
        return str = ' ' + max + ' ' + [outputsNumbers1(min, max - 1)];
    }
}
document.write("<p>\u0427\u0438\u0441\u043B\u0430 \u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435: " + outputsNumbers1(start, end) + "</p>");
console.log(outputsNumbers1(start, end));
document.write("<hr>");
document.write("<p>3. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0435 \u0435\u0439 \u0447\u0438\u0441\u043B\u043E \u0437\u0430\u0434\u043E\u043C \u043D\u0430\u043F\u0435\u0440\u0435\u0434. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0447\u0438\u0441\u043B\u043E 1234 \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u043A\u0430\u043A 4321.</p>");
var num = '87654';
function flipTheNumber(s) {
    var arr = [];
    if (s < 0) {
        return arr;
    }
    else {
        return arr.push(num[flipTheNumber(s - 1)]);
    }
}
console.log(flipTheNumber(num.length - 1));
document.write("<p></p>");
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
