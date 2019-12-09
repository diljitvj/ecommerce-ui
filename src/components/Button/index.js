import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.css";

const Button = ({
  children,
  type = "primary",
  fullWidth = false,
  className = "",
  onClick = () => {}
}) => (
  <button
    onClick={onClick}
    className={clsx(styles.button, className, [styles[type]], {
      [styles.fullwidth]: fullWidth
    })}
  >
    {children}
  </button>
);

Button.propTypes = {
  fullWidth: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.oneOf(["primary"]),
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;
