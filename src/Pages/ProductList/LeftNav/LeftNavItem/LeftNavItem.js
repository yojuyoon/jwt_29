import React from "react";
import { Link } from "react-router-dom";

class LeftNav extends React.Component {
  render() {
    const { item, gender } = this.props;

    return (
      <li className="category">
        <Link to={`/ProductList/${gender}/${item}`}>
          <button>{item}</button>
        </Link>
      </li>
    );
  }
}

export default LeftNav;
