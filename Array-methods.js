const laptop = [
    {name: "Asus", price: 70000, color: "silver", ram: "8gb"},
    {name: "Mac", price: 120000, color: "Black", ram: "12gb"},
    {name: "Lenovo", price: 60000, color: "silver", ram: "6gb"},
]



// MAPPing in array
// map return kore but for each kisu return kore na
// const prices = laptop.map(laptop => laptop.price);
// console.log(prices);


// const names = laptop.map(laptop => laptop.name);
// console.log(names);


//ForEach in array
// laptop.forEach(laptops =>{
//     console.log(laptops);
// })



// filter
// const cheap = laptop.filter(laptop => laptop.price <= 70000);
// console.log(cheap);



// find 
const special = laptop.find(laptop => laptop.name.includes('n'));
console.log(special);


