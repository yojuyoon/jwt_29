import React from "react";
import LeftNav from "../../ProductList/LeftNav/LeftNav";
import MainSlider from "./MainSlider/MainSlider";
import CategorySection from "./CategorySection/CategorySection";
import CategoryTwoBanner from "./CategoryTwoBanner/CategoryTwoBanner";
import "./Men.scss";
import { withRouter } from "react-router-dom";

class Men extends React.Component {
  render() {
    const category = this.props.match.params.id;

    return (
      <div className="Men">
        <div className="MainWrap">
          <div className="categoryMainWrap">
            <div className="categoryNav">
              <LeftNav gender={category} />
            </div>
            <div className="categoryContent">
              <div className="mainSwiper">
                <MainSlider />
              </div>
              <div className="categorySection">
                <CategorySection />
                <CategoryTwoBanner />
              </div>
            </div>
          </div>
        </div>
        <div className="rightBtnTopEnd" />
      </div>
    );
  }
}
export default withRouter(Men);
