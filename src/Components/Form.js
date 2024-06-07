import React, { useState } from "react";

const Form = () => {
  const [info, setInfo] = useState("Basic Info");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePass = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username = ", username, "password : ", password);
  };
  const changeMsg = () => {
    setInfo("Login");
  };
  const containTxt = () => {
    setInfo("Basic info");
  };
  return (
    <div>
      <h1>{info}</h1>
      <form onSubmit={handleSubmit}>
        <label for="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <br />
        <label for="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePass}
        />{" "}
        <br />
        <input
          type="submit"
          value="Click Me"
          onMouseOver={changeMsg}
          onMouseLeave={containTxt}
        />
      </form>
    </div>
  );
};

export default Form;
