import React from "react";
import LeftNav from "../../../Pages/ProductList/LeftNav/LeftNav";
import CategorySection from "./CategorySection/CategorySection";
import MainSlider from "./MainSlider/MainSlider";
import CategoryTwoBanner from "./CategoryTwoBanner/CategoryTwoBanner";
import "./Women.scss";
import { withRouter } from "react-router-dom";
// import MainWrap from "./MainWrap/MainWrap";

class Women extends React.Component {
  render() {
    const category = this.props.match.params.id;

    return (
      <div className="Women">
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

export default withRouter(Women);
