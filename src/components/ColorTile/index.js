import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.css";

const ColorTile = ({
  selected = false,
  onClick = () => {},
  className = "",
  colors = []
}) => (
  <div
    className={clsx(styles.tilewrapper, className, {
      [styles.selected]: selected
    })}
    onClick={onClick}
  >
    <div className={styles.colorwrapper}>
      <div
        className={clsx(styles.halftile)}
        style={{
          backgroundColor: colors[0]
        }}
      />
      <div
        className={clsx(styles.halftile)}
        style={{
          backgroundColor: colors[1] || colors[0]
        }}
      />
    </div>
  </div>
);

ColorTile.propTypes = {
  selected: PropTypes.bool,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default ColorTile;
