let cart = document.querySelector('#cart');

let shoppingCart = [];
let empyCart = '<p>Basket is empty</p>';

class Product {
    constructor(name, description, price, quantity, discount = 0) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
        this.discountPrice = function () {
            if (this.discount == 0) {
                return this.price;
            }
            else {
                return this.price - this.price * this.discount / 100;
            }
        };
        this.letCart = function () {
            return this.quantity;
        };
    }
};


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

if (shoppingCart == 0) {
    cart.insertAdjacentHTML('beforeend', `<div class="products">${empyCart}</div>`)
} else {
    for (let el of shoppingCart) {
        cart.insertAdjacentHTML('beforeend', 
        `<div class="products">
        <span>${el.name}</span>
        <span>${el.discountPrice() * el.quantity} x ${el.quantity}</span></div>`);
    }

}

function totalCartCost(shoppingCart) {
    return shoppingCart.reduce(function (total, shoppingCart) {
        return total + (shoppingCart.discountPrice() * shoppingCart.quantity)
    }, 0)
};

if (shoppingCart != 0) {
    let total = cart.insertAdjacentHTML('beforeend', 
    `<div class="products total"><p>Total price: ${totalCartCost(shoppingCart)}</p></div>`)

};
