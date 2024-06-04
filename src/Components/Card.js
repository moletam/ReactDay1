import React from "react";
import "../Assets/Css/Style.css";
const Card = ({ Id, Name, Dept }) => {
  return (
    <div className="myCard">
      <h1>ID:{Id}</h1>
      <h1>Name:{Name}</h1>
      <h1>Dept:{Dept}</h1>
    </div>
  );
};

export default Card;
