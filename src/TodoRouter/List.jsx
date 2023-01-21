import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//import "../components/controlled.css";
import ControlledComponent from "./Rfrom";
import "../TodoRouter/List.css";
//import ControlledComponent from "./controlled";

// class ControlledComponentt extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       desg: "",
//       loginSuccess: false,
//       loginFail: false,
//     };

//     this.submit = this.submit.bind(this);
//     this.usernameOnchange = this.usernameOnchange.bind(this);
//     this.passwordOnchange = this.passwordOnchange.bind(this);
//   }
//   submit(event) {
//     event.preventDefault();
//     console.log(this.state.namee, this.state.desgg);
//     if (this.state.namee !== "" && this.state.desgg !== "") {
//       //this.props.addUser(this.state.name,this.state.desg);
//       this.setState({
//         namee:"",
//         desgg:"",
//       });

//     }else{
//       alert("Missing")
//     }

//   }
//   usernameOnchange(event) {
//     this.setState({
//       namee: event.target.value,
//     });
//   }
//   passwordOnchange(event) {
//     this.setState({
//       desgg: event.target.value,
//     });
//   }
//   render() {
//     return (
//       <div className="form-outer ">
//         <h3>USER DETAILS</h3>
//         <form>
//           <div>
//             <label className="input-label">NAME</label>
//             <input
//               type="text"
//               placeholder="Name"
//               autoComplete="username"
//               value={this.state.namee}
//               onChange={this.usernameOnchange}
//             ></input>
//           </div>
//           <div>
//             <label className="input-label">DESIG</label>
//             <input
//               type={"text"}
//               placeholder="Designation"
//               autoComplete="new-password"
//               value={this.state.desgg}
//               onChange={this.passwordOnchange}
//             ></input>
//           </div>
//           <button className="btn btn-primary" onClick={this.submit}>
//             ADD USER
//           </button>
//           {/* { <LoginStatus ls={this.state.loginSuccess} lf={this.state.loginFail}/> } */}
//         </form>
//       </div>
//     );
//   }
// }

class List extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        // {
        //   id: 1,
        //   name: "Mouli",
        //   desg: "Java dev",
        // },
        // {
        //   id: 2,
        //   name: "Selva",
        //   desg: "UI dev",
        // },
        // {
        //   id: 3,
        //   name: "Gopi",
        //   desg: "Python dev",
        // },
      ],

      // newUser: [
      //   {
      //     id: "",
      //     namee: "",
      //     desgg: "",
      //   },
      // ],
    };
    //this.addUser = this.addUser.bind(this);
  }

  addUser = (username, desg) => {
    var temp = this.state.userList;
    var newUser = {
      id: temp.length + 1,
      name: username,
      desg: desg,
      date: new Date(),
      status: true,
    };
    temp.push(newUser);
    this.setState({
      userList: temp,
    });
  };
  delete = (i) => {
    this.state.userList.splice(i, 1);
    this.setState({});
  };

  render() {
    return (
      <>
        <ControlledComponent addUser={this.addUser} />
        <div className="wrb22">
        <div className="container">
          <h3>USER LIST</h3>
          <table className="table table-striped mt-3 mb-3">
            <thead>
              <tr className="table-dark">
                <th>ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Created Date</th>
                <th>Status</th>
                {/* <th>Edit</th> */}
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.desg}</td>
                  <td>{user.date.toString()}</td>
                  <td>{user.status.toString()}</td>
                  {/* <td className="btn1">
                    <button
                      className="btn1"
                      onClick={() => this.edit(index)}
                      style={{ color: "black" }}
                    >
                      Edit
                    </button>
                  </td> */}
                  <td className="btn2">
                    <button
                      className="btn2"
                      onClick={() => this.delete(index)}
                      style={{ color: "black" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {/* <br />

              <button
                className="btnss"

                //onClick={() => navigate("/logout")}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Go to list page{" "}
                </span>
              </button> */}




            </tbody>
          </table>
          <br />
        <div className="submitt1">
          <button className="btnss1" style={{ minWidth:"250px", fontSize:"center",marginLeft:"440px", color:"red" }} >
            <Link
          to="/Logout"
            className="btnss11"
            
            // onClick={() => navigate("/list")} 
          >
            <span style={{fontSize:"20px",fontWeight: "bold",color:"black" }}> OK </span>
          </Link></button>
        </div>

        </div>
        </div>
      </>
    );
  }
}

export default List;
