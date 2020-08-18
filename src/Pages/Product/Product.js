import React from "react";
import Men from "./Men/Men";
import Women from "./Women/Women";

class Product extends React.Component {
  render() {
    const category = this.props.match.params.id;

    return <>{category === "MEN" ? <Men /> : <Women />}</>;
  }
}

export default Product;
