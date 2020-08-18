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

class FilterNav extends React.Component {
  render() {
    const {
      handleFilterReset,
      handleFilterFreeShipping,
      handleFilterDiscount,
      handleFilterRate,
    } = this.props;

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
              <li className="eachFilter" onClick={handleFilterFreeShipping}>
                <span>
                  <input type="checkbox"></input>
                  <label title="품절상품 제외">무료배송</label>
                </span>
              </li>
              <li className="eachFilter" onClick={handleFilterDiscount}>
                <span>
                  <input type="checkbox"></input>
                  <label title="품절상품 제외">할인상품만</label>
                </span>
              </li>
              <li className="eachFilter">
                <span>
                  <input type="checkbox"></input>
                  <label title="품절상품 제외">품절상품 제외</label>
                </span>
              </li>
            </ul>
          </div>
          <div className="filterBox">
            <div className="filterTitle">가격대</div>
            <ul className="filterContents">
              {priceRangeArr.map((range, i) => {
                return (
                  <li className="eachFilter" onClick={handleFilterRate} key={i}>
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
}

export default FilterNav;
