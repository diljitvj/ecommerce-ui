import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ProductHeader from ".";
import "../../styles/common.css";

storiesOf("Fragments|Product Header", module).add("Product Header", () => {
  return (
    <div>
      <ProductHeader
        product={{
          name: "Red Canvas",
          type: "OCA Low",
          rating: 4,
          reviews: 154,
          price: 50
        }}
      />
    </div>
  );
});
