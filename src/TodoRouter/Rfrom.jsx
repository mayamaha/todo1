import React from "react";
import "../TodoRouter/Rfrom.css";
class Rfrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desg: "",
      loginSuccess: false,
      loginFail: false,
    };

    this.submit = this.submit.bind(this);
    this.usernameOnchange = this.usernameOnchange.bind(this);
    this.passwordOnchange = this.passwordOnchange.bind(this);
  }
  submit(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
    if (this.state.name != "" && this.state.desg != "") {
      this.props.addUser(this.state.name, this.state.desg);
      this.setState({
        name: "",
        desg: "",
      });
    } else {
      alert("missing");
    }
    // if (this.state.username == "Mouleeswaran" && this.state.password == "12345678"){
    //     this.setState({
    //         loginSuccess: true,
    //         loginFail: false,
    //     });
    //     //console.log("logged in");
    // }else{
    //     this.setState({
    //         loginSuccess: false,
    //         loginFail: true,
    //     });
    //console.log("failed to logged in");
    //}
  }
  usernameOnchange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  passwordOnchange = (event) => {
    this.setState({
      desg: event.target.value,
    });
  };
  render() {
    return (
      <div className="wrb22">

      <div className="form-outer ">
        <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>USER DETAILS</h2>
        <br />
        <form>
          <div>
            <label
              className="input-label"
              style={{ fontSize: "20px", fontWeight: "bold", color: "gold" }}
            >
              NAME
            </label>
            <input
              type="text"
              placeholder="Name..."
              autoComplete="username"
              value={this.state.username}
              onChange={this.usernameOnchange}
            ></input>
          </div>
          <div>
            <label
              className="input-label"
              style={{ fontSize: "20px", fontWeight: "bold", color: "gold" }}
            >
              DESIG
            </label>
            <input
              type={"text"}
              placeholder="Designation..."
              autoComplete="new-password"
              value={this.state.password}
              onChange={this.passwordOnchange}
            ></input>
          </div>
          <button
            className="btn btn-primary"
            onClick={this.submit}
            style={{ fontWeight: "bold" }}
          >
            ADD
          </button>
          {/* <LoginStatus ls={this.state.loginSuccess} lf={this.state.loginFail}/> */}
        </form>
      </div>
      </div>
    );
  }
}
// function LoginStatus(props){
//if (props.ls || props.lf){
//return props.ls ?<div className="success-text">LOGIN SUCCESS</div> : <div className="failure-text">LOGIN FAIL</div>;
// }

//}
export default Rfrom;
