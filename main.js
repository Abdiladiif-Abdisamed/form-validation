let username = document.querySelector(".username");
let password= document.querySelector(".Password");
let form= document.querySelector(".form");



let showError =(input , message)=>{
    let parentElement = input.parentElement;
    parentElement.classList ="form-control error";
    let small = parentElement.querySelector("small");
    let successIcon = parentElement.querySelector(".check");
    let errorIcon = parentElement.querySelector(".close");
    errorIcon.style.visibility ="visible";
    successIcon.style.visibility ="hidden";
    small.innerText = message;
}
 
let showSuccess =(input)=>{
    let parentElement = input.parentElement;
    parentElement.classList =("form-control success");
    let successIcon = parentElement.querySelector(".check");
    let errorIcon = parentElement.querySelector(".close");
    successIcon.style.visibility ="visible";
    errorIcon.style.visibility ="hidden";
}

let checkEmpty =( Elements)=>{
    Elements.forEach(element => {
        if(element.value === ''){
            showError(element , "input required");
        }else{
            showSuccess(element);
        }
        
    });
}

form.addEventListener("submit", (event)=>{
    
            event.preventDefault();
        checkEmpty ([username,password]);
        

})
