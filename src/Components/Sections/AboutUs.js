import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../Utils/SectionsProps";
import Image from "../Elements/Image";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const AboutUs = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );
  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <div
              className="mt-0 mb-16 reveal-from-top "
              data-reveal-delay="200"
            >
              <div >
                <h1>{props.data ? props.data.title : "loading..."}</h1>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                <h2>{props.data ? props.data.whyUs : "loading..."}</h2>
                <div className="list-style">
                  <div className="mt-0 mb-16 reveal-from-top">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="mt-0 mb-16 reveal-from-top">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
AboutUs.propTypes = propTypes;
AboutUs.defaultProps = defaultProps;
export default AboutUs;
