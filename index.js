const greetBtn = document.querySelector("#greetBtn");

const nameInput = document.querySelector("#name");

greetBtn.addEventListener("click", (event) => {
    let h2 = document.createElement("h2");
    h2.innerText = "Welcome " + nameInput.value;

    document.body.append(h2);

})

//DOM Traversal

let allBtns = document.querySelectorAll("button");

allBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        let h2 = event.target.previousElementSibling;
        h2.style.color = "lightgreen";
    })
})