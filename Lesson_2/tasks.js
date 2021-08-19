 /*
  * TASK1 
  * 
  * var a = 1, b = 1, c, d;
  * c = ++a, alert(c),           // 2 В данном случае к переменной a прибавляется единица
  * d = b++, alert(d),           // 1 Т.к. операторы стоят после переменной, то будет выведено значение, а после выполнится процедура сложения
  * c = (2+ ++a), alert(c),      // 5 Переменная a сохраняет значение 2 из операции выше. Выражение вида 2+1+2 получается 5
  * d = (2+ b++), alert(d),      // 4 Переменная b сохраняет значение 2 из операции выше. Выражение вида 2+2 получается 4
  * alert(a),                    // 3 после выполнения операций, значение переменной a равно трем. 
  * alert(b),                    // 3 после выполнения операций, значение переменной b равно трем.
  */
 
 
 /*
  * TASK2
  * Чему будет равен x? 
  * var a = 2;
  * var x = 1 + (a *= 2);
  * 
  * Результат будет равен 5. Сокращение *= соответствует выражению a = a * 2. Полный аналог выражения: x = 1 + (a = a * 2)
  */
 
 
/*
 * TASK3 
 * Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
 * если a и b положительные, вывести их разность;
 * если а и b отрицательные, вывести их произведение;
 * если а и b разных знаков, вывести их сумму;
 */

let a = 7;
let b = -9;
if (a > 0 && b > 0){
    res = a - b;
    console.log(res);
}
else if (a < 0 && b < 0){
    res = a * b;
    console.log(res);
}
else if (a > 0 && b < 0 || a < 0 && b > 0) {
    res = a + b;
    console.log(res);
}


/*
 * TASK4 
 * Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
 */

//let a = prompt "Введите значение от 1 до 15"
let a = 5,
res='';
switch(a) {
    case 0: res+= (a++) + ', ';
    case 1: res+= (a++) + ', ';
    case 2: res+= (a++) + ', ';
    case 3: res+= (a++) + ', ';
    case 4: res+= (a++) + ', ';
    case 5: res+= (a++) + ', ';
    case 6: res+= (a++) + ', ';
    case 7: res+= (a++) + ', ';
    case 8: res+= (a++) + ', ';
    case 9: res+= (a++) + ', ';
    case 10: res+= (a++) + ', ';
    case 11: res+= (a++) + ', ';
    case 12: res+= (a++) + ', ';
    case 13: res+= (a++) + ', ';
    case 14: res+= (a++) + ', ';
    case 15: res+= (a++) + '.';
}

console.log(res);


/*
 * TASK5 
 * Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
 */


function add (a, b) {
    return a+b;
}

function sub (a, b) {
    return a-b;
}

function mult (a, b) {
    return a*b;
}

function div (a, b) {
    if (b == 0) {
        return 'Error. Division by zero!';
    } else {
        return a/b;
    }
}
let c = 6
let d = 3

console.log(add(c, d), sub (c, d), mult(c, d), div(c, d));


/*
 * TASK6
 * Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
 * 
 * 
 * Дорабатываем задачу №5
 */


function calc(a, b, operation) {
    
    switch (operand) {
        case("+"):
            return add (a, b);
        case("-"):
            return sub (a, b);
        case("*"):
            return mult (a, b);
        case("/"):
            return div (a, b);
        default:
            return "Неправильно введена арифметическая операция!";
    }
}

/*
 * let x = +prompt('Введите первое число'),
 * let z = +prompt('Введите второе число'),
 * operand = prompt('Введите арифметический знак "+", "-", "*", "/"')
*/
let x = 5;
let z = 6;
operand = '/';
console.log(calc(x, z, operand));


/*
 * TASK7
 * * Сравнить null и 0. Объяснить результат.
 */
console.log (typeof(null)); // object
console.log (typeof(0)); // number
console.log (null == 0); // false
console.log (null === 0); // false
console.log (null <= 0); // true
console.log (null >= 0); // true
console.log (null < 0); // false
console.log (null > 0); // false
/* 0 - это число, null - является определенным значением отсутсвия какого либо объекта.
 * Возврат true при не строго сравнении (<=, >=) прописан в The Abstract Equality Comparison Algorithm и 
 * The Abstract Relational Comparison Algorithm. И является стандартом.
 */



/*
 * TASK8
 * * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow - степень.
 */

function exp (val, deg) {
    if (deg == 0) {
        return 1;
    }
    else {
        return val * exp (val, deg - 1);
    }
}
console.log(exp(2, 8)); //256 
