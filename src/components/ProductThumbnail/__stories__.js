import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ProductThumbnail from ".";
import "../../styles/common.css";

storiesOf("Components|ProductThumbnail", module)
  .add("ProductThumbnail with tag", () => {
    return (
      <div>
        <ProductThumbnail
          tag="Sold out"
          name="Roadster"
          price={299}
          imageUrl="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
        />
      </div>
    );
  })
  .add("ProductThumbnail without tag", () => {
    return (
      <div>
        <ProductThumbnail
          name="Roadster"
          price={299}
          imageUrl="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
        />
      </div>
    );
  })
  .add("2 ProductThumbnails without tag", () => {
    return (
      <div>
        <ProductThumbnail
          name="Roadster"
          price={299}
          imageUrl="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
        />
        <ProductThumbnail
          name="Roadster"
          price={299}
          imageUrl="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
        />
      </div>
    );
  });
