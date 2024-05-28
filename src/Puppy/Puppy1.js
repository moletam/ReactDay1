import React from "react";
import puppy1 from "../Assets/Img/puppy-1.jpg";
import puppy2 from "../Assets/Img/puppy-2.jpg";
const Puppy1 = () => {
  return (
    <div>
      <div className="puppyList">
        <div className="puppy1">
          <img src={puppy1} alt="" />
        </div>
        <div className="missingpuppy">
          <h1>Missing Puppy</h1>
        </div>
        <div className="puppy2">
          <img src={puppy2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Puppy1;
