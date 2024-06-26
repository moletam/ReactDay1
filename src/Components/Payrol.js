import React, { useState } from "react";

const Payrol = () => {
  const [basicSalary, setBasicSalary] = useState(0);
  const [overTime, setOverTime] = useState(0);
  const [allowance, setAllowance] = useState(0);
  const [deduction, setDeduction] = useState(0);
  const [pension, setPension] = useState(0);
  const [incomeTax, setIncomeTax] = useState(0);
  const [netsalary, setNetsalary] = useState(0);

  const handleBasicSalary = (e) => {
    setBasicSalary(e.target.value);
  };
  const handleOverTime = (e) => {
    setOverTime(e.target.value);
  };
  const handleAllowance = (e) => {
    setAllowance(e.target.value);
  };
  const handleDeduction = (e) => {
    setDeduction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(setPension(basicSalary * 0.07), 0);
    if (basicSalary <= 600 && basicSalary > 0) setTimeout(setIncomeTax(0), 5);
    else if (basicSalary <= 1650)
      setTimeout(setIncomeTax(basicSalary * 0.1 - 60), 0);
    else if (basicSalary <= 3200)
      setTimeout(setIncomeTax(basicSalary * 0.15 - 142.5, 0));
    else if (basicSalary <= 5250)
      setTimeout(setIncomeTax(basicSalary * 0.2 - 302.5, 0));
    else if (basicSalary <= 7800)
      setTimeout(setIncomeTax(basicSalary * 0.25 - 565, 0));
    else if (basicSalary <= 10900)
      setTimeout(setIncomeTax(basicSalary * 0.3 - 955, 0));
    else if (basicSalary > 10900)
      setTimeout(setIncomeTax(basicSalary * 0.35 - 1500, 0));

    setTimeout(
      setNetsalary(
        parseInt(basicSalary) +
          parseInt(allowance) +
          parseInt(overTime) -
          parseInt(incomeTax) -
          parseInt(pension) -
          parseInt(deduction)
      ),
      1000
    );
  };
  return (
    <div>
      <h1>Net Salary : {netsalary}</h1>
      <h1>IncomeTax : {incomeTax}</h1>
      <form onSubmit={handleSubmit}>
        <label for="basicSalary">BasicSalary</label>
        <input
          type="number"
          name="basicSalary"
          id="basicSalary"
          value={basicSalary}
          onChange={handleBasicSalary}
        />{" "}
        <br />
        <label for="overtime">overtime</label>
        <input
          type="number"
          name="overtime"
          id="overtime"
          value={overTime}
          onChange={handleOverTime}
        />{" "}
        <br />
        <label for="allowance">allowance</label>
        <input
          type="number"
          name="allowance"
          id="allowance"
          value={allowance}
          onChange={handleAllowance}
        />{" "}
        <br />
        <label for="deduct">deduct</label>
        <input
          type="number"
          name="deduct"
          id="deduct"
          value={deduction}
          onChange={handleDeduction}
        />{" "}
        <br />
        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
};

export default Payrol;
