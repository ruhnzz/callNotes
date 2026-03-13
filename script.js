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
    // formValidation();
    // console.dir(inputs)

    //adding data to object then into local storage
    let obj={imageUrl:inputs[0].value,
        fullName:inputs[1].value,
        homeTown:inputs[2].value,
        purpose:inputs[3].value
    };
    for(let i=4 ; i<8;i++){
        if(inputs[i].checked){
            obj.category=inputs[i].value;
        }
    }
    saveToLocalStorage(obj);
    form.reset();
    showCards();
    
})

//form validation
// function formValidation(){}


// to add data into localsrorage
function saveToLocalStorage(obj){
 if(localStorage.getItem("calls")===null){
    let oldTasks =[]
    oldTasks.push(obj)
    localStorage.setItem("calls",JSON.stringify(oldTasks));

 }
 else{
    let oldTasks = JSON.parse(localStorage.getItem("calls"));
    oldTasks.push(obj);
    localStorage.setItem("calls",JSON.stringify(oldTasks));

 }

}

// reaton of call note
function showCards(){
    note.style.display="flex";
    let oldTasks = JSON.parse(localStorage.getItem("calls"));
    oldTasks.forEach(obj=> {
        let stack = document.createElement("div");
        stack.classList.add("stack");

        let imgbox = document.createElement("div");
        imgbox.classList.add("imgbox");

        let img = document.createElement("img");
        img.classList.add("imgstyle");
        img.src=obj.imageUrl
        imgbox.appendChild(img);
        stack.appendChild(imgbox);

        let uname = document.createElement("h1");
        uname.classList.add("uname");
        uname.textContent=obj.fullName;
        stack.appendChild(uname);

        let ht =  document.createElement("p");
        ht.classList.add("info");
        let htval = document.createElement("span");
        htval.classList.add("infoValue");
        ht.textContent = "Home Town"
        htval.textContent = obj.homeTown;
        ht.appendChild(htval);
        stack.appendChild(ht);

        let purpose =  document.createElement("p");
        purpose.classList.add("info");
        let pval = document.createElement("span");
        pval.classList.add("infoValue");
        purpose.textContent = "Purpose"
        pval.textContent = obj.purpose;
        purpose.appendChild(pval);
        stack.appendChild(purpose);

        let notebuttons = document.createElement("div");
        notebuttons.classList.add("notebuttons");

        let callbtn = document.createElement("button")
        callbtn.classList.add("btn","note-btn");
        callbtn.textContent="Call"
        notebuttons.appendChild(callbtn);

        let msgbtn = document.createElement("button")
        msgbtn.classList.add("btn","note-btn");
        msgbtn.textContent="Message"
        notebuttons.appendChild(msgbtn);

        stack.appendChild(notebuttons);
        note.appendChild(stack);
    });
}


