var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var eemail = document.getElementById('eemail');
var paw = document.getElementById('paw');
var cpaw = document.getElementById('cpaw');

function validate() {
        if(firstname.value){
            firstname.classList.remove("is-invalid")
            firstname.classList.add("is-valid")
            document.getElementById("fname-validation").innerText="";
        }else{
            firstname.classList.remove("is-valid")
            firstname.classList.add("is-invalid") 
            document.getElementById("fname-validation").innerText="first name field is required";
        }
        if(lastname.value){
            lastname.classList.remove("is-invalid")
            lastname.classList.add("is-valid")
            document.getElementById("fname-validation").innerText="";
        }else{
            lastname.classList.remove("is-valid")
            lastname.classList.add("is-invalid") 
            document.getElementById("fname-validation").innerText="last name field is required";
        }
        if(eemail.value){
            eemail.classList.remove("is-invalid")
            eemail.classList.add("is-valid")
            document.getElementById("email-validation").innerText="";
        }else{
            eemail.classList.remove("is-valid")
            eemail.classList.add("is-invalid")
            document.getElementById("email-validation").innerText="email field is required"; 
        }

        let found = users.find((user) => user.email == eemail.value);
        if(found){
            eemail.classList.remove("is-valid") 
            eemail.classList.add("is-invalid")
            document.getElementById("email-validation").innerText="email already exists"; 
        }
        
        if(paw.value){
            paw.classList.remove("is-invalid")
            paw.classList.add("is-valid")
            document.getElementById("pww-validation").innerText="";
        }else{
            paw.classList.remove("is-valid")
            paw.classList.add("is-invalid")
            document.getElementById("pww-validation").innerText="Password field is required"; 
        }

        if(cpaw.value && (cpaw.value == paw.value)){
            console.log("test")
            cpaw.classList.remove("is-invalid")
            cpaw.classList.add("is-valid")
            document.getElementById("cw-validation").innerText="";
        }else{
            cpaw.classList.remove("is-valid")
            cpaw.classList.add("is-invalid")
            document.getElementById("cw-validation").innerText="Enter correct password"; 
        }
        return firstname.value && eemail.value && paw.value && cpaw.value && (cpaw.value == paw.value) && !found
}

const form = document.getElementById('myForm1');

// function test(event){
//     event.preventDefault();
//     validate();
// } 

// form.addEventListener("submit", test)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if(validate()){
        let newUser = {
            firstName : firstname.value,
            lastName : lastname.value,
            email: eemail.value.toLowerCase(),
            password : paw.value 
        }
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        location.href = "/signin.html";
    };
    
})


