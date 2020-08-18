import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.scss";

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: false,
    };
  }

  handleCategory = () => {
    this.setState({ menuClicked: true }, () =>
      console.log(this.state.menuClicked)
    );
  };

  render() {
    const { menuClicked } = this.state;
    const { item } = this.props;

    return (
      <li
        onClick={this.handleCategory}
        className={menuClicked ? "CategoryItem clicked" : "CategoryItem"}
      >
        <Link to={`/ProductList/MEN/${item}`}>{item}</Link>
      </li>
    );
  }
}

export default CategoryItem;
