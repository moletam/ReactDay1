import React from "react";

const StateMgmt = () => {
  let isSt = false;

  const Strike = () => {
    isSt = !isSt;
    if (isSt) document.getElementById("h1").style.textDecoration = "underline";
    else document.getElementById("h1").style.textDecoration = "none";
  };

  return (
    <div>
      <h1 id="h1">My Heading</h1>
      <button onClick={Strike}>Strike</button>
    </div>
  );
};

export default StateMgmt;
