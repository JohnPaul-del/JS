var prod0 = {
    title: "Product 1",
    imageSrc: 'small/image-1.jpeg',
    price: 500,
    count: 1,
};
var prod1 = {
    title: "Product 2",
    imageSrc: 'small/image-2.jpeg',
    price: 2500,
    count: 1,
};
var prod2 = {
    title: "Product 3",
    imageSrc: 'small/image-3.jpeg',
    price: 1200,
    count: 1,
};

var items = [prod0, prod1, prod2];

var totalSum = 0;
var totalCount = 0;

function addToCart() {
    var products = document.querySelector(".products");
    for (var i = 0; i < items.length; i++){
        var el = document.createElement("div");
        el.classList.add("product-item");
        var elImg = document.createElement("img")
        elImg.src = items[i].imageSrc;
        el.append(elImg);
        elTitle = document.createElement("h3");
        elTitle.classList.add("product-title");
        elTitle.innerText = items[i].title;
        el.append(elTitle);
        elPrice= document.createElement("p");
        elPrice.classList.add("product-price");
        elPrice.innerText = "Price: " + items[i].price;
        el.append(elPrice);
        elBtn = document.createElement("button");
        elBtn.innerText = "Buy";
        elBtn.classList.add("buy-button");
        elBtn.setAttribute("id", 'prod-' + i);
        el.appendChild(elBtn);
        elBtn.onclick = addProduct;
        products.appendChild(el);
    }
}

function addProduct(e){
    var buyProduct = items[e.target.id.split("-")[1]];
    var buyProducts = document.querySelector(".basket-products");
    var tr = buyProducts.insertRow();
    var td = tr.insertCell();
    td.appendChild(document.createTextNode(buyProduct.title));
    // var td = tr.insrtCell();
    td.appendChild(document.createTextNode(" " + buyProduct.price));
    totalSum += buyProduct.price;
    totalCart = document.querySelector(".total-summ");
    totalCart.innerHTML = "Total price: " + totalSum;
}

window.onload = addToCart;