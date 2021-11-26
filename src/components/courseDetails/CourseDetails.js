import React from "react";
import { useParams } from "react-router";
import fakedata from "../../fakedata/Fakedata";

const CourseDetails = () => {
  const { id } = useParams();
  const course = fakedata.find((data) => data.id == id);
  const { title, price, duration, img, outline } = course;
  return (
    <div className="py-5 text-center">
      <div className="conrainer">
        <h1 className="pb-5">Check Out</h1>
        <div className="w-50 mx-auto">
          <div className="card">
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p class="my-3">Duration: {duration} Hours</p>
              <p>
                <b>Description: </b>
                {outline}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <p class="m-0 rounded-pill bg-success py-1 px-3 text-white">
                  <s className="text-danger">{Math.round(price * 1.8)}</s>{" "}
                  &nbsp;
                  {price} TK Only
                </p>

                <button className="btn btn-success">Check Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
