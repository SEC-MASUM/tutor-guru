import React from "react";
import Services from "../../Services/Services";
import Subjects from "../../Subjects/Subjects";

import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Subjects></Subjects>
      <Services ></Services>
      
    </div>
  );
};

export default Home;
