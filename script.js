let cartCount = 0;

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
    cartCount++;
    document.getElementById('cart-button').innerText = `🛒 Cart (${cartCount})`;
    closeModal();
};
