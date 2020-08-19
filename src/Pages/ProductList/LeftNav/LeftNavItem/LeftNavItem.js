import React from "react";
import { Link } from "react-router-dom";

function LeftNav({ item, gender }) {
  return (
    <li className="category">
      <Link to={`/ProductList/${gender}/${item}`}>
        <button>{item}</button>
      </Link>
    </li>
  );
}

export default LeftNav;
