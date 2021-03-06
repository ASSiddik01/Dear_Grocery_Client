import React from "react";
import bg1 from "../../assets/img/fresh-fruit.png";
import bg2 from "../../assets/img/vegetable-collection.png";
import bg3 from "../../assets/img/grocery-items.png";
import arrow from "../../assets/img/arrow-right.png";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <div className="lg:flex lg:-mx-6 -mx-2 mb-14">
      <div className="lg:w-1/3 px-6 mb-2 lg:mb-0">
        <div className="bg-[#fff0dc] flex p-6 rounded-xl">
          <div className="w/1-2">
            <h3 className="text-2xl leading-tight font-semibold mb-10">
              Fresh Fruits Collection
            </h3>
            <Link
              to="/"
              className="h-12 w-12 flex justify-center items-center rounded-full bg-white inline-block"
            >
              <img src={arrow} alt="" />
            </Link>
          </div>
          <div className="w-1/2 flex justify-end">
            <img className="w-36" src={bg1} alt="" />
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 px-6 mb-2 lg:mb-0">
        <div className="bg-[#ddf1d6] flex p-6 rounded-xl">
          <div className="w/1-2">
            <h3 className="text-2xl leading-tight font-semibold mb-10">
              Vegetable Collection
            </h3>
            <Link
              to="/"
              className="h-12 w-12 flex justify-center items-center rounded-full bg-white inline-block"
            >
              <img src={arrow} alt="" />
            </Link>
          </div>
          <div className="w-1/2 flex justify-end">
            <img className="w-36" src={bg2} alt="" />
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 px-6 mb-2 lg:mb-0">
        <div className="bg-[#ffebb7] flex p-6 rounded-xl ">
          <div className="w/1-2">
            <h3 className="text-2xl leading-tight font-semibold mb-10">
              Grocery Item
            </h3>
            <Link
              to="/"
              className="h-12 w-12 flex justify-center items-center rounded-full bg-white inline-block"
            >
              <img src={arrow} alt="" />
            </Link>
          </div>
          <div className="w-1/2 flex justify-end">
            <img className="w-36" src={bg3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
