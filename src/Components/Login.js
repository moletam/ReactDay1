import React from "react";

const Login = () => {
  return (
    <div>
      UN : <input type="text" id="username" className="username" />
      <br />
      PW:
      <input type="text" id="pass" className="pass" />
      <br />
      <input type="submit" value="Login" />
    </div>
  );
};

export default Login;
