let products = JSON.parse(localStorage.getItem('products'));
let productId = localStorage.getItem('productId');
let itemDiv = document.querySelector('.details');

let productDetails = products.find((item) => item.id == productId);

itemDiv.innerHTML = `
    <div class="images">
    <img class="img1" src="${productDetails.imgUrl}" alt="">
    </div>

    <div class="disc">
    <h2>${productDetails.title}</h2>
    <h3>Rating :</h3>
    <p>${productDetails.rate}</p>
    <hr>

    <h3 class="price">Price : ${productDetails.price} <span>EGP</span> </h3> <br>
    <h5 class="vat">All Prices Include VAT</h5>

    <a href="card.html"><button>Add To Card</button></a>

    </div>
    `;


