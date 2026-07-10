let name = prompt("Enter Name");
let item = Number(prompt("Choose a Number-- 1. Pizza 2. Burger 3. Pasta 4. Shawarma 5. Fried Rice"));
let quantity = Number(prompt("Enter Quantity"));

let food, price;
switch(item){
    case 1:
        food = "Pizza";
        price = 299;
        break;
    case 2:
        food = "Burger";
        price = 149;
        break;
    case 3:
        food = "Pasta";
        price = 249;
        break;
    case 4:
        food = "Shawarma";
        price = 199;
        break;
    case 5:
        food = "Fried Rice";
        price = 179;
        break;
    default:
        console.log("Invalid Choice");
}

console.log(item);
console.log(food);
console.log(price);
console.log(name);

let subtotal = price * quantity;
console.log(subtotal);
let gst = subtotal * (5/100);
console.log(gst);
let packing = 30;
console.log(packing);
let delivery;

if(subtotal < 1000){
    delivery = 60;
}
else{
    delivery = 0;
}

console.log(delivery);

let total = subtotal + gst + packing + delivery;

console.log(total);

document.getElementById("foodOrder").innerText = "---------------------------------- \n Food Order Receipt \n ----------------------------------"

document.getElementById("foodOrder").innerHTML += `
<h1>Name : ${name}</h1>
<p>Food : ${food}</p>
<p>Price : ${price}</p>
<p>Quantity : ${quantity}</p>
<h2>Sub Total : ${subtotal}</h2>
<h2>GST : ${gst}</h2>
<p>Packing Fees: ${packing}</p>
<p>Delivery Charges: ${delivery}</p>
<h1>Grand Total: ${total}</h1>`
;

