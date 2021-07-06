
const foo = ['alpha']

console.log(foo[0]);
console.log(foo[1]);
console.log(foo[2]);
console.log(foo[3]);
console.log(foo[4]);

// For loop
for (let idx = 0; idx < foo.length; idx++) {
  const element = foo[idx];
  console.log(element);
}


// iterators
// 1. Must take a function
// 2. The function will be invoked once for every element in the array?


// map Function signature?
// What do I send to map?
// 1. Takes a function as first argument
// What it gives back
// 2. The return of map, will be an array of all the elements, returned to the callback passed to map.

function bar(spam) {
  return 't' + spam
}

const foo = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf"];


const eggs = foo.map(bar); 

// ['talpha', 'tbravo']
console.log(eggs);


foo.filter(bar);



const programmers = [
  "Dennis Ritchie",
  "Brian Kernighan",
  "Ken Thompson",
  "Linus Torvalds",
  "Bjarne Stroustrup",
  "Tim Berners-Lee",
  "Donald Knuth",
  "Alan Turing",
  "Mark Zuckerberg",
  "Bill Gates",
  "Larry Page",
  "Elon Musk",
  "Jack Dorsey",
  "Satoshi Nakamoto",
  "Ada Lovelace",
  "Grace Hopper",
  "Dan Ambramov",
  "Jordan Walke",
  "Ryan Dahl",
  "David Heinemeier Hansson",
  "Guido Van Rossum",
  "Yukihiro Matsumoto",
  "Sergey Brin",
  "Lyndsey Scott",
  "Abhinav Asthana",
  "Abhijit Kane",
  "Ankit Sobti",
  "Loi Tran",
  "Charles Lee",
  "Tuan Nguyen",
  "Tan Vo",
  "Zed Zed",
  "Alpha Alpha",
];

// 1. For Loop
for (let idx = 0; idx < programmers.length; idx++) {
  const element = programmers[idx];
}

// 2. Map
const spam = programmers.map((el) => el.split(' ')[0]);

typeof spam

console.log({spam})


console.log(programmers[0]);
console.log(programmers[programmers.length -1]);

programmers.sort((a, b) => a.split(' ')[1].split('') > b.split(' ')[1].split('') ? 1 : -1)
console.log(programmers[0]);
console.log(programmers[programmers.length -1]);



let transactions = [
  {
    category: "Salary - Full Time",
    currency: "VND",
    amount: 100_000_000,
    type: "deposit",
  },
  { category: "Dining", currency: "USD", amount: 12, type: "withdrawal" },
  { category: "Dining", currency: "USD", amount: 104, type: "withdrawal" },
  { category: "Rent", currency: "USD", amount: 2000, type: "withdrawal" },
  { category: "Groceries", currency: "USD", amount: 250, type: "withdrawal" },
  {
    category: "Travel - Grab",
    currency: "USD",
    amount: 250,
    type: "withdrawal",
  },
  {
    category: "Travel - Fuel",
    currency: "USD",
    amount: 50,
    type: "withdrawal",
  },
  { category: "Living", currency: "USD", amount: 650, type: "withdrawal" },
  { category: "Groceries", currency: "USD", amount: 500, type: "withdrawal" },
  { category: "Living", currency: "USD", amount: 250, type: "withdrawal" },
  { category: "Living", currency: "USD", amount: 250, type: "withdrawal" },
  {
    category: "Salary - Part Time",
    currency: "USD",
    amount: 5000,
    type: "deposit",
  },
  { category: "Groceries", currency: "USD", amount: 450, type: "withdrawal" },
  {
    category: "Travel - Grab",
    currency: "USD",
    amount: 58,
    type: "withdrawal",
  },
  {
    category: "Travel - Grab",
    currency: "USD",
    amount: 100,
    type: "withdrawal",
  },
  {
    category: "Travel - Grab",
    currency: "USD",
    amount: 150,
    type: "withdrawal",
  },
  { category: "Groceries", currency: "USD", amount: 100, type: "withdrawal" },
  {
    category: "Entertainment",
    currency: "USD",
    amount: 100,
    type: "withdrawal",
  },
  {
    category: "Entertainment",
    currency: "USD",
    amount: 500,
    type: "withdrawal",
  },
  { category: "Groceries", currency: "USD", amount: 300, type: "withdrawal" },
  {
    category: "Travel - Airline",
    currency: "USD",
    amount: 500,
    type: "withdrawal",
  },
  {
    category: "Travel - Hotel",
    currency: "USD",
    amount: 1500,
    type: "withdrawal",
  },
  {
    category: "Travel - Fuel",
    currency: "USD",
    amount: 50,
    type: "withdrawal",
  },
  { category: "Groceries", currency: "USD", amount: 200, type: "withdrawal" },
  {
    category: "Portfolio Dividends",
    currency: "USD",
    amount: 500,
    type: "deposit",
  },
  {
    category: "Entertainment",
    currency: "USD",
    amount: 100,
    type: "withdrawal",
  },
  {
    category: "Travel - Fuel",
    currency: "USD",
    amount: 100,
    type: "withdrawal",
  },
  { category: "Groceries", currency: "USD", amount: 200, type: "withdrawal" },
  {
    category: "Entertainment",
    currency: "USD",
    amount: 100,
    type: "withdrawal",
  },
];


let newUSDBalance = 0
let newVNDBalance = 0

for (let idx = 0; idx < transactions.length; idx++) {
  const transaction = transactions[idx];
  if (transaction.currency === 'USD') {
    if(transaction.type === 'withdrawal') {
      newUSDBalance -= transaction.amount;
    } else {
      newUSDBalance += transaction.amount;
    }
  } else if (transaction.currency === 'VND') {
    if (transaction.type === "withdrawal") {
      newVNDBalance -= transaction.amount;
    } else {
      newVNDBalance += transaction.amount;
    }
  }
}



const order = {
  orderItems: [
  { id: "M40", item: "T-shirt", price: 29.9, quantity: 5, gender: 'm', category: 'Summer' },
  { id: "M32", item: "Hoodie", price: 99.9, quantity: 2, gender: 'm', category: 'Winter' },
  { id: "M11", item: "Sandals", price: 19.9, quantity: 1, gender: 'm', category: 'Summer' },
  { id: "M12", item: "Shorts", price: 29.9, quantity: 1, gender: 'm', category: 'Summer' },
  { id: "M13", item: "Exercise Shorts", price: 29.9, quantity: 5, gender: 'm', category: 'Exercise' },
  { id: "M41", item: "Shoes", price: 19.9, quantity: 1, gender: 'm', category: 'Summer' },
  { id: "M49", item: "Socks", price: 5.9, quantity: 10, gender: 'm', category: 'Undergarment' },
  { id: "M01", item: "Belt", price: 15.9, quantity: 1, gender: 'm', category: 'Accessory' },
  { id: "M42", item: "Underwear", price: 19.9, quantity: 10, gender: 'm', category: 'Undergarment' },
  { id: "F71", item: "T-shirt", price: 39.9, quantity: 5, gender: 'f', category: 'Summer' },
  { id: "F81", item: "Dress", price: 49.9, quantity: 5, gender: 'f', category: 'Summer' },
  { id: "F91", item: "Skirt", price: 39.9, quantity: 5, gender: 'f', category: 'Summer' },
  { id: "F01", item: "Shoes", price: 19.9, quantity: 10, gender: 'f', category: 'Summer' },
  { id: "F32", item: "Hoodie", price: 99.9, quantity: 2, gender: 'f', category: 'Winter' },
  { id: "F34", item: "Sandals", price: 19.9, quantity: 2, gender: 'f', category: 'Summer' },
  { id: "F36", item: "Shorts", price: 39.9, quantity: 3, gender: 'f', category: 'Summer' },
  { id: "F12", item: "Exercise Shorts", price: 29.9, quantity: 5, gender: 'f', category: 'Exercise' },
  { id: "F19", item: "Sleeping", price: 39.9, quantity: 3, gender: 'f', category: 'Undergarment' },
  { id: "F42", item: "Socks", price: 5.9, quantity: 10, gender: 'f', category: 'Undergarment' },
  { id: "F43", item: "Underwear", price: 39.9, quantity: 10, gender: 'f', category: 'Undergarment' },
  { id: "F44", item: "Bra", price: 29.9, quantity: 10, gender: 'f', category: 'Undergarment' },
  { id: "F01", item: "Belt", price: 15.9, quantity: 1, gender: 'f', category: 'Accessory' },
]}


// The signature of defineGrandTotal() demands something....
function defineGrandTotal(obj) {
  let subTotalPrice = 0
  obj.orderItems.map((orderItem) => orderItem.price * orderItem.quantity).map( price => subTotalPrice += price);
  let taxes = subTotalPrice * 0.07
  obj.grandTotal = taxes + subTotalPrice
}

console.log({ orderGrandTotal: order.grandTotal });
defineGrandTotal(order);
console.log({ orderGrandTotal: order.grandTotal });