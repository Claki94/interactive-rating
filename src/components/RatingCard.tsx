import React, { useState } from "react";
import "../scss/RatingCard.scss";
import { ReactComponent as IconStar } from "../svgs/icon-star.svg";
import { Link } from "react-router-dom";

const RatingCard = ({ ratingOptions, setRating }) => {
  const [activeRating, setActiveRating] = useState<
    EventTarget & HTMLButtonElement
  >(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (activeRating !== null) activeRating.classList.remove("active");

    e.currentTarget.classList.add("active");
    setActiveRating(e.currentTarget);

    const value = parseInt(e.currentTarget.value);
    setRating(value);
  };

  return (
    <div className="card-container">
      <div className="card-button-container">
        <button className="card-button-rounded">
          <IconStar />
        </button>
      </div>
      <h1 className="card-title">How did we do?</h1>
      <p className="card-text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="card-button-container">
        {Array.from(Array(ratingOptions).keys()).map((value, index) => {
          value += 1;
          return (
            <button
              key={index}
              onClick={handleClick}
              value={value}
              className="card-button-rounded rating-button"
            >
              {value}
            </button>
          );
        })}
      </div>
      <Link to="/rating-result">
        <button className="card-button">Submit</button>
      </Link>
    </div>
  );
};

export default RatingCard;
