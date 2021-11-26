import React from "react";
import Header from "./Header";
import fakedata from "../../fakedata/Fakedata";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredData = fakedata.filter((item, ind) => ind < 4);
  return (
    <div>
      <Header />
      <div className="courses bg-light py-5 text-center">
        <h1 className="display-5 mb-5">Our Features Courses</h1>
        <div className="container">
          <div className="row">
            {featuredData.map((item) => (
              <ProductCard course={item} />
            ))}
          </div>
        </div>
        <Link to="courses" className="link btn btn-primary text-white">
          Explore More..
        </Link>
      </div>
    </div>
  );
};

export default Home;
