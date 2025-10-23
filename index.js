let addTodoBtn = document.querySelector("#addTodo");
let taskInput = document.querySelector("#task");
let todoList = document.querySelector("#todo-list");


addTodoBtn.addEventListener("click", () => {
    
    if(todoList.children.length < 5){
        let li = document.createElement("li");
        li.innerText = taskInput.value;

        //delete-btn
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Ta bort";
        li.append(deleteBtn);

        //delete-funktion
        deleteBtn.addEventListener("click", (e) => {
            //ta bort tillhörande li-tagg;
            e.target.parentElement.remove();
        })
        todoList.append(li);
    } else {
        alert("Maxgräns nådd!")
    }
})

//Uppgift 2
let number1 = document.querySelector("#tal1");
let number2 = document.querySelector("#tal2");
let addBtn = document.querySelector("#add");
let subBtn = document.querySelector("#subtract");
let multiBtn = document.querySelector("#multiply")
let answer = document.querySelector("#answer");

const calculate = (operator) => {

    //Alternativ 1

    if(operator === "+"){
        answer.innerText = Number(number1.value) + Number(number2.value)
    } else if (operator === "-"){
        answer.innerText = Number(number1.value) - Number(number2.value)
    } else if (operator === "*"){
        answer.innerText = Number(number1.value) * Number(number2.value)
    }

    //Alternativ 2 - Läs på om Javascript eval-method för att förstå denna
    answer.innerText = eval(`${number1.value}${operator}${number2.value}`);
}

addBtn.addEventListener("click", () => calculate("+"));
subBtn.addEventListener("click", () => calculate("-"));
multiBtn.addEventListener("click", () => calculate("*"));

//Uppgift 3

let number = document.querySelector("#number");

number.addEventListener("change", (e) => {
    if(number.value < 4){
        e.target.style.color = "red";
    } else if (number.value <= 7){
    e.target.style.color = "orange";}
    else if (number.value <= 10){
        e.target.style.color = "green";
    } else {
        alert(`You wrote ${number.value}. Pick a number between 1-10`)
        e.target.style.color = "black";
}})