let cart = [];
const cartContainer = document.getElementById('cart-container');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.getElementById('cart-icon').addEventListener('click', () => {
  cartContainer.classList.toggle('active');
});

document.getElementById('cart-close').addEventListener('click', () => {
  cartContainer.classList.remove('active');
});

function addToCart(name, price, image) {
  const existingProduct = cart.find(product => product.name === name);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(name) {
  cart = cart.filter(product => product.name !== name);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(product => {
    const productTotal = product.price * product.quantity;
    total += productTotal;
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h4>${product.name}</h4>
          <p>$${product.price} x ${product.quantity}</p>
        </div>
        <button onclick="removeFromCart('${product.name}')">Eliminar</button>
      </div>
    `;
  });
  cartTotal.innerText = total;
  cartCount.innerText = cart.length;
}

function clearCart() {
  cart = [];
  updateCart();
}

function checkout() {
  alert('Compra realizada con éxito!');
  clearCart();
}


document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search');
  const productContainers = document.querySelectorAll('.nose');

  searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase();
      
      productContainers.forEach(container => {
          const productName = container.querySelector('h2').textContent.toLowerCase();
          const productDescription = container.querySelector('p').textContent.toLowerCase();

          if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
              container.style.display = '';
          } else {
              container.style.display = 'none';
          }
      });
  });
});