import React from "react";

const About = () => {
  return (
    <div className="py-5 text-center">
      <div className="container">
        <h1 className="pb-5">About Us</h1>

        <h2 className="text-primary">
          We've Helped Thousand's of People With their Careers
        </h2>
        <h4>
          We assist people all over the world hire and get hired, Register now
          and be found by employers
        </h4>
        <div className="row mt-5 align-items-center">
          <div className="col-5">
            <img
              className="img-fluid"
              src="https://skill.jobs/themes/theme1/images/career2.png"
              alt=""
            />
          </div>
          <div className="col-7">
            <p>
              We are a leading online career and recruitment website with
              cutting edge technology. Our Job Board provides best suited
              profiles to employers and relevant jobs to jobseekers across
              industry verticals, experience levels and geographies Companies of
              all sizes hire the best talent with our Job Board, Contact us for
              more details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
