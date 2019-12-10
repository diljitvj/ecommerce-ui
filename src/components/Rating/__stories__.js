import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Rating from ".";
import "../../styles/common.css";

storiesOf("Components|Rating", module)
  .add("Rating 4/5", () => {
    return (
      <div>
        <Rating rating={4} reviews={4} />
      </div>
    );
  })
  .add("Rating 5/5", () => {
    return (
      <div>
        <Rating rating={5} reviews={4} />
      </div>
    );
  });
