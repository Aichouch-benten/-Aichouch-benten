import React from "react";
import { Link } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";

const AboutAreaTwo = () => {
  const parallax = useParallax({
    translateY: [-24, 24],
    rootMargin: 0,
  });

  return (
    <section className="about-area-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="about-img-two text-center">
              <img src="/img/images/h2_about_img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content-two">
              <div className="section-title white-title title-style-two mb-30">
                <span className="sub-title">I'm a Marketing Specialist</span>
                <h2 className="title">
                  Creative and dynamic <br />
                  Marketing Professional
                </h2>
              </div>
              <p>
                An expert in developing innovative go-to-market strategies, I
                excel at driving brand growth and engagement through impactful
                digital campaigns. My expertise spans various sectors, including
                tech and health, where I have led teams to marketing success. As
                a fervent advocate for work-life balance, my passion for
                backpacking, hiking, nature, and camping inspires a fresh,
                adventurous approach to my professional career.
              </p>
              <Link to="/contact">
                <span className="arrow">
                  <img src="/img/icon/right_arrow.svg" alt="" />
                </span>
                <span className="text">Available jobs</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        <img
          src="/img/images/h2_about_shape01.png"
          alt=""
          className="shape-one"
          ref={parallax.ref}
        />
        <img
          src="/img/images/h2_about_shape02.png"
          alt=""
          className="shape-two"
        />
        <img
          src="/img/images/h2_about_shape03.png"
          alt=""
          className="shape-three"
        />
      </div>
    </section>
  );
};

export default AboutAreaTwo;
