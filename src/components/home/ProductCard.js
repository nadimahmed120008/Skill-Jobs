import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, price, duration, img, outline } = props.course;

  return (
    <div className="col-md-6 mb-5">
      <div className="card">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p class="my-3  rounded bg-grey py-1 px-3">
            Duration: {duration} Hours
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <p class="m-0 rounded-pill bg-success py-1 px-3 text-white">
              <s className="text-danger">{Math.round(price * 1.8)}</s> &nbsp;
              {price} TK Only
            </p>

            <Link to={"/course/" + id} className="link btn btn-warning">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
