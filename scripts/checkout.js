let productsOrderedContatiner = document.getElementById("totalProducts"); // to get the container of the total card items
let numberOfproductsElement = document.getElementById("numberOfProducts"); // to get number of products in cart
let totalPriceElement = document.getElementById("totalPrice");
console.log(productsOrderedContatiner);

let items = JSON.parse(localStorage.getItem("productsInCard")); // to get array of products in card


//<p><a href="#">Product 1</a> <span class="price">$15</span></p>

let numberOfProducts = 0;
let totalPrice = 0;
items.forEach((item) => {
    numberOfProducts++;
    totalPrice += parseInt(item.price * item.qty);
    let createdP = document.createElement("p");
    let createdA = document.createElement("a");
    let createdSpan = document.createElement("span");
    createdSpan.setAttribute("class", "price");
    createdA.innerText = item.title;
    createdSpan.innerText = (item.price * item.qty) + " EGP";
    createdP.appendChild(createdA);
    createdP.appendChild(createdSpan);


    productsOrderedContatiner.insertBefore(createdP, productsOrderedContatiner.childNodes[4]);
});

numberOfproductsElement.innerText = numberOfProducts;
totalPriceElement.innerText = totalPrice + " EGP";



