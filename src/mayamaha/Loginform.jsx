import React from "react";
import "../mayamaha/Loginform.css";
class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      loginSuccess: false,
      loginFail: false,
    };

    this.submit = this.submit.bind(this);
    this.usernameOnChange = this.usernameOnChange.bind(this);
    this.passwordOnChange = this.passwordOnChange.bind(this);
    this.emailOnChange = this.emailOnChange.bind(this);
  }
  submit(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password, this.state.email);
    if (
      this.state.username == "mayamaha" &&
      this.state.email == "maya@gmail.com" &&
      this.state.password == "1234512345"
    ) {
      this.setState({
        loginSuccess: true,
        loginFail: false,
      });
    } else {
      this.setState({
        loginSuccess: false,
        loginFail: true,
      });
    }
  }
  usernameOnChange(event) {
    this.setState({
      username: event.target.value,
    });
  }
  emailOnChange(event) {
    this.setState({
      email: event.target.value,
    });
  }
  passwordOnChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2 style={{ color: "orange", fontSize: "32px", fontWeight: "bold" }}>
            LOGIN FORM
          </h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div>
              <label
                className="fullName"
                style={{ color: "black", fontSize: "18px" }}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="username"
                value={this.state.username}
                onChange={this.usernameOnChange}
              />
            </div>
            <div>
              <label
                className="email"
                style={{ color: "black", fontSize: "18px" }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="email"
                value={this.state.email}
                onChange={this.emailOnChange}
              />
            </div>
            <div>
              <label
                className="password"
                style={{ color: "black", fontSize: "18px" }}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="new-password"
                value={this.state.password}
                onChange={this.passwordOnChange}
              />
            </div>
            <div className="submit">
              <button
                className="btns"
                onClick={this.submit}
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Register Me
              </button>
            </div>
            <LoginStatus
              ls={this.state.loginSuccess}
              lf={this.state.loginFail}
            />
          </form>
        </div>
      </div>
    );
  }
}
function LoginStatus(props) {
  if (props.ls || props.lf) {
    return props.ls ? (
      <div className="success-text">Login Success</div>
    ) : (
      <div className="fail-text">Login Failed</div>
    );
  }
}
export default Loginform;
