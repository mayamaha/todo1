// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../TodoRouter/HomeR.css";

function HomeR(props) {
  // const navigate = useNavigate();
  return (
    <div className="wrb">
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h3 style={{fontStyle:"revert",fontSize:"50px",fontWeight: "bold",color:"red", }}>welcome {props.params.name}</h3>

        <br />
        <div className="submitt">
          <Link
          
            className="btnss"
            style={{ minWidth:"250px", fontSize:"center",marginLeft:"440px" }} to="/list"
            // onClick={() => navigate("/list")} 
          >
            <span style={{fontSize:"20px",fontWeight: "bold",color:"black" }}>Go to list page </span>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
export default HomeR;
