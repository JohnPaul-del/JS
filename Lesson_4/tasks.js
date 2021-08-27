/*
 * TASK1
 * Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны
 * единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать
 * соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

function objectOfNum(number) {
    let array = number.toString().split('');
    let objectNum = {};
    if (array.length > 3){
        return "Please, enter less than 999";
    }
    else if (array.length < 3) {
        array.unshift(0);
        objectNum['сотни'] =+ array[0];
        objectNum['десятки'] =+ array[1];
        objectNum['единицы'] =+ array[2];
        return objectNum
    }
    else {
        objectNum['сотни'] =+ array[0];
        objectNum['десятки'] =+ array[1];
        objectNum['единицы'] =+ array[2];
        return objectNum
    }
}

console.log(objectOfNum(769));    // { 'сотни': 7, 'десятки': 6, 'единицы': 9 }
console.log(objectOfNum(1000));   // Please, enter less than 999
console.log(objectOfNum(69));     // { 'сотни': 0, 'десятки': 6, 'единицы': 9 }



/*
 * TASK2/TASK3
 * a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы
 * b. Реализуйте такие объекты.
 * c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 * 
 * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
 */

function Product(name, description, price, quantity, discount=0) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.discountPrice = function() {
        if (this.discount == 0) {
            return this.price;
        }
        else {
            return this.price - this.price*this.discount/100;
        }
    }
    this.letCart = function() {
        return `${this.name} (в корзине: ${this.quantity})`;
    }
}

let shoppingCart = [];

shoppingCart.push(
    new Product('Monitor','Some desc about monitor', 5000, 1)
);
shoppingCart.push(
    new Product('Mouse','Some desc about mouse', 1000, 2, 5)
);
shoppingCart.push(
    new Product('Motherboard','Some desc about motherboard', 18000, 2)
);
shoppingCart.push(
    new Product('Keyboard','Some desc about keyboard', 2200, 10, 10)
);

function totalCartCost(shoppingCart) {
    return shoppingCart.reduce(function (total, shoppingCart) {
        return total + (shoppingCart.discountPrice() * shoppingCart.quantity)
    }, 0)
};

function showCart(shoppingCart) {
    shoppingCart.forEach(val => {
        console.log (`${val.letCart()},
                     Price with discount: ${val.discountPrice()},
                     Total price for product: ${val.quantity * val.discountPrice()}`);
    });
    console.log(`Total: ${totalCartCost(shoppingCart)}`);
};

showCart(shoppingCart);
