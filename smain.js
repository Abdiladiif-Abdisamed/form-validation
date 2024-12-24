let username = document.querySelector(".username");
let Email = document.querySelector(".Email");
let password= document.querySelector(".Password");
let ConfirmPassword = document.querySelector(".ConfirmPassword");
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

const checkPasswordLength=(password,min,max)=>{
    if(password.value.length < min){
        showError(password,"Pasword at least 6 character");
    }else if(password.value.length > max){
        showError( password,"password maximum is 15 character")
    }else{
        showSuccess(password);
    }
}

const checkConfirmThePassword =(password, ConfirmPassword)=>{
    if(password.value.length === ConfirmPassword.value.length){
        showSuccess();
    }else{
        showError(ConfirmPassword,"Password and Confirm Paswoord must be same")
    }
}

form.addEventListener("submit", (event)=>{
    
            event.preventDefault();
        checkEmpty ([username,Email,password,ConfirmPassword]);
        checkPasswordLength(password,6,15);
        checkConfirmThePassword(password,ConfirmPassword);

      
    
});
