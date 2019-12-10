import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ColorTile from ".";
import "../../styles/common.css";

storiesOf("Components|Color Tile", module)
  .add("Single Selected", () => {
    return (
      <div>
        <ColorTile
          selected
          colors={["black", "black"]}
          onClick={action("clicked")}
        />
      </div>
    );
  })
  .add("Double", () => {
    return (
      <div>
        <ColorTile colors={["black", "white"]} onClick={action("clicked")} />
      </div>
    );
  })
  .add("Two Tiles", () => {
    return (
      <div>
        <ColorTile colors={["black", "white"]} onClick={action("clicked")} />
        <ColorTile colors={["white", "red"]} onClick={action("clicked")} />
      </div>
    );
  });
