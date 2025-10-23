const changeBg = () => {
    document.body.style.backgroundColor = "beige";
}
let p = document.createElement("p");

p.innerText = "Hej från Javascript";

document.querySelector("h1").textContent = "Rubrik från Javascript";

let btn = document.createElement("button");
btn.textContent = "Change color"

btn.addEventListener("click", (event) => {
    let allParagraphs = document.querySelectorAll("p");
    allParagraphs.forEach( (p,i) => p.style.color = "red")
})

document.body.append(p, btn);

//Uppgift 2


let numbers = [2,5,10,15,20,25,30,53,60,92]
let ul = document.createElement("ul");

numbers.forEach((num, index) => {
    console.log(num, index);
    let li = document.createElement("li");
    li.textContent = num;
    
    if((index+1) % 5 === 0) {
        li.style.color = "purple";
    } else if(num % 2 === 0){
        li.style.color ="red";
    } else {
        li.style.color = "blue";
    }
    
    ul.append(li);
})

document.body.append(ul);


//Uppgift 3

let profiles = [{
        name: "Theo",
        age: 53,
        amountOfPets: 12,
        email: "Theo@yahoo.se",
        favoriteAuthor: "Astrid Lindgren",
        lovesWinter: true
    }, {
        name: "Leonard",
        age: 12,
        amountOfPets: 1,
        email: "Leo@tiktok.se",
        favoriteAuthor: "August Strindberg",
        lovesWinter: false
    }, {
        name: "Letty",
        age: 12,
        amountOfPets: 1,
        email: "Letty@tiktok.se",
        favoriteAuthor: "August Strindberg",
        lovesWinter: true
    }
]

let profileCards = document.querySelector("#profile-cards");

let getProfilesBtn = document.querySelector("#getProfiles");

getProfilesBtn.addEventListener("click", () => {
    profiles.forEach(profile => {
        profileCards.innerHTML += `
        <div class="profile ${profile.lovesWinter ? "winter" : "summer"}">
            <p>Name: ${profile.name}</p>
            <p>Age: ${profile.age}</p>
            <p>Pets: ${profile.amountOfPets}</p>
            <p>Email: ${profile.email}</p>
            <p>Favorite Author: ${profile.favoriteAuthor}</p>
            <p>Prefers: ${profile.lovesWinter ? "Winter" : "Summer"}</p>
        </div>`
    })
})
 // Ternary Conditional Operator
// W ? T : F

