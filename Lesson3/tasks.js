/*
 * TASK1
 * С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 * 
 */

 let count = 100;
 let result = []
 
 nextIter:
 for (let el = 2; el <= count; el++){
     for (let num = 2; num < el; num++){
         if (el % num == 0) continue nextIter;
    }
     result.push(el)
}

console.log(result)


/*
 * TASK2
 * С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
 */

let basket = [
    {
        product: "Mouse",
        price: 500,
        count: 2
    },
    {
        product: "Motherboard",
        price: 1000,
        count: 1
    },
    {
        product: "Keyboard",
        price: 800,
        count: 5
    },
    {
        product: "Monitor",
        price: 1500,
        count: 3
    }
];

let prodAmount = [];
let totalAmount = 0;
let totalQuantity = 0;

for (let el of basket) {
    totalAmount += (el.price * el.count);
    totalQuantity += el.count
   /* prodAmount.push({
        product: el.product,            Хотел организовать вывод каждого элемента, но видимо это имеет отношение
        amount: (el.price * el.count)   к седующей теме 
    }); */
}

console.log("Items: " + JSON.stringify(prodAmount) +"\nProducts in the busket: " + totalQuantity + "\nTotal Amount: " + totalAmount);


/*
 * TASK4
 * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
 * for(…){// здесь пусто}
 */

let res = []
for(let el = 0; el <= 9; res.push(el++)){
} ;
console.log(res)

/*
 * TASK5
 * *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
 */

let count = 1;
let el = "";

while (count <= 20) {
    count++;
    console.log(el += "x");
} 
