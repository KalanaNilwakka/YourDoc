let loggedUser = '';
const loggedUserInStorage = localStorage.getItem('auth')
if(loggedUserInStorage){
  loggedUser = users.find((user) => loggedUserInStorage == user.email);
}
