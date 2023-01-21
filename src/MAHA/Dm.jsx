import React from "react";
import "../MAHA/Dm.css";
import b from "../images/b.jfif";

function Dm() {
  return (
    <div className="Dm">
      {/* 1 */}
      <img src={require("../images/a.jfif")} height={200} width={200} />
      <br />
      {/* 2 */}
      <img src={b} height={200} width={200} />
      <br />
      <button className="fff">add</button>
    </div>
  );
}

export default Dm;
