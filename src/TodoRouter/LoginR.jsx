import React from "react";
import "../TodoRouter/TodoR.css";
import Authentication from "./Authentication";
class LoginR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  login = () => {
    Authentication.setLoggedUser(this.state.username);
    //this.props.navigate(`/home/${this.state.username}`);
    this.props.navigate(`/home/`+this.state.username);
  
  };
  usernameOnchange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  passwordOnchange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2 style={{ color: "orange", fontSize: "32px", fontWeight: "bold" }}>
            LOGIN FORM
          </h2>

          <div>
            <label
              className="fullName"
              style={{ color: "black", fontSize: "18px" }}
            >
              NAME
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="name"
              value={this.state.username}
              onChange={this.usernameOnchange}
            />
          </div>
          <br />

          <div className="password">
            <label
              className="password"
              style={{ color: "black", fontSize: "18px" }}
            >
              PASSWORD
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              autoComplete="new-password"
              value={this.state.password}
              onChange={this.passwordOnchange}
            />
          </div>
          <br />
          <div className="submit">
            <button className="btns" onClick={this.login}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginR;
