import "../mayamaha/Form.css";

function Form({ onValChange, formObject, onFormSubmit }) {
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
            onChange={onValChange}
            value={formObject.name}
            name="name"
          />
        </div>

        <div className="email">
          <label className="email" style={{ color: "black", fontSize: "18px" }}>
            EMAIL
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            onChange={onValChange}
            value={formObject.email}
            name="email"
          />
        </div>
        <div className="designation">
          <label
            className="designation"
            style={{ color: "black", fontSize: "18px" }}
          >
            DESIGNATION
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Designation"
            onChange={onValChange}
            value={formObject.profile}
            name="designation"
          />
        </div>
        <div className="submit">
          <input
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            type="submit"
            onClick={onFormSubmit}
            className="btns "
          />
        </div>
      </div>
    </div>
  );
}
export default Form;
