const username = document.myForm.username;
const Password = document.myForm.Password;
        
function validate(){
    if(username.value){
        username.classList.remove("is-invalid")
        username.classList.add("is-valid")
        document.getElementById("name-validation").innerText="";
    }
    else{
        username.classList.remove("is-valid")
        username.classList.add("is-invalid") 
        document.getElementById("name-validation").innerText="username field is required";

    }
    
    if(Password.value){
        Password.classList.remove("is-invalid")
        Password.classList.add("is-valid")
        document.getElementById("pw-validation").innerText="";
    }
    else{
        Password.classList.remove("is-valid")
        Password.classList.add("is-invalid")
        document.getElementById("pw-validation").innerText="Password field is required"; 
    }

    return username.value && Password.value
}

function signin(event){
    event.preventDefault();
    if(!validate()){
        return;
    }
    const found = users.find((user) => username.value.toLowerCase() == user.email)
    if(!found){
        username.classList.remove("is-valid")
        username.classList.add("is-invalid") 
        document.getElementById("name-validation").innerText= "Username not found";
        Password.classList.add("is-invalid")
        return
    }
    if((found.password != Password.value)){
        Password.classList.remove("is-valid")
        Password.classList.add("is-invalid")
        document.getElementById("pw-validation").innerText="Wrong Password"; 
        return
    }
    localStorage.setItem('auth', username.value);
    
    window.location.href = "/"
}
const form = document.getElementById('f1');
form.addEventListener("submit",signin);