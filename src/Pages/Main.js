import React from "react";
import Header from "../Components/Header/Header";
import MainComponent from "../Components/Main/Main";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <Header />
      <MainComponent />
    </div>
  );
};

export default Main;
