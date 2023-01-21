import React from "react";
import "../mayamaha/Uncontrolled.css";
class Uncontrolled extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.submit = this.submit.bind(this);
  }
  submit(event) {
    event.preventDefault();
    console.log("username", this.username.current.value);
    console.log("password", this.password.current.value);
  }
  render() {
    return (
      <div className="form-outer">
        <h2 style={{ color: "white", marginBottom: "20px" }}>LOGIN FORM</h2>
        <form>
          <div>
            <label className="name">User name</label>
            <input
              type="text"
              placeholder="username"
              ref={this.username}
            ></input>
          </div>
          <div>
            <label className="pass">password</label>
            <input
              type="password"
              placeholder="password"
              ref={this.password}
            ></input>
          </div>
          <button className="btns btn-warning" onClick={this.submit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Uncontrolled;
