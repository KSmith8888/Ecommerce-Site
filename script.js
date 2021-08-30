let products = [{
    description: 'Coffee Maker',
    price: 25
},
{
    description: 'Fridge',
    price: 899
},
{
    description: 'Toaster',
    price: 15
},
{
    description: 'Stove',
    price: 499
},
{
    description: 'Microwave',
    price: 49
},
{
    description: 'Blender',
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
let coffee = document.createElement('p');
coffee.append('Great Brand Coffee Maker $25')

addProd1.addEventListener('click', () => {
    
    total += products[0].price;
    cartTotal.textContent = `Total $${total}`;
    cartBox.appendChild(coffee);
});

let addProd2 = document.getElementById('addProd2');
let fridge = document.createElement('p');
fridge.append('Retro Fridge $899');

addProd2.addEventListener('click', () => {
    
    total += products[1].price;
    cartTotal.textContent = `Total $${total}`;
    cartBox.appendChild(fridge);
});

function closeCartBox() {
   cartBox.close();
}
