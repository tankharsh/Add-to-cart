console.log("Hello, world!");

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: "Laptop", price: 2000 },
        { id: 2, name: "phone", price: 1500 },
        { id: 3, name: "Ipad", price: 2000 },
        { id: 4, name: "Ipad pro", price: 1100 },
    ]

    const cart = [];

    const List = document.getElementById('cart-item');
    const selectItems = document.getElementById('select-items');
    const displayErrorMsg = document.getElementById('select-item-empty');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkoutBtn');


    products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('cart-items');
        productDiv.innerHTML = `
        <span>${product.name}</span>
        <span>Price: ${product.price} 
        <button class="btn" data-id="${product.id}">Add to cart </button> </span>
        `;
        List.appendChild(productDiv);
    });

    List.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const id = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === id);

            addTocart(product);
        }
    });

    function addTocart(product) {
        cart.push(product);
        displayCart();
        console.log(cart);
    }


    function displayCart() {
        selectItems.innerHTML = "";
        displayErrorMsg.innerText = "";
        let total = 0;
        
        if (cart.length != 0) {
            for(let item of cart) {
                total += item.price;
                const cartItemm = document.createElement('p');
                cartItemm.innerHTML = `
                ${item.name} - ${item.price}
                `;
                selectItems.appendChild(cartItemm);
            }
            totalPrice.textContent = `Total Price : ${total}`;
        } else {
            console.log("not work");
        }
    }

    checkoutBtn.addEventListener('click',()=>{
        cart.length = 0
        selectItems.innerHTML = "";
        totalPrice.textContent =`Total Price : 0.00`
        alert("Cart checkout Successfull");
    })
});
