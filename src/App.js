import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import MyContact from "./Pages/MyContact";
import Sharedlayout from "./Pages/Sharedlayout";
import Payrol from "./Components/Payrol";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sharedlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<MyContact />} />
          <Route path="payrol" element={<Payrol />} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
