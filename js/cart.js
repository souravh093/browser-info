const addProduct = () => {
  const productField = document.getElementById("product-name");
  const productQuantity = document.getElementById("product-quantity");

  const product = productField.value;
  productField.value = "";
  const quantity = productQuantity.value;
  productQuantity.value = "";

  displayProduct(product, quantity);

  console.log(product, quantity);
  // saveProductToLocalStorage(product, quantity);
  setLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("productContainer");
  ul.innerHTML += `<li>${product}: ${quantity}</li>`;
  // const li = document.createElement('li');
  // li.innerText = `${product}: ${quantity}`
  // ul.appendChild(li);
};

// const getLocalStorage = () => {
//     let cart = {};
//     const getData = localStorage.getItem('cart');
//     if (getData) {
//         cart = JSON.parse(getData);
//     }
//     return cart;
// }

// const setLocalStorage = (product, quantity) => {
//     const cart = getLocalStorage();
//     cart[product] = quantity;
//     const cartStringify = JSON.stringify(cart)
//     localStorage.setItem('cart', cartStringify);
// }

// const displayStorageData = () => {
//     const saveCart = getLocalStorage();
//     for(const product in saveCart) {
//         const quantity = saveCart[product];
//         displayProduct(product, quantity)
//     }
// }

// displayStorageData();

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  // console.log(cart);
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
  // console.log(cartStringify);
};

const displayProductFormLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  for (const product in savedCart) {
    const quantity = savedCart[product];
    // console.log(product, quantity);
    displayProduct(product, quantity);
  }
};

displayProductFormLocalStorage();
