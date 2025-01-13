import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ titles, image}) => {
  return (
    <div>
      <article className="rounded-xl bg-white p-3 m-1 shadow-lg hover:shadow-xl duration-300 hover:duration-1000">
        <div className="relative overflow-hiden rounded-xl group">
          <a
            href=""
            className="bg-black absolute inset-0 bg-opacity-30 hover:bg-opacity-0 transition"
          ></a>
          <img className="rounded-2xl " src={image} alt="" />
        </div>

        <div className="mt-2 text-center">
          <h2 className="text-slate-700 text-xl font-lora font-semibold   ">
            {" "}
            {titles}
            Social Media Course
          </h2>
          <p className="text-center text-sm font-roboto">Turkey / Istanbul</p>
        </div>

        <div className="text-center mb-6">
          <p className="text-lg text-red-700 font-bold">$500</p>
        </div>

        <div className="flex items-center space-x-2 rounded-lg px-9 bg-primary-dark text-white  py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <button>Add to Cart</button>
        </div>
      </article>
    </div>
  );
};
ProductCard.propTypes = {
  titles: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default ProductCard;
