import React from "react";
import { withRouter } from "react-router-dom";
import ProductItem from "../ProductList/ProductItem/ProductItem";
import "./FavListProduct.scss";

class FavListProduct extends React.Component {
  render() {
    return (
      <div className="FavListProduct">
        {this.props.item.map((data) => {
          return <ProductItem data={data} />;
        })}
      </div>
    );
  }
}

export default withRouter(FavListProduct);
