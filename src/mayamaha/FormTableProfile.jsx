import React, { useState, Fragment } from "react";
import Form from "../mayamaha/Form";
import Table from "../mayamaha/Table";
function FormTableProfile() {
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    designation: "",
  });
  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { name: "", email: "", designation: "" };
      setFormObject(isEmpty);
    }
  };
  return (
    <Fragment>
      <Form
        onValChange={onValChange}
        formObject={formObject}
        onFormSubmit={onFormSubmit}
      />
      <Table tableData={tableData} />
    </Fragment>
  );
}
export default FormTableProfile;