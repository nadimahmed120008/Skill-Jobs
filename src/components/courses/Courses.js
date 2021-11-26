import React from "react";
import fakedata from "../../fakedata/Fakedata";
import ProductCard from "../home/ProductCard";

const Courses = () => {
  return (
    <div className="py-5">
      <h1 className="pb-5 display-6 text-center text-primary">
        Our Courses for you..
      </h1>
      <div className="container">
        <div className="row">
          {fakedata.map((item) => (
            <ProductCard course={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
