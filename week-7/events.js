const h1Ref = document.querySelector("h1");
const nameRef = document.querySelector("#name");
const sizeRef = document.querySelector("#size");


function changeH1Style() {
  if (h1Ref.style.backgroundColor !== "gray") {
    h1Ref.style.backgroundColor = "gray";
  } else {
    h1Ref.style.backgroundColor = "white";
  }
}

function changeH1Color(e) {
  // console.log(e)
  // console.log(e.target.value);
  h1Ref.style.color = e.target.value;
}

function changeH1Size(e) {
  const fontSize = Number(e.target.value);
  if (fontSize >= 8) {
    h1Ref.style.fontSize = e.target.value + "px";
  } 
//   else {
//     e.target.value = 8;
//   }
}

function cleanH1Size(e){
    const fontSize = Number(e.target.value);
    if(fontSize <8) {
        e.target.value = 8;
        h1Ref.style.fontSize = "8px";
    }
}

h1Ref.onclick = changeH1Style;
nameRef.onchange = changeH1Color;

sizeRef.onchange= cleanH1Size; 
sizeRef.oninput = changeH1Size;
