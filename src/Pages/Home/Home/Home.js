import React from "react";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import Subjects from "../Subjects/Subjects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Subjects></Subjects>
      <Services></Services>
    </div>
  );
};

export default Home;
