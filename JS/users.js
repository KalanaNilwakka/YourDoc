let storedUsers = JSON.parse(localStorage.getItem('users'));
let users;
if(storedUsers){
  users = storedUsers;
}else{
  users = [
    {
      firstName : "Dewmi",
      lastName : "Samadhi",
      email: "dewmisamadhi@gmail.com",
      password : "12345"
    },
    {
      firstName : "Kalana",
      lastName : "Nilwakka",
      email: "kalananilwakka@gmail.com",
      password : "54321"
    }
  ]
}


