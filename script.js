let products = [{
    description: 'Great Brand Coffee Maker',
    price: 25
},
{
    description: 'Retro Fridge',
    price: 899
},
{
    description: 'Great Value Toaster',
    price: 15
},
{
    description: 'High Performance Stove',
    price: 499
},
{
    description: 'Basic Microwave',
    price: 49
},
{
    description: 'Great Value Blender',
    price: 79
}]

let total = 0;
let cartTotal = document.getElementById('cartTotal');
let shopLink = document.getElementById('shopLink');
let cartBox = document.getElementById('cartBox');
let closeBox = document.getElementById('closeBox');

shopLink.addEventListener('click', () => {
  cartBox.showModal();
});

let addProd1 = document.getElementById('addProd1');

addProd1.addEventListener('click', () => {
    
    total += products[0].price;
    cartTotal.textContent = `Total $${total}`;
    cartBox.insertAdjacentHTML('beforeend', `<div id='prod1Cart'><p>${products[0].description} $${products[0].price}</p><button onclick='remove1()' id='remove1Btn'>Remove</button></div>`);
});

function remove1() {
  let prod1Cart = document.getElementById('prod1Cart');
  let remove1Btn = document.getElementById('remove1Btn');
  prod1Cart.textContent = '';
  remove1Btn.textContent = '';
  total -= products[0].price;
  cartTotal.textContent = `Total $${total}`;
};

let addProd2 = document.getElementById('addProd2');

addProd2.addEventListener('click', () => {
    
    total += products[1].price;
    cartTotal.textContent = `Total $${total}`;
    cartBox.insertAdjacentHTML('beforeend', `<div id='prod2Cart'><p>${products[1].description} $${products[1].price}</p><button onclick='remove2()' id='remove2Btn'>Remove</button></div>`);
});

function remove2() {
  let prod2Cart = document.getElementById('prod2Cart');
  let remove2Btn = document.getElementById('remove2Btn');
  prod2Cart.textContent = '';
  remove2Btn.textContent = '';
  total -= products[1].price;
  cartTotal.textContent = `Total $${total}`;
};

let addProd3 = document.getElementById('addProd3');

addProd3.addEventListener('click', () => {
    
    total += products[2].price;
    cartTotal.textContent = `Total $${total}`;
    cartBox.insertAdjacentHTML('beforeend', `<div id='prod3Cart'><p>${products[2].description} $${products[2].price}</p><button onclick='remove3()' id='remove3Btn'>Remove</button></div>`);
});

function remove3() {
  let prod3Cart = document.getElementById('prod3Cart');
  let remove3Btn = document.getElementById('remove3Btn');
  prod3Cart.textContent = '';
  remove3Btn.textContent = '';
  total -= products[2].price;
  cartTotal.textContent = `Total $${total}`;
};

let addProd4 = document.getElementById('addProd4');

addProd4.addEventListener('click', () => {
    
    total += products[3].price;
    cartTotal.textContent = `Total $${total}`;
    cartBox.insertAdjacentHTML('beforeend', `<div id='prod4Cart'><p>${products[3].description} $${products[3].price}</p><button onclick='remove4()' id='remove4Btn'>Remove</button></div>`);
});

function remove4() {
  let prod4Cart = document.getElementById('prod4Cart');
  let remove4Btn = document.getElementById('remove4Btn');
  prod4Cart.textContent = '';
  remove4Btn.textContent = '';
  total -= products[3].price;
  cartTotal.textContent = `Total $${total}`;
};

let addProd5 = document.getElementById('addProd5');

addProd5.addEventListener('click', () => {
    
    total += products[4].price;
    cartTotal.textContent = `Total $${total}`;
    cartBox.insertAdjacentHTML('beforeend', `<div id='prod5Cart'><p>${products[4].description} $${products[4].price}</p><button onclick='remove5()' id='remove5Btn'>Remove</button></div>`);
});

function remove5() {
  let prod5Cart = document.getElementById('prod5Cart');
  let remove5Btn = document.getElementById('remove5Btn');
  prod5Cart.textContent = '';
  remove5Btn.textContent = '';
  total -= products[4].price;
  cartTotal.textContent = `Total $${total}`;
};

let addProd6 = document.getElementById('addProd6');

addProd6.addEventListener('click', () => {
    
    total += products[5].price;
    cartTotal.textContent = `Total $${total}`;
    cartBox.insertAdjacentHTML('beforeend', `<div id='prod6Cart'><p>${products[5].description} $${products[5].price}</p><button onclick='remove6()' id='remove6Btn'>Remove</button></div>`);
});

function remove6() {
  let prod6Cart = document.getElementById('prod6Cart');
  let remove6Btn = document.getElementById('remove6Btn');
  prod6Cart.textContent = '';
  remove6Btn.textContent = '';
  total -= products[5].price;
  cartTotal.textContent = `Total $${total}`;
};

function closeCartBox() {
   cartBox.close();
}
