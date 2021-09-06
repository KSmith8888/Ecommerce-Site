let products = [{
    description: localStorage.getItem('description1') || 'Great Brand Coffee Maker',
    price: localStorage.getItem('price1') || 0,
    amount: localStorage.getItem('amount1') || 0
},
{
    description: localStorage.getItem('description2') || 'Retro Fridge',
    price: localStorage.getItem('price2') || 0,
    amount: localStorage.getItem('amount2') || 0
},
{
    description: localStorage.getItem('description3') || 'Great Value Toaster',
    price: localStorage.getItem('price3') || 0,
    amount: localStorage.getItem('amount3') || 0
},
{
    description: localStorage.getItem('description4') || 'High Performance Stove',
    price: localStorage.getItem('price4') || 0,
    amount: localStorage.getItem('amount4') || 0
},
{
    description: localStorage.getItem('description5') || 'Basic Microwave',
    price: localStorage.getItem('price5') || 0,
    amount: localStorage.getItem('amount5') || 0
},
{
    description: localStorage.getItem('description6') || 'Great Value Blender',
    price: localStorage.getItem('price6') || 0,
    amount: localStorage.getItem('amount6') || 0
}]

let total = parseInt(localStorage.getItem('total')) || 0;
let amount1 = 0;
let amount2 = 0;
let amount3 = 0;
let amount4 = 0;
let amount5 = 0;
let amount6 = 0;

let cartTotal = document.getElementById('cartTotal');
let shopLink = document.getElementById('shopLink');
let cartBox = document.getElementById('cartBox');
let closeBox = document.getElementById('closeBox');
let prod1Cart = document.getElementById('prod1Cart');
let prod2Cart = document.getElementById('prod2Cart');
let prod3Cart = document.getElementById('prod3Cart');
let prod4Cart = document.getElementById('prod4Cart');
let prod5Cart = document.getElementById('prod5Cart');
let prod6Cart = document.getElementById('prod6Cart');

shopLink.addEventListener('click', () => {
  if(amount1 === 0 && amount2 === 0 && amount3 === 0 && amount4 === 0) {
  if(localStorage.getItem('description1') != null) {
    prod1Cart.textContent = `${localStorage.getItem('description1')} (X${parseInt(localStorage.getItem('amount1'))}) $${parseInt(localStorage.getItem('price1'))}`;
    if(localStorage.getItem('remove1Btn') != null) {
    prod1Cart.insertAdjacentHTML('afterend', `<div id='remove1Btn'><button onclick='remove1()'>Remove</button></div>`)
    }
  }
  if(localStorage.getItem('description2') != null) {
    prod2Cart.textContent = `${localStorage.getItem('description2')} (X${parseInt(localStorage.getItem('amount2'))}) $${parseInt(localStorage.getItem('price2'))}`;
    if(localStorage.getItem('remove2Btn') != null) {
    prod2Cart.insertAdjacentHTML('afterend', `<div id='remove2Btn'><button onclick='remove2()'>Remove</button></div>`);
    }
  }
  if(localStorage.getItem('description3') != null) {
    prod3Cart.textContent = `${localStorage.getItem('description3')} (X${parseInt(localStorage.getItem('amount3'))}) $${parseInt(localStorage.getItem('price3'))}`;
    if(localStorage.getItem('remove3Btn') != null) {
    prod3Cart.insertAdjacentHTML('afterend', `<div id='remove3Btn'><button onclick='remove3()'>Remove</button></div>`);
    }
  }
  if(localStorage.getItem('description4') != null) {
    prod4Cart.textContent = `${localStorage.getItem('description4')} (X${parseInt(localStorage.getItem('amount4'))}) $${parseInt(localStorage.getItem('price4'))}`;
    if(localStorage.getItem('remove4Btn') != null) {
    prod4Cart.insertAdjacentHTML('afterend', `<div id='remove4Btn'><button onclick='remove4()'>Remove</button></div>`);
    }
  }
  if(localStorage.getItem('description5') != null) {
    prod5Cart.textContent = `${localStorage.getItem('description5')} (X${parseInt(localStorage.getItem('amount5'))}) $${parseInt(localStorage.getItem('price5'))}`;
    if(localStorage.getItem('remove5Btn') != null) {
    prod5Cart.insertAdjacentHTML('afterend', `<div id='remove5Btn'><button onclick='remove5()'>Remove</button></div>`);
    }
  }
  if(localStorage.getItem('description6') != null) {
    prod6Cart.textContent = `${localStorage.getItem('description6')} (X${parseInt(localStorage.getItem('amount6'))}) $${parseInt(localStorage.getItem('price6'))}`;
    if(localStorage.getItem('remove6Btn') != null) {
    prod6Cart.insertAdjacentHTML('afterend', `<div id='remove6Btn'><button onclick='remove6()'>Remove</button></div>`);
    }
  }
}
  if(localStorage.getItem('total') != null) {
  cartTotal.textContent = `Total $${parseInt(localStorage.getItem('total'))}`;
  }
  cartBox.showModal();
});

function closeCartBox() {
    cartBox.close();
  }
