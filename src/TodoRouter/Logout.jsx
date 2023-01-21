// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../TodoRouter/Logout.css";
function Logout(props) {
  // const navigate = useNavigate();
  return (
    <div className="wrbz">
      <div className="containerz">
        <div className="row justify-content-center mt-5">
          <p
            style={{
              fontStyle: "revert",
              fontSize: "60px",
              fontWeight: "bold",
              color: "rgb(10, 37, 155)",
              

              textAlign: "center",
              marginLeft: "730px",
              marginTop: "15px",
            }}
          >
            Have
            <span
              style={{ marginLeft: "10px", }}
            ></span>
            logged
            <span
              style={{ marginLeft: "10px", }}
            ></span>
            out<span style={{ marginLeft: "10px" }}></span>successfully
          </p>

          <br />
          <div className="submitz">
            <Link
              className="btnz"
              style={{
                minWidth: "250px",
                fontSize: "center",
                marginLeft: "440px",
              }}
              to="/login"
              // onClick={() => navigate("/list")}
            >
              <span
                style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
              >
                Click here to login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Logout;
