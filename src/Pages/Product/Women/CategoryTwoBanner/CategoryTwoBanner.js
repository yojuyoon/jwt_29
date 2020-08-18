import React from "react";
import "./CategoryTwoBanner.scss";
import TwoBannerItem from "./TwoBannerItem/TwoBannerItem";
import itemData from "../data/womenItemData.js";

class CategoryTwoBanner extends React.Component {
  render() {
    return (
      <div className="CategoryTwoBanner">
        <div className="bannerContainer">
          <ul>
            {itemData.map((item, i) => {
              return (
                <TwoBannerItem
                  img={item.img}
                  title={item.title}
                  content={item.content}
                  key={i}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CategoryTwoBanner;
