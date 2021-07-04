let ul = document.querySelector("ul");
let btn = document.querySelector(".btn");


btn.addEventListener("click", function(){
   
   let li = document.createElement("li");
   li.innerText = "Hello";
   ul.append(li);

})

