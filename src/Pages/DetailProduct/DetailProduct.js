import React from "react";
import { withRouter } from "react-router-dom";
import DetailItem from "../../Components/DetailItem/DetailItem";
import "./DetailProduct.scss";

class DetailProduct extends React.Component {
  state = {
    title: "",
    data: [],
  };

  render() {
    const { data } = this.state;

    return (
      <>
        <div className="DetailProduct" />
        <DetailItem key={data.product_id} content={data} />
      </>
    );
  }
}

export default withRouter(DetailProduct);
