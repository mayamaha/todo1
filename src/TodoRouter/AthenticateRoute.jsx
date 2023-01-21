import React from "react";
import { Navigate } from "react-router-dom";
import Authentication from "./Authentication"
class AuthenticateRoute extends React.Component{
    render(){
        if(Authentication.isUserLoggedIn()){
            return{...this.props.children}

        }else{
            return<Navigate to='/login'/>
        }
    }
}
export default AuthenticateRoute;