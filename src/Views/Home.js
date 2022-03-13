import React, { Fragment } from "react";
// import sections
import Navigation from "../Components/Sections/Navigation";
import Hero from "../Components/Sections/Hero";
import AboutUs from "../Components/Sections/AboutUs";
import Features from "../Components/Sections/Features";
import Services from "../Components/Sections/Services";
import FeaturesTiles from "../Components/Sections/FeaturesTiles";
import FeaturesSplit from "../Components/Sections/FeaturesSplit";
import Gallery from "../Components/Sections/Gallery";
import Team from "../Components/Sections/Team";
import Testimonial from "../Components/Sections/Testimonial";
import Cta from "../Components/Sections/Cta";

const Home = (props) => {
  return (
    <Fragment>
      <Hero className="illustration-section-01" data={props.data.Header} />
      <AboutUs data={props.data.About} />
      <FeaturesTiles />
      <Features data={props.data.Features} />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Services data={props.data.Services}/>
      <Testimonial topDivider />
      <Cta split />
    </Fragment>
  );
};

export default Home;
