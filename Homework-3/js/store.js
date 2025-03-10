// let yes be thew answer

let itemPrice = 40.99;
let salesTax = 0.07; 
let discountRate = 0.10;

let totalAfterTax = itemPrice * (1 + salesTax);
let discountAfterTax = itemPrice * (1 + salesTax) * (1 - discountRate);

console.log("Total price after tax $",totalAfterTax.toFixed(2));
console.log("Qualifications for Discount?", totalAfterTax >= 50);
console.log("Discount total price after tax $", discountAfterTax.toFixed(2));
