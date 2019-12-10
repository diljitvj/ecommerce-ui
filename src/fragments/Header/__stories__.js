import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Header from ".";
import "../../styles/common.css";

storiesOf("Fragments|Header", module).add("Header", () => {
  return (
    <div>
      <Header />
    </div>
  );
});
