import React, { Fragment } from "react";
// import sections
import Hero from "../Components/Sections/Hero";
import FeaturesTiles from "../Components/Sections/FeaturesTiles";
import FeaturesSplit from "../Components/Sections/FeaturesSplit";
import Testimonial from "../Components/Sections/Testimonial";
import Cta from "../Components/Sections/Cta";

const Home = () => {
  return (
    <Fragment>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      <Cta split />
    </Fragment>
  );
};

export default Home;
