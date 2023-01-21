class Authendication{
setLoggedUser(username){
sessionStorage.setItem("authenticatedUser",username);
}

getLoggedUser(){
    var user=sessionStorage.getItem("authenticatedUser");
    return user;
}
removeLoggedUser(){
   sessionStorage.removeItem("authenticatedUser");
}
isUserLoggedIn(){
    var user=this.getLoggedUser();
    if(user){
        return true;
    }else{
        return false;
    }

}
}
export default new Authendication();