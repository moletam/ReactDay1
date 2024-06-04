import React from "react";

const SignUp = () => {
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
        className="fullname"
        placeholder="fullname"
      />{" "}
      <br />
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
      <input type="submit" value="Signup" />
    </div>
  );
};

export default SignUp;
