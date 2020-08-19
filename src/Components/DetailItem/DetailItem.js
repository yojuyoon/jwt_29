import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { API_URL } from "../../config";
import axios from "axios";
import ActiveIcon from "../ActiveLikeBtn/svg/ActiveIcon";
import UnActiveIcon from "../ActiveLikeBtn/svg/UnActiveIcon";
import "./DetailItem.scss";
import { useDispatch } from "react-redux";
import { cartsActions } from "../../store/actions";

function DetailItem(props) {
  const [quantity, setQuantity] = useState([]);
  const [product, setProduct] = useState([]);
  const [heartState, setHeartState] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const {
    id,
    brand_logo,
    brand,
    brand_desc,
    image,
    name,
    price,
    discount_price,
    discount_rate,
  } = product;

  const dispatch = useDispatch();

  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  };
  console.log(brand_logo);
  useEffect(() => {
    axios.get(`${API_URL}/data/detail.json`).then((res) => {
      setProduct(res.data.data);
      setHeartState(res.data.user_like_pressed);
      setHeartCount(res.data.like_num);
    });
  }, []);

  const calculationHandler = () => {
    dispatch(cartsActions.incrementQuantity(id));
  };

  const shoppingHandler = () => {
    dispatch(
      cartsActions.addToCart({
        ...product,
        quantity,
      })
    );
  };

  const cardPrice = (data) => {
    return (data * 2) / 100;
  };

  const decimalRemove = (data) => {
    return (
      Math.floor(data).toLocaleString(undefined, {
        maximumFractionDigits: 5,
      }) + "원"
    );
  };

  const handleHeartItem = () => {
    if (!localStorage.getItem("token")) {
      alert("로그인 먼저 해주세요");
      props.history.push("/Login");
      return;
    }
    axios
      .patch(`${API_URL}/product/like`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: {
          product: id,
        },
      })
      .then((res) => {
        setHeartCount(res.like_data.like_num);
        setHeartState(res.like_data.pressed);
      });
  };

  return (
    <div className="DetailItem">
      <div className="titleContainer">
        <div className="imgContainer">
          <img alt="logo" src={brand_logo} />
        </div>
        <div className="brandLink">
          <h1>{brand}</h1>
          <p>{brand_desc}</p>
          <button>BRAND HOME</button>
        </div>
      </div>
      <div className="detailItemContainer">
        <div className="imgContainer">
          <img alt="img" src={image} />
        </div>
        <div className="detailOrder">
          <div className="orderRowContainer">
            <div className="orderTitle">
              <h1>{name}</h1>
            </div>
            <div onClick={handleHeartItem} className="heartCenterContainer">
              {heartState ? <ActiveIcon /> : <UnActiveIcon />}
              <p>{heartCount}</p>
            </div>
          </div>
          <p className="costPrice">{decimalRemove(price)}</p>
          <div className="priceContainer">
            <p className="price">
              {discount_rate}
              {"% "}
              {decimalRemove(discount_price)}
            </p>
            <button className="coupon">쿠폰적용불가상품</button>
          </div>
          <div className="titleBottomBorder" />
          <div className="saleContainer">
            <span className="tr">상품할인</span>
            <span className="td">
              {discount_rate}
              {"% "}
              {decimalRemove(discount_price)}
            </span>
          </div>
          <div className="benefitContainer">
            <span className="tr">추가혜택</span>
            <span>
              <p>현대카드 {cardPrice(price)}원 할인 (2% 청구할인)</p>
              <p>적립금 66p</p>
              <p className="openCard">무이자 카드보기</p>
            </span>
          </div>
          <div className="priceResultContainer">
            <div className="resultProduct">
              <span className="productName">{name}</span>
              <span className="rowContainer">
                <span className="caculatar">
                  <button
                    className="numberBtn"
                    name="minus"
                    onClick={calculationHandler}
                  >
                    -
                  </button>
                  <input
                    className="productNumber"
                    value={quantity}
                    onChange={quantityHandler}
                  />
                  <button
                    className="numberBtn"
                    name="plus"
                    onClick={calculationHandler}
                  >
                    +
                  </button>
                </span>
                <span className="price">{decimalRemove(discount_price)}</span>
              </span>
            </div>
            <div className="border" />
            <div className="totalPrice">
              <span className="text">총 상품 금액</span>
              <span className="price">
                {(discount_price * quantity).toLocaleString(undefined, {
                  maximumFractionDigits: 5,
                })}
                원
              </span>
            </div>
          </div>
          <div className="purcharseContainer">
            <button className="purchaseBtn bag" onClick={shoppingHandler}>
              SHOPPING BAG
            </button>
            <button className="purchaseBtn buy">BUY NOW</button>
          </div>
          <div className="firstPurchaseContainer">
            <span>
              앱에서 첫 구매 시 <span className="redFont">15%</span> 할인 그리고
              다양한 추가 할인 혜택들
            </span>
            <img
              alt="arrow"
              src="https://img.29cm.co.kr/next29cm/combined_shape.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(DetailItem);
