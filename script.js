let cartCount = 0;
const cart = [];

function showProductDetails(title, description, image) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('add-to-cart-modal').onclick = function() {
    const title = document.getElementById('modal-title').innerText;
    const price = parseFloat(document.getElementById('modal-description').innerText.match(/\$(\d+(\.\d+)?)/)[0].replace('$', ''));
    addToCart(title, price);
    closeModal();
};

function addToCart(title, price) {
    let item = cart.find(product => product.title === title);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ title, price, quantity: 1 });
    }
    cartCount++;
    document.getElementById('cart-button').innerText = `🛒 Cart (${cartCount})`;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.title} (x${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
    });
}

document.getElementById('cart-button').onclick = function() {
    document.getElementById('cart-sidebar').classList.add('open');
};

function closeCart() {
    document.getElementById('cart-sidebar').classList.remove('open');
}

function checkout() {
    alert('Proceed to checkout!');
    closeCart();
}