import React, { useState, useEffect } from "react";
import axios from "axios";

import LeftNav from "./LeftNav/LeftNav";
import ProductItem from "./ProductItem/ProductItem";
import CategoryList from "./CategoryList/CategoryList";
import FilterNav from "./FilterNav/FilterNav";
import { API_URL } from "../../config";
import "./ProductList.scss";

import "./ProductList.scss";

function ProductList(props) {
  const [originItems, setOriginItems] = useState([]); // originalProducts
  const [items, setItems] = useState([]); // products
  const [detailList, setDetailList] = useState([]);
  const [productFilter, setProductFilter] = useState("추천순"); // productsFilterType
  const [productInfoFilter, setProductInfoFilter] = useState([]); // productsInfoFilterTypes

  useEffect(() => {
    axios
      .get("http://localhost:3000/data/product.json", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setItems(res.data.data);
        setOriginItems(res.data.data);
        setDetailList([...new Set(res.data.data.map((data) => data.detail))]);
      });
  }, []);

  useEffect(() => {
    const { category, subcategory } = props.match.params;
    axios
      .get(
        `${API_URL}/product?category=${category}&subcategory=${subcategory}`,
        localStorage.getItem("token") && {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setOriginItems(res.data);
        setItems(res.data);
        setDetailList([...new Set(res.data.data.map((data) => data.detail))]);
      });
  }, [props.match.params]);

  const handleFilterReset = () => {
    setItems(originItems);
    setProductInfoFilter([]);
  };

  const handleProductInfoFilter = (e) => {
    const { innerText } = e.target;
    setProductInfoFilter(
      productInfoFilter.includes(innerText)
        ? productInfoFilter.filter((product) => product !== innerText)
        : [...productInfoFilter, innerText]
    );
  };

  useEffect(() => {
    setItems(
      productInfoFilter.includes("할인상품만")
        ? items.filter((item) => !item.discount_rate)
        : originItems
    );
  }, [productInfoFilter]);

  const handleSort = (e) => {
    const { innerText } = e.target;
    setProductFilter(innerText);
    const sortedProducts = [...items].sort((a, b) => {
      if (innerText === "낮은가격순") return a.price - b.price;
      if (innerText === "높은가격순") return b.price - a.price;
      if (innerText === "높은할인순") return b.discount_rate - a.discount_rate;
      return 0;
    });

    setItems(innerText === "추천순" ? originItems : sortedProducts);
  };

  return (
    <div className="ProductList">
      <div className="categoryWrap">
        <div className="left">
          <LeftNav gender={props.match.params.category} />
          <FilterNav
            handleFilterReset={handleFilterReset}
            handleProductInfoFilter={handleProductInfoFilter}
            productInfoFilter={productInfoFilter}
          />
        </div>
        <div className="right">
          <CategoryList
            handleSort={handleSort}
            detailList={detailList}
            productFilter={productFilter}
          />
          <ul className="productSection">
            {items.map((item) => {
              return (
                <ProductItem
                  data={item}
                  key={item.id}
                  likeNum={item.like_num}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
