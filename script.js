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


let addProd1 = document.getElementById('addProd1');

addProd1.addEventListener('click', () => {
    amount1 += 1;
    products[0].price += 25;
    products[0].amount += 1;
    total += 25;
    localStorage.setItem('description1', products[0].description);
    localStorage.setItem('price1', products[0].price);
    localStorage.setItem('amount1', products[0].amount);
    localStorage.setItem('total', total);
    prod1Cart.textContent = `${localStorage.getItem('description1')} (X${localStorage.getItem('amount1')}) $${localStorage.getItem('price1')}`
    if(products[0].price == 25) {
    prod1Cart.insertAdjacentHTML('afterend', `<div id='remove1Btn'><button onclick='remove1()'>Remove</button></div>`);
    remove1Btn = document.getElementById('remove1Btn');
    localStorage.setItem('remove1Btn', remove1Btn)
    }
});

function remove1() {
  products[0].price = parseInt(localStorage.getItem('price1'))
  products[0].price -= 25;
  localStorage.setItem('price1', parseInt(localStorage.getItem('price1') - 25));
  products[0].amount = parseInt(localStorage.getItem('amount1'))
  products[0].amount -= 1;
  localStorage.setItem('amount1', parseInt(localStorage.getItem('amount1')- 1));
  amount1 -= 1;
  prod1Cart.textContent = `${localStorage.getItem('description1')} (X${localStorage.getItem('amount1')}) $${localStorage.getItem('price1')}`
  if(parseInt(localStorage.getItem('amount1')) == 0) {
    prod1Cart.textContent = '';
    remove1Btn.textContent = '';
    localStorage.removeItem('description1');
    localStorage.removeItem('remove1Btn');
  }
  total = parseInt(localStorage.getItem('total'));
  total -= 25;
  cartTotal.textContent = `Total $${total}`;
  localStorage.setItem('total', total);
};

let addProd2 = document.getElementById('addProd2');

addProd2.addEventListener('click', () => {
  amount2 += 1;
  products[1].price += 799;
  products[1].amount += 1;
  total += 799;
  localStorage.setItem('description2', products[1].description);
  localStorage.setItem('price2', products[1].price);
  localStorage.setItem('amount2', products[1].amount);
  localStorage.setItem('total', total);
  prod2Cart.textContent = `${localStorage.getItem('description2')} (X${localStorage.getItem('amount2')}) $${localStorage.getItem('price2')}`
  if(products[1].price == 799) {
  prod2Cart.insertAdjacentHTML('afterend', `<div id='remove2Btn'><button onclick='remove2()'>Remove</button></div>`);
  remove2Btn = document.getElementById('remove2Btn');
  localStorage.setItem('remove2Btn', remove2Btn)
  }
});

function remove2() {
  products[1].price = parseInt(localStorage.getItem('price2'))
  products[1].price -= 799;
  localStorage.setItem('price2', parseInt(localStorage.getItem('price2') - 799));
  products[1].amount = parseInt(localStorage.getItem('amount2'))
  products[1].amount -= 1;
  localStorage.setItem('amount2', parseInt(localStorage.getItem('amount2')- 1));
  amount2 -= 1;
  prod2Cart.textContent = `${localStorage.getItem('description2')} (X${localStorage.getItem('amount2')}) $${localStorage.getItem('price2')}`
  if(parseInt(localStorage.getItem('amount2')) == 0) {
    prod2Cart.textContent = '';
    remove2Btn.textContent = '';
    localStorage.removeItem('description2');
    localStorage.removeItem('remove2Btn');
  }
  total = parseInt(localStorage.getItem('total'));
  total -= 799;
  cartTotal.textContent = `Total $${total}`;
  localStorage.setItem('total', total);
};

let addProd3 = document.getElementById('addProd3');

addProd3.addEventListener('click', () => {
  amount3 += 1;
  products[2].price += 15;
  products[2].amount += 1;
  total += 15;
  localStorage.setItem('description3', products[2].description);
  localStorage.setItem('price3', products[2].price);
  localStorage.setItem('amount3', products[2].amount);
  localStorage.setItem('total', total);
  prod3Cart.textContent = `${localStorage.getItem('description3')} (X${localStorage.getItem('amount3')}) $${localStorage.getItem('price3')}`
  if(products[2].price == 15) {
  prod3Cart.insertAdjacentHTML('afterend', `<div id='remove3Btn'><button onclick='remove3()'>Remove</button></div>`);
  remove3Btn = document.getElementById('remove3Btn');
  localStorage.setItem('remove3Btn', remove3Btn)
  }
});

function remove3() {
  products[2].price = parseInt(localStorage.getItem('price3'))
  products[2].price -= 15;
  localStorage.setItem('price3', parseInt(localStorage.getItem('price3') - 15));
  products[2].amount = parseInt(localStorage.getItem('amount3'))
  products[2].amount -= 1;
  localStorage.setItem('amount3', parseInt(localStorage.getItem('amount3')- 1));
  amount3 -= 1;
  prod3Cart.textContent = `${localStorage.getItem('description3')} (X${localStorage.getItem('amount3')}) $${localStorage.getItem('price3')}`
  if(parseInt(localStorage.getItem('amount3')) == 0) {
    prod3Cart.textContent = '';
    remove3Btn.textContent = '';
    localStorage.removeItem('description3');
    localStorage.removeItem('remove3Btn');
  }
  total = parseInt(localStorage.getItem('total'));
  total -= 15;
  cartTotal.textContent = `Total $${total}`;
  localStorage.setItem('total', total);
};

let addProd4 = document.getElementById('addProd4');

addProd4.addEventListener('click', () => {
  amount4 += 1;
  products[3].price += 499;
  products[3].amount += 1;
  total += 499;
  localStorage.setItem('description4', products[3].description);
  localStorage.setItem('price4', products[3].price);
  localStorage.setItem('amount4', products[3].amount);
  localStorage.setItem('total', total);
  prod4Cart.textContent = `${localStorage.getItem('description4')} (X${localStorage.getItem('amount4')}) $${localStorage.getItem('price4')}`
  if(products[3].price == 499) {
  prod4Cart.insertAdjacentHTML('afterend', `<div id='remove4Btn'><button onclick='remove4()'>Remove</button></div>`);
  remove4Btn = document.getElementById('remove4Btn');
  localStorage.setItem('remove4Btn', remove4Btn)
  }
});

function remove4() {
  products[3].price = parseInt(localStorage.getItem('price4'))
  products[3].price -= 499;
  localStorage.setItem('price4', parseInt(localStorage.getItem('price4') - 499));
  products[3].amount = parseInt(localStorage.getItem('amount4'))
  products[3].amount -= 1;
  localStorage.setItem('amount4', parseInt(localStorage.getItem('amount4')- 1));
  amount4 -= 1;
  prod4Cart.textContent = `${localStorage.getItem('description4')} (X${localStorage.getItem('amount4')}) $${localStorage.getItem('price4')}`
  if(parseInt(localStorage.getItem('amount4')) == 0) {
    prod4Cart.textContent = '';
    remove4Btn.textContent = '';
    localStorage.removeItem('description4');
    localStorage.removeItem('remove4Btn');
  }
  total = parseInt(localStorage.getItem('total'));
  total -= 499;
  cartTotal.textContent = `Total $${total}`;
  localStorage.setItem('total', total);
};

let addProd5 = document.getElementById('addProd5');

addProd5.addEventListener('click', () => {
  amount5 += 1;
  products[4].price += 49;
  products[4].amount += 1;
  total += 49;
  localStorage.setItem('description5', products[4].description);
  localStorage.setItem('price5', products[4].price);
  localStorage.setItem('amount5', products[4].amount);
  localStorage.setItem('total', total);
  prod5Cart.textContent = `${localStorage.getItem('description5')} (X${localStorage.getItem('amount5')}) $${localStorage.getItem('price5')}`
  if(products[4].price == 49) {
  prod5Cart.insertAdjacentHTML('afterend', `<div id='remove5Btn'><button onclick='remove5()'>Remove</button></div>`);
  remove5Btn = document.getElementById('remove5Btn');
  localStorage.setItem('remove5Btn', remove5Btn)
  }
});

function remove5() {
  products[4].price = parseInt(localStorage.getItem('price5'))
  products[4].price -= 49;
  localStorage.setItem('price5', parseInt(localStorage.getItem('price5') - 49));
  products[4].amount = parseInt(localStorage.getItem('amount5'))
  products[4].amount -= 1;
  localStorage.setItem('amount5', parseInt(localStorage.getItem('amount5')- 1));
  amount5 -= 1;
  prod5Cart.textContent = `${localStorage.getItem('description5')} (X${localStorage.getItem('amount5')}) $${localStorage.getItem('price5')}`
  if(parseInt(localStorage.getItem('amount5')) == 0) {
    prod5Cart.textContent = '';
    remove5Btn.textContent = '';
    localStorage.removeItem('description5');
    localStorage.removeItem('remove5Btn');
  }
  total = parseInt(localStorage.getItem('total'));
  total -= 49;
  cartTotal.textContent = `Total $${total}`;
  localStorage.setItem('total', total);
};

let addProd6 = document.getElementById('addProd6');

addProd6.addEventListener('click', () => {
  amount6 += 1;
  products[5].price += 79;
  products[5].amount += 1;
  total += 79;
  localStorage.setItem('description6', products[5].description);
  localStorage.setItem('price6', products[5].price);
  localStorage.setItem('amount6', products[5].amount);
  localStorage.setItem('total', total);
  prod6Cart.textContent = `${localStorage.getItem('description6')} (X${localStorage.getItem('amount6')}) $${localStorage.getItem('price6')}`
  if(products[5].price == 79) {
  prod6Cart.insertAdjacentHTML('afterend', `<div id='remove6Btn'><button onclick='remove6()'>Remove</button></div>`);
  remove6Btn = document.getElementById('remove6Btn');
  localStorage.setItem('remove6Btn', remove6Btn)
  }
});

function remove6() {
  products[5].price = parseInt(localStorage.getItem('price6'))
  products[5].price -= 79;
  localStorage.setItem('price6', parseInt(localStorage.getItem('price6') - 79));
  products[5].amount = parseInt(localStorage.getItem('amount6'))
  products[5].amount -= 1;
  localStorage.setItem('amount6', parseInt(localStorage.getItem('amount6')- 1));
  amount6 -= 1;
  prod6Cart.textContent = `${localStorage.getItem('description6')} (X${localStorage.getItem('amount6')}) $${localStorage.getItem('price6')}`
  if(parseInt(localStorage.getItem('amount6')) == 0) {
    prod6Cart.textContent = '';
    remove6Btn.textContent = '';
    localStorage.removeItem('description6');
    localStorage.removeItem('remove6Btn');
  }
  total = parseInt(localStorage.getItem('total'));
  total -= 79;
  cartTotal.textContent = `Total $${total}`;
  localStorage.setItem('total', total);
};

function closeCartBox() {
  cartBox.close();
}
