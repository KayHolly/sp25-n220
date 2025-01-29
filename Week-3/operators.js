const applePrice = 0.49; 

let pickedApples = 4;

//I went back and picked more apples
pickedApples +=10;

//Dropped a few
pickedApples -= 4;
const totalForApples = applePrice * pickedApples; 

console.log("Cost of Apples", totalForApples); 
console.log("Too manty Apples", pickedApples > 5);
//Eat a few apples and drop the rest cause I'm not eating 6 apples back to back
pickedApples -=6;

console.log("Too many apples", pickedApples >5);

let rememberRouteHome = false;

console.log("Good to go home", pickedApples >5 && rememberRouteHome);

let haveAMap = true;

console.log("Good to go home", rememberRouteHome || haveAMap);

console.log("Total for apples a number?", typeof totalForApples);

console.log("String of 5", String (5), 5);

let myAddress = "Ur Mum";

// myAddress = my Address + "Peach"
myAddress += "sBeach";

console.log("My Address:", myAddress);

console.log("Street name has st:", myAddress.toLowerCase().includes("st"));

console.log("My Address", myAddress.replace("St", "Street"));

console.log("ty".length);

let myAge = "21";

myAge = Number(myAge);

myAge += 5 / 12;

console.log("My Age", myAge.toFixed(2));

console.log("Next Birthday", Math.ceil(myAge));

console.log("My favorite number:", Math.round(Math.random() * 100));