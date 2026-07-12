const products = [
  {
    id: 1,
    name: "OnePlus 15R",
    price: 48000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz--lHv6pIcP9A2rZHGqNLb9Iy3mA0OEGp-SGeZRKqay3nKyhdEc2WL88R&s=10",
  },
  {
    id: 2,
    name: "IPhone 16 Pro",
    price: 48000,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/309729_0_mnt0xu.png",
  },
  {
    id: 3,
    name: "Samsung S25 Ultra",
    price: 95000,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAVstiV04jARnCDc9DFPCmoyh36O6RQTsCrM8vlAWM_QjLj4uHMFC53EE9nTmgTwbQu1TxVymI9dHLUnTq2NHR3l7FnwnEUBQ0uv7DRx3tmXWr3LVS_jUoZgo",
  },
  {
    id: 1,
    name: "OnePlus 15R",
    price: 48000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz--lHv6pIcP9A2rZHGqNLb9Iy3mA0OEGp-SGeZRKqay3nKyhdEc2WL88R&s=10",
  },
  {
    id: 2,
    name: "IPhone 16 Pro",
    price: 48000,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/309729_0_mnt0xu.png",
  },
  {
    id: 3,
    name: "Samsung S25 Ultra",
    price: 95000,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAVstiV04jARnCDc9DFPCmoyh36O6RQTsCrM8vlAWM_QjLj4uHMFC53EE9nTmgTwbQu1TxVymI9dHLUnTq2NHR3l7FnwnEUBQ0uv7DRx3tmXWr3LVS_jUoZgo",
  },
  {
    id: 1,
    name: "OnePlus 15R",
    price: 48000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz--lHv6pIcP9A2rZHGqNLb9Iy3mA0OEGp-SGeZRKqay3nKyhdEc2WL88R&s=10",
  },
  {
    id: 2,
    name: "IPhone 16 Pro",
    price: 48000,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/309729_0_mnt0xu.png",
  },
  {
    id: 3,
    name: "Samsung S25 Ultra",
    price: 95000,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAVstiV04jARnCDc9DFPCmoyh36O6RQTsCrM8vlAWM_QjLj4uHMFC53EE9nTmgTwbQu1TxVymI9dHLUnTq2NHR3l7FnwnEUBQ0uv7DRx3tmXWr3LVS_jUoZgo",
  },
  {
    id: 1,
    name: "OnePlus 15R",
    price: 48000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz--lHv6pIcP9A2rZHGqNLb9Iy3mA0OEGp-SGeZRKqay3nKyhdEc2WL88R&s=10",
  },
  {
    id: 2,
    name: "IPhone 16 Pro",
    price: 48000,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/309729_0_mnt0xu.png",
  },
  {
    id: 3,
    name: "Samsung S25 Ultra",
    price: 95000,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAVstiV04jARnCDc9DFPCmoyh36O6RQTsCrM8vlAWM_QjLj4uHMFC53EE9nTmgTwbQu1TxVymI9dHLUnTq2NHR3l7FnwnEUBQ0uv7DRx3tmXWr3LVS_jUoZgo",
  },
  {
    id: 1,
    name: "OnePlus 15R",
    price: 48000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz--lHv6pIcP9A2rZHGqNLb9Iy3mA0OEGp-SGeZRKqay3nKyhdEc2WL88R&s=10",
  },
  {
    id: 2,
    name: "IPhone 16 Pro",
    price: 48000,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/309729_0_mnt0xu.png",
  },
  {
    id: 3,
    name: "Samsung S25 Ultra",
    price: 95000,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAVstiV04jARnCDc9DFPCmoyh36O6RQTsCrM8vlAWM_QjLj4uHMFC53EE9nTmgTwbQu1TxVymI9dHLUnTq2NHR3l7FnwnEUBQ0uv7DRx3tmXWr3LVS_jUoZgo",
  },
  {
    id: 1,
    name: "OnePlus 15R",
    price: 48000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz--lHv6pIcP9A2rZHGqNLb9Iy3mA0OEGp-SGeZRKqay3nKyhdEc2WL88R&s=10",
  },
  {
    id: 2,
    name: "IPhone 16 Pro",
    price: 48000,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/309729_0_mnt0xu.png",
  },
  {
    id: 3,
    name: "Samsung S25 Ultra",
    price: 95000,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAVstiV04jARnCDc9DFPCmoyh36O6RQTsCrM8vlAWM_QjLj4uHMFC53EE9nTmgTwbQu1TxVymI9dHLUnTq2NHR3l7FnwnEUBQ0uv7DRx3tmXWr3LVS_jUoZgo",
  },
];

const customer = [
  {
    id: 1,
    name: "Madhan",
    email: "madhan@gmail.com",
  },
  {
    id: 2,
    name: "Vignesh",
    email: "vigensh@gmail.com",
  },
  {
    id: 3,
    name: "Rahul",
    email: "rahul@gmail.com",
  },
  {
    id: 4,
    name: "Hruthik",
    email: "hruthik@gmail.com",
  },
  {
    id: 5,
    name: "Pranav",
    email: "pranav@gmail.com",
  },
  {
    id: 6,
    name: "manoj",
    email: "manoj@gmail.com",
  },
  {
    id: 7,
    name: "naresh",
    email: "naresh@gmail.com",
  },
];

const orders = [
  {
    id: 1,
    name: "Madhan",
    product: "Oneplus 15R",
    quantity: 1,
    price: 48000,
    status: "Delivered",
  },
  {
    id: 2,
    name: "Manjula",
    product: "Cooker",
    quantity: 2,
    price: 5000,
    status: "Shipped",
  },
  {
    id: 3,
    name: "Pooja",
    product: "Makeup ",
    quantity: 3,
    price: 8000,
    status: "Pending",
  },
  {
    id: 4,
    name: "Babu",
    product: "Blankets",
    quantity: 2,
    price: 2500,
    status: "Delivered",
  },
  {
    id: 5,
    name: "Hruthik",
    product: "Airpods",
    quantity: 2,
    price: 14000,
    status: "Processing",
  },
  {
    id: 6,
    name: "Pranav",
    product: "Power Bank",
    quantity: 1,
    price: 2000,
    status: "Processing",
  },
];

for (let i = 0; i < products.length; i++) {
  document.getElementById("products").innerHTML += `<div class="card">
                <img src="${products[i].image}" alt="image">
                <h2>${products[i].name}</h2> 
                <h3>${products[i].price}</h3> 
                <button>Add to Cart</button>
                </div>`;
}

for (let i = 0; i < customer.length; i++) {
  document.getElementById("customers").innerHTML += `<tr>
                <td>${customer[i].id}</td>
                <td>${customer[i].name}</td>
                <td>${customer[i].email}</td>
                </tr>`;
}

for(let i = 0; i < orders.length; i++){
    document.getElementById("orders").innerHTML += `<tr>
    <td>${orders[i].id}</td>
    <td>${orders[i].name}</td>
    <td>${orders[i].product}</td>
    <td>${orders[i].quantity}</td>
    <td>${orders[i].price}</td>
    <td>${orders[i].status}</td>`;
}
