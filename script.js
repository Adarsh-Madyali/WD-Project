let cart = [];

function addToCart(book) {
    cart.push(book);
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}

// Search Function
document.getElementById("search").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let books = document.querySelectorAll(".book");

    books.forEach(book => {
        let title = book.querySelector("h3").textContent.toLowerCase();
        book.style.display = title.includes(filter) ? "block" : "none";
    });
});
