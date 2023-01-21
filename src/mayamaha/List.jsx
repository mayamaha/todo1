import React from "react";
import "../mayamaha/List.css";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        // {
        //   id: 1,
        //   name: "maya",
        //   desg: "ui dev",
        // },
        // {
        //   id: 2,
        //   name: "mayamm",
        //   desg: "ui dev",
        // },
        // {
        //   id: 3,
        //   name: "mayyyyyamm",
        //   desg: "ui dev",
        // },
      ],
    };
  }
  adduser=(username,desg)=>{
    var temp=this.state.userList;
    var newuser={
        id: temp.length+1,
        name:username,
        desg:desg,
        
    };
    temp.push(newuser);
    this.state({
        userList:temp,
    });
};
  render() {
    return (
      <>
        <div className="container">
          <h4 className="mt-4 mb-4">User List</h4>
          <table className="table table-striped">
            <thead>
              <tr className="table-dark">
                <th>id</th>
                <th>name</th>
                <th>designation</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.desg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </>
    );
  }
}

export default List;
