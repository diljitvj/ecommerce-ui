import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

import { Star } from "../../assets/icons";
import styles from "./style.module.css";

const Rating = ({ rating = 0, reviews = 0, className = "", maxRating = 5 }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <Star classname={clsx(styles.star)} selected={rating >= i} key={i} />
      );
    }

    return stars;
  };
  return (
    <div className={clsx(styles.reviewwrapper, className, {})}>
      {renderStars()}
      <span className={styles.reviews}>{reviews} Reviews</span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Rating;
