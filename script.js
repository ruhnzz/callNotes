let formDisplay = document.querySelector(".form-container");

let plus = document.querySelector(".plus");
let note = document.querySelector(".note-container");
let close = document.querySelector(".close")
let form = document.querySelector("form");

plus.addEventListener("click",()=>{
    console.log("click")
    formDisplay.style.display="initial"
    note.style.display="none"
})

close.addEventListener("click",()=>{
    note.style.display="flex"
    formDisplay.style.display="none"
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let inputs = document.querySelectorAll("input")
    formDisplay.style.display="none"
    //now we need to create dynamic card
    
})

