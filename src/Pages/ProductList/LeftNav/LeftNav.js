import React from "react";
import LeftNav from "./LeftNavItem/LeftNavItem";
import "./NavLeft.scss";
import { categoryData } from "./../data/categoryData";

class MainLeftNav extends React.Component {
  render() {
    const { gender } = this.props;
    const [menData, womenData] = categoryData;
    const genderArr = gender === "MEN" ? menData : womenData;

    return (
      <div className="MainLeftNav">
        <div className="categoryInner">
          <ul>
            <li className="categoryTitle">
              <button>
                <div className="title">{gender}</div>
              </button>
            </li>
            <li className="categoryList">
              <ul>
                {genderArr.map((item, i) => {
                  return <LeftNav item={item} gender={gender} key={i} />;
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainLeftNav;
