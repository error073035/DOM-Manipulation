const randomColor = document.querySelector(".random-color");
const applyColor = document.querySelector(".apply-color");
const colorInput = document.querySelector(".color-input");
const currentColor = document.querySelector(".dynamic-change");


// console.log(randomColor, applyColor, colorInput, currentColor); 

randomColor.addEventListener("click", () =>{
  // console.log("Random Color");
  const changedColor = document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  currentColor.innerHTML = changedColor;
});

applyColor.addEventListener("click", () =>{
  // console.log("Apply Color");
  const inputValue = colorInput.value;
  // console.log(inputValue);
  const changedColor = document.body.style.backgroundColor = inputValue;
  currentColor.innerHTML = changedColor;
});
