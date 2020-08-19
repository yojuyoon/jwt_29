import React from "react";
import LeftNavItem from "./LeftNavItem/LeftNavItem";
import "./NavLeft.scss";
import { categoryData } from "./../data/categoryData";

function MainLeftNav({ gender }) {
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
                return <LeftNavItem item={item} gender={gender} key={i} />;
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainLeftNav;
