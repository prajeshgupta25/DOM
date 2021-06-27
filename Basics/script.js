let addbutton = document.querySelector(".add");
let subbutton = document.querySelector(".sub");
let pTagValue = document.querySelector("p");

addbutton.addEventListener("click", function(){
   pTagValue.innerText = Number(pTagValue.innerText) + 1;
});


subbutton.addEventListener("click", function(){
   pTagValue.innerText = Number(pTagValue.innerText) - 1;
});




