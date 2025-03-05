const detailSectionRef = document.qurrySelector("#details");

// Data
const pokemon = {
    name: "Ponyta",
    type: "Fire",
    weaknesses: ["Water", "Ground", "Rock"],
};
const myParty = [
    { name: "Ponyta", type: "Fire"},
    { name: "Meowth", type: "Normal"},
    { name: "Houndoom", type: "Dark, Fire"},

]
console.log("My starter pokemon.", pokemon);
console.log("My pokemon's type:", pokemonType);

console.log("First pokemon in a party", myParty[0]);
console.log("Last pokemon's name", myParty[myParty.length - 1].name);

for(let i = 0; i < myParty.length; i++) {
    const currentPokemon = myParty[i];
    detailSectionRef.innerHTML +="<div>";
    detailSectionRef.innerHTML += "<h4>" + currentPokemon.name +"</h4>";
    detailSectionRef.innerHTML += "<p>Type(s):" + currentPokemon.type + "</p>";
    detailSectionRef.innerHTML += "</div>"
}