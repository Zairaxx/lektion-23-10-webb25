// Skriva ut värde från en input
const greetBtn = document.querySelector("#greetBtn");
const greeting = document.querySelector("#greeting");
const nameInput = document.querySelector("#name");

greetBtn.addEventListener("click", (event) => {
    let h2 = document.createElement("h2");
    h2.innerText = "Welcome " + nameInput.value;

    greeting.append(h2);

})

//DOM Traversal

let allBtns = document.querySelectorAll("div button");
console.log(allBtns);
allBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        let h2 = event.target.previousElementSibling;
        h2.style.color = "lightgreen";
    })
})

// Filtrera baserat på Radio buttons

let filterBtn = document.querySelector("#filter");


filterBtn.addEventListener("click", () => {
    //Hur vi hittar en vald radio-button 
    let choice = document.querySelector("[name='color']:checked")
    console.log("Vald färg", choice.value);

    //Hitta samtliga valda checkboxar
   let allCheckedBoxes = document.querySelectorAll("[name='brands']:checked")
   //Skriv ut samtliga valda värden 
   allCheckedBoxes.forEach(checkbox => console.log("Vald märke:", checkbox.value))

})