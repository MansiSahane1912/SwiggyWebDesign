let foods = document.getElementById("foods");
let orders = document.getElementById("orders");
let dishes = document.getElementById("dishes");

foods.addEventListener("click", function() {
    foods.style.color = "yellow";
    orders.style.color = "white";
    dishes.style.color = "white";
})

orders.addEventListener("click", function() {
    orders.style.color = "yellow";
    foods.style.color = "white";
    dishes.style.color = "white";

})

dishes.addEventListener("click", function() {
    dishes.style.color = "yellow";
    orders.style.color = "white";
    foods.style.color = "white";
})


let logBtn = document.getElementById("logBtn");

logBtn.addEventListener("click", function() {
    document.querySelector(".loginPage").style.display = "block";
})


let logedBtn =  document.getElementById("logedBtn");

logedBtn.addEventListener("click",function() {
 
     let email = document.getElementById("name");
     let pass = document.getElementById("pass");

     if(email.value == "" || pass.value == "")
     {
        alert("Please Enter Email Password.");
     }
     else
     {
        alert("You Logged in Sucessful")
        document.querySelector(".loginPage").style.display = "none";

     }
})

let trackBtn = document.getElementById("trackBtn");

trackBtn.addEventListener("click", function() {
    document.querySelector(".tracking").style.display = "flex";
    document.getElementById("food").style.display = "none";
    document.getElementById("order").style.display = "none";
    document.getElementById("dish").style.display = "none";
    document.querySelector(".main-class").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    

})
