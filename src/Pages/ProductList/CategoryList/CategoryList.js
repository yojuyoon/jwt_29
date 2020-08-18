import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import "./CategoryList.scss";

const obj = {
  0: "추천순",
  1: "추천순",
  2: "신상품순",
  3: "베스트순",
  4: "낮은가격순",
  5: "높은가격순",
  6: "높은할인순",
  7: "베스트리뷰순",
  8: "베스트하트순",
};

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideDropDown: false,
      filterId: 0,
    };
  }

  HandleDropDown = () => {
    this.setState({ hideDropDown: !this.state.hideDropDown });
  };

  handleFilterId = (filterId) => {
    this.setState({ filterId });
  };

  render() {
    const { handleSort } = this.props;

    return (
      <div className="CategoryList">
        <div>
          <ul className="categoryTab">
            <div className="categoryLeft">
              {this.props.detailList.map((item, i) => {
                return <CategoryItem item={item} key={i} />;
              })}
            </div>
            <div className="dropDownWrap">
              <div className="dropDownBtn">
                <div className="recommend" onClick={this.HandleDropDown}>
                  <div className="wrap">{obj[this.state.filterId]}</div>
                  <div>
                    <i className="fas fa-angle-down"></i>
                  </div>
                </div>
                <ul
                  className={
                    this.state.hideDropDown ? "dropDown" : "dropDown hide"
                  }
                >
                  <li onClick={() => this.handleFilterId(1)}>추천순</li>
                  <li
                    onClick={
                      (() => this.handleFilterId(2),
                      this.props.handleSortCreatedAt)
                    }
                  >
                    신상품순
                  </li>
                  <li onClick={() => this.handleFilterId(3)}>베스트순</li>
                  <li
                    onClick={
                      (() => this.handleFilterId(4), () => handleSort("D"))
                    }
                  >
                    낮은가격순
                  </li>
                  <li
                    onClick={
                      (() => this.handleFilterId(5), () => handleSort("A"))
                    }
                  >
                    높은가격순
                  </li>
                  <li onClick={() => this.handleFilterId(6)}>높은할인순</li>
                  <li onClick={() => this.handleFilterId(7)}>베스트리뷰순</li>
                  <li onClick={() => this.handleFilterId(8)}>베스트하트순</li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default CategoryList;
