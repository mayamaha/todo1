import React from "react";
import "../TodoRouter/Header.css";

import { Link, NavLink } from "react-router-dom";
import Authentication from "./Authentication";
class HeaderComponent extends React.Component {
   
    render() {
        var loggedin= Authentication.isUserLoggedIn();
    return (
      <div className="container-fluid" style={{ width: "100%" }}>
        <nav
          className="navbar navbar-expand-lg navbar-dark  bg-primary"
          style={{ width: "101.8%", right: "12px" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <span style={{color:"red"}}>MAHA</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            { loggedin && <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home/maha">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link active" to="/list">
                    List
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
                
                <li class="nav-item">
                  <Link className="nav-link active" to="/logout" onClick={()=>Authentication.removeLoggedUser()}>
                    Logout
                  </Link>
                </li>
              </ul>


            </div>}
          </div>
        </nav>
      </div>
    );
  }
}
export default HeaderComponent;
