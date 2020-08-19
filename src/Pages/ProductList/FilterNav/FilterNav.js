import React from "react";
import "./FilterNav.scss";

const priceRangeArr = [
  "전체 가격",
  "3,900원 ~ 10,000원",
  "10,000원 ~ 50,000원",
  "50,000원 ~ 100,000원",
  "100,000원 ~ 300,000원",
  "300,000원 ~ 500,000원",
  "500,000원 ~ 1,000,000원",
  "1,000,000원 ~ 1,390,000원",
];

function FilterNav(props) {
  const {
    handleFilterReset,
    handleProductInfoFilter,
    productInfoFilter,
  } = props;

  return (
    <div className="FilterNav">
      <div className="filterTop">
        <span>필터</span>
        <span className="reset" onClick={handleFilterReset}>
          초기화
        </span>
      </div>
      <div className="filterBody">
        <div className="filterBox">
          <div className="filterTitle">상품정보</div>
          <ul className="filterContents">
            <li className="eachFilter" onClick={handleProductInfoFilter}>
              <span>
                <input
                  type="checkbox"
                  checked={productInfoFilter.includes("무료배송") && "checked"}
                />
                <label>무료배송</label>
              </span>
            </li>
            <li className="eachFilter" onClick={handleProductInfoFilter}>
              <span>
                <input
                  type="checkbox"
                  checked={
                    productInfoFilter.includes("할인상품만") && "checked"
                  }
                />
                <label>할인상품만</label>
              </span>
            </li>
          </ul>
        </div>
        <div className="filterBox">
          <div className="filterTitle">가격대</div>
          <ul className="filterContents">
            {priceRangeArr.map((range, i) => {
              return (
                <li className="eachFilter" key={i}>
                  <span>
                    <input type="radio"></input>
                    <label _ngcontent-c19="" title="품절상품 제외">
                      {range}
                    </label>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilterNav;
