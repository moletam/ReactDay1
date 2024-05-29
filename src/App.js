import Banner from "./Puppy/Banner";
import Footer from "./Puppy/Footer";
import Header from "./Puppy/Header";
import Morepuppy from "./Puppy/Morepuppy";
import Puppy1 from "./Puppy/Puppy1";
import PuppyList from "./Puppy/PuppyList";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Puppy1 />
      <Morepuppy />  
      <PuppyList />
      <Footer />
    </div>
  );
}

export default App;
