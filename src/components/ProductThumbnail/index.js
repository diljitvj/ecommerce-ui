import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.css";

const ProductThumbnail = ({
  name = "",
  price = 0,
  tag = "",
  imageUrl = ""
}) => {
  return (
    <div className={clsx(styles.thumbnailwrapper)}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {tag && <div className={styles.tag}>{tag}</div>}
      </div>
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>$ {price}</div>
      </div>
    </div>
  );
};

ProductThumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tag: PropTypes.string
};

export default ProductThumbnail;
