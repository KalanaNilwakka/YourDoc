const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const contactNo = document.getElementById('contact');
const address = document.getElementById('inputAddress');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthDate'); 
const apptDate = document.getElementById('apptDate'); 
const apptTime = document.getElementById('apptTime');
const hosName = document.getElementById('hosName');
const docName = document.getElementById('docName');
if(loggedUser){
  firstName.value = loggedUser.firstName; 
  lastName.value = loggedUser.lastName;
  email.value = loggedUser.email;
  docName.value = doctors[index].name;
}

function validation(){
  if(address.value){
    address.classList.remove('is-invalid');
    address.classList.add('is-valid');
    document.getElementById('addressValidation').innerText = '';
  }else{
    address.classList.remove('is-valid');
    address.classList.add('is-invalid');
    document.getElementById('addressValidation').innerText = 'Address is required';
  }

  if(firstName.value){
    firstName.classList.remove('is-invalid');
    firstName.classList.add('is-valid');
    document.getElementById('firstNameValidation').innerText = '';
  }else{
    firstName.classList.remove('is-valid');
    firstName.classList.add('is-invalid');
    document.getElementById('firstNameValidation').innerText = 'Address is required';
  }

  if(email.value){
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    document.getElementById('emailValidation').innerText = '';
  }else{
    email.classList.remove('is-valid');
    email.classList.add('is-invalid');
    document.getElementById('emailValidation').innerText = 'Email is required';
  }

  if(contactNo.value){
    contactNo.classList.remove('is-invalid');
    contactNo.classList.add('is-valid');
    document.getElementById('contactValidation').innerText = '';
  }else{
    contactNo.classList.remove('is-valid');
    contactNo.classList.add('is-invalid');
    document.getElementById('contactValidation').innerText = 'contact number is required';
  }

  if(birthDate.value){
    birthDate.classList.remove('is-invalid');
    birthDate.classList.add('is-valid');
    document.getElementById('bdayValidation').innerText = '';
  }else{
    birthDate.classList.remove('is-valid');
    birthDate.classList.add('is-invalid');
    document.getElementById('bdayValidation').innerText = 'Select the birth date';
  }

  if(apptDate.value){
    apptDate.classList.remove('is-invalid');
    apptDate.classList.add('is-valid');
    document.getElementById('appDateValidation').innerText = '';
  }else{
    apptDate.classList.remove('is-valid');
    apptDate.classList.add('is-invalid');
    document.getElementById('appDateValidation').innerText = 'Select the appointment date';
  }

  if(apptTime.value){
    apptTime.classList.remove('is-invalid');
    apptTime.classList.add('is-valid');
    document.getElementById('appTimeValidation').innerText = '';
  }else{
    apptTime.classList.remove('is-valid');
    apptTime.classList.add('is-invalid');
    document.getElementById('appTimeValidation').innerText = 'Select the appointment time';
  }

  if(hosName.value){
    hosName.classList.remove('is-invalid');
    address.classList.add('is-valid');
    document.getElementById('hosNameValidation').innerText = '';
  }else{
    hosName.classList.remove('is-valid');
    hosName.classList.add('is-invalid');
    document.getElementById('hosNameValidation').innerText = 'Hospital Name is required';
  }

  if(docName.value){
    docName.classList.remove('is-invalid');
    address.classList.add('is-valid');
    document.getElementById('docNameValidation').innerText = '';
  }else{
    docName.classList.remove('is-valid');
    docName.classList.add('is-invalid');
    document.getElementById('docNameValidation').innerText = 'Doctor Name is required';
  }

  return apptTime.value && apptDate.value && birthDate.value && contactNo.value && address.value && hosName.value && docName.value
  && email.value && firstName.value;
}

const appform = document.getElementById('appointmentForm');

appform.addEventListener("submit", (event) => {
  event.preventDefault();
  validation();
  if (validation()) {
    const myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), { keyboard: false }) 
    myModal.show()
  }
})



