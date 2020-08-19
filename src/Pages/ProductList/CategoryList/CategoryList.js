import React, { useState } from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import "./CategoryList.scss";

function CategoryList(props) {
  const [hideDropDown, setHideDropDown] = useState(false);
  const { handleSort, productFilter } = props;

  const HandleDropDown = () => {
    setHideDropDown(!hideDropDown);
  };

  return (
    <div className="CategoryList">
      <div>
        <ul className="categoryTab">
          <div className="categoryLeft">
            {props.detailList.map((item, i) => {
              return <CategoryItem item={item} key={i} />;
            })}
          </div>
          <div className="dropDownWrap">
            <div className="dropDownBtn">
              <div className="recommend" onClick={HandleDropDown}>
                <div className="wrap">{productFilter}</div>
                <div>
                  <i className="fas fa-angle-down"></i>
                </div>
              </div>
              <ul className={hideDropDown ? "dropDown" : "dropDown hide"}>
                <li onClick={handleSort}>추천순</li>
                <li onClick={handleSort}>낮은가격순</li>
                <li onClick={handleSort}>높은가격순</li>
                <li onClick={handleSort}>높은할인순</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default CategoryList;
