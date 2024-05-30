import React from "react";
import Banner from "./Puppy/Banner";
import Footer from "./Puppy/Footer";
import Header from "./Puppy/Header";
import Puppy1 from "./Puppy/Puppy1";
import PuppyList from "./Puppy/PuppyList";
const Puppy = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Puppy1 />
      <PuppyList />
      <Footer />
    </div>
  );
};

export default Puppy;
