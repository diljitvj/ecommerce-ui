import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from ".";
import "../../styles/common.css";

storiesOf("Components|Button", module)
  .add("Primary", () => {
    return (
      <div>
        <Button type="primary" onClick={action("clicked")}>
          Button
        </Button>
      </div>
    );
  })
  .add("Full Width", () => {
    return (
      <div>
        <Button type="primary" fullWidth onClick={action("clicked")}>
          Add to cart
        </Button>
      </div>
    );
  });
