import React, { useEffect, useState } from "react";

const SttMgmt = () => {
  const [count, setCount] = useState(0);
  // const [age, setAge] = useState(0);
  let age = 0;
  const countUp = () => {
    setCount(count + 2);
  };
  const countAge = () => {
    age = age + 1;
    console.log(age);
  };

  // useEffect(() => {
  //   document.title = age;
  // });

  // useEffect(() => {}, []);
  useEffect(() => {
    alert("Clicked");
  }, [count]);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={countUp}>+</button>
      <hr />
      <h1>Age : {age}</h1>
      <button onClick={countAge}>+</button>
    </div>
  );
};

export default SttMgmt;
