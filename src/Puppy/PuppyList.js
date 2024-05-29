import React from "react";
import "../Assets/Css/Style.css";
import puppy3 from "../Assets/Img/puppy-3.jpg";
import puppy4 from "../Assets/Img/puppy-4.jpg";
const PuppyList = () => {
  return (
    <div>
        <div className="twopuppies">
          <div className="puppy3">
            <img src={puppy3} alt="" />
          </div>
          <div className="puppy4">
            <img src={puppy4} alt="" />
          </div>
        </div>
      
    </div>
  );
};

export default PuppyList;
