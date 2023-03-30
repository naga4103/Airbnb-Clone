import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

type Props = {};

const iconsList = [
  {
    icon: <i className="fa-solid fa-house"></i>,
    name: "Home",
  },
  {
    icon: <i className="fa-solid fa-magnifying-glass"></i>,
    name: "Magnifying",
  },

  {
    icon: <i className="fa-solid fa-user"></i>,
    name: "User",
  },
  {
    icon: <i className="fa-brands fa-facebook"></i>,
    name: "Facebook",
  },
  {
    icon: <i className="fa-solid fa-house"></i>,
    name: "Home",
  },
  {
    icon: <i className="fa-solid fa-magnifying-glass"></i>,
    name: "Magnifying",
  },

  {
    icon: <i className="fa-solid fa-user"></i>,
    name: "User",
  },
  {
    icon: <i className="fa-brands fa-facebook"></i>,
    name: "Facebook",
  },
];

const Sliding = (props: Props) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div className="p-7 bg-transparent">
      <Slider {...settings}>
        {iconsList.map((eachIcon) => {
          return (
            <div className="!flex flex-col justify-center items-center item-container border-2 border-red-600 ">
              {eachIcon.icon}
              <p>{eachIcon.name}</p>
            </div>
            // <a
            //   href="aaa"
            //   key={eachIcon.name}
            //   className="flex flex-col justify-center items-center bg-white-300 border-2 border-black"
            // >
            //   {eachIcon.icon}
            //   <p>{eachIcon.name}</p>
            // </a>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sliding;
