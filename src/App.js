// import Puppy from "./Puppy";
// import PI, { add, mul } from "./Components/Calculator";
// import "./Assets/Css/Style.css";
import abc from "./Assets/Img/Logo.png";
import ban from "./Assets/Img/banner-puppies.jpg";
import Employee from "./Components/Employee";
import Student from "./Components/Student";

// import PI, * as cal from "./Components/Calculator";
function App() {
  return (
    <div className="app">
      {/* <Puppy /> */}
      {/* <h1> PI = {PI}</h1>
      <h1> sum = {cal.add(4, 5)}</h1>
      <h1> sum = {cal.mul(4, 5)}</h1>
      <h1> sum = {cal.factorial(5)}</h1> */}
      {/* 
      <div className="stud">
        <h1>Name : Abebe</h1>
        <h1>Dept : Chemistry</h1>
        <h1>Hoppy : Chemist</h1>
      </div>
      <div className="stud">
        <h1>Name : Abebe</h1>
        <h1>Dept : Chemistry</h1>
        <h1>Hoppy : Chemist</h1>
      </div>
      <div className="stud">
        <h1>Name : Abebe</h1>
        <h1>Dept : Chemistry</h1>
        <h1>Hoppy : Chemist</h1>
      </div> */}
      <Student name="Abebe" dept="CoSc" hoppy="Developer" path={ban} />
      <Student name="Abebe" dept="CoSc" hoppy="Developer" path={abc} />
      <Employee name="Alex" salary="235345" />
    </div>
  );
}

export default App;
