import React from "react";
import "./Tours.css";
import { NavLink } from "react-router-dom";
import { LuTimerReset } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import PopularToursImage from "../../../Assets/Images/populartours01.jpg";
import TourInfor from "./TourInfor/TourInfor";
const Tours = ({ tourName, title, price, imageURL, rating }) => {
  return (
    <div>
      <div className="tours-component">
        <div className="tours-content">
          <div className="tours-content-up">
            <img src={imageURL} alt={title} />
            {/* <img src={PopularToursImage} /> */}
          </div>
          <div className="tours-content-down">
            <div className="tours-content-title">
              <NavLink to={`/tour/${tourName}`} className="tour01">
                <AiTwotoneThunderbolt className="thunder-icon" /> {title}
              </NavLink>
            </div>
            <div className="tours-content-time">
              <LuTimerReset className="time-icon" />8 Hours
            </div>
            <div className="tours-content-rate-price">
              {/* <div className="tours-content-rate">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div> */}
              {rating && rating > 0 && (
                Array.from({ length: rating }).map((_, index) => (
                  <span
                    key={index}
                    style={{
                      cursor: 'pointer',
                      fontSize: '24px',
                      color: 'gold',
                      transition: 'color 0.3s, font-size 0.3s',
                      marginRight: '5px'
                    }}
                  >
                    ★
                  </span>
                ))
              )}
              <div className="tours-content-price">
                From <span>${price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
