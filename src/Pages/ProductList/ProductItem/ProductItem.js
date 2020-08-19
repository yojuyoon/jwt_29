import React, { useState, useEffect } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../config";
import ActiveIcon from "../../../Components/ActiveLikeBtn/svg/ActiveIcon";
import UnActiveIcon from "../../../Components/ActiveLikeBtn/svg/UnActiveIcon";
import "./ProductItem.scss";

function ProductItem({ data }) {
  const {
    user_like_pressed,
    like_num,
    id,
    image,
    brand,
    name,
    discount_rate,
    price,
    discount_price,
  } = data;
  const [heartCount, setHeartCount] = useState(0);
  const [myHeartState, setMyHeartState] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (user_like_pressed !== myHeartState) {
      setHeartCount(like_num);
      setMyHeartState(user_like_pressed);
    }
  }, [user_like_pressed, like_num, myHeartState]);

  const handleHeartItem = () => {
    if (!localStorage.getItem("token")) {
      alert("로그인 먼저 해주세요");
      history.push("/Login");
    } else {
      axios
        .patch(`${API_URL}/data.product.json`, {
          body: {
            product: id,
          },
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setHeartCount(res.like_data.like_num);
          setMyHeartState(res.like_data.pressed);
        });
    }
  };

  return (
    <li className="productItem">
      <div className="imgBox">
        <Link to={`/DetailProduct/${id}`}>
          <img alt="item" src={image} />
        </Link>
      </div>
      <div className="info">
        <div className="brand">
          <Link to={`/DetailProduct/${id}`}>{brand}</Link>
        </div>
        <div className="name">
          <Link to={`/DetailProduct/${id}`}>{name}</Link>
        </div>
        <div className="price">
          <div className={discount_rate ? "sellPrice" : "nonDiscounted"}>
            <span>{parseInt(price)}</span>
            <span className={discount_rate ? "hide" : "nonDiscounted"}>원</span>
          </div>
          <div
            className={
              discount_rate ? "discountedPrice" : "discountedPrice hide"
            }
          >
            <span className="discountRate">{discount_rate}%</span>
            <span>{parseInt(discount_price)}원</span>
          </div>
        </div>
        <div className="freeShipping">무료배송</div>
      </div>
      <div className="heartArea" onClick={handleHeartItem}>
        <div className="heart">
          <div className="heartImageBox">
            {myHeartState ? <ActiveIcon /> : <UnActiveIcon />}
          </div>
          <div className="count">{heartCount}</div>
        </div>
      </div>
    </li>
  );
}

export default withRouter(ProductItem);
