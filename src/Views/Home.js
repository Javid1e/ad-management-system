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
      <Hero className="illustration-section-01" data={props.data.Hero_1} />
      <AboutUs data={props.data.AboutUs_2} />
      <FeaturesTiles />
      <Features data={props.data.Features_3} />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Services data={props.data.Services_4} />
      <Gallery data={props.data.Gallery_5} />
      <Testimonial topDivider data={props.data.FeedBacks_6} />
      <Team data={props.data.Team_7} />
      <Cta split data={props.data.Contact_8} />
    </Fragment>
  );
};

export default Home;
