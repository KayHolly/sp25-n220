// AT this point let just is better

let password = " d0nteatTheScript";

let space = password.includes(" ");
let eightCharacters = password.length;
let hasEat = password.includes("eat");

console.warn("Password Requirements: A valid password does not start with a space, is at least 8 characters, and does not include the word eat")
console.log("Password starts with space?:", space);
console.log("Password has at least eight characters?:", eightCharacters >= 8);
console.log("Password contains the word eat", hasEat);

console.warn("Is the password valid?", !space && eightCharacters >= 8 && !hasEat);