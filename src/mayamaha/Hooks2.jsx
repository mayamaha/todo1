import React, { useState } from "react";
import Hooks from "./Hooks";
import "../mayamaha/Hooks.css";
//import "../mayamaha/Hooks2.css";
function Hooks2() {
  const [displaycount, setDisplayCount] = useState(true);
  return (
    <div>
      {displaycount ? <Hooks /> : null}
      <button className="btns" onClick={() => setDisplayCount(!displaycount)}><span style={{fontSize:"25px",fontWeight: "bold"}}>STOP</span></button>
    </div>
  );
}
export default Hooks2;
