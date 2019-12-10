import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

import { Rating } from "../../components";
import styles from "./style.module.css";

const ProductHeader = ({ product }) => (
  <div className={clsx(styles.product__header_wrapper)}>
    <div className={styles.section}>
      <div className={styles.name}>{product.name}</div>
      <div className={styles.price}>${product.price} USD</div>
    </div>
    <div className={styles.section}>
      <div className={styles.type}>{product.type}</div>
      <Rating rating={product.rating} reviews={product.reviews} maxRating={5} />
    </div>
  </div>
);

ProductHeader.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductHeader;
