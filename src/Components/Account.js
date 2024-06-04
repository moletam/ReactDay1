import React from "react";
import "../Assets/Css/Style.css";
const Account = () => {
  const isSession = true;
  return (
    <div>
      <input
        type="text"
        id="username"
        className="username"
        placeholder="username"
      />{" "}
      <br />
      <input
        type="text"
        id="fullname"
        className={!isSession ? "display" : "notdisplay"}
        placeholder="fullname"
      />{" "}
      <input
        type="password"
        id="pass"
        className="pass"
        placeholder="enter password"
      />
      <input
        type="password"
        id="pass"
        className="pass"
        placeholder="confirm password"
      />
      <br />
      <input type="submit" value={isSession ? "Login" : "Signup"} />
    </div>
  );
};

export default Account;
