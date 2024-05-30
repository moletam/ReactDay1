import React from "react";
import "../Assets/Css/Style.css";

const Employee = ({ name, dept, salary }) => {
  return (
    <div>
      <div className="stud">
        <h1>Name: {name}</h1>
        <h1>Dept: {dept}</h1>
        <h1>salary: {salary}</h1>
      </div>
    </div>
  );
};

export default Employee;
