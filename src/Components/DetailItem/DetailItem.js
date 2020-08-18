import React from "react";
import { withRouter } from "react-router-dom";
import API_URL from "../../config";
import ActiveIcon from "../ActiveLikeBtn/svg/ActiveIcon";
import UnActiveIcon from "../ActiveLikeBtn/svg/UnActiveIcon";
import "./DetailItem.scss";

class DetailItem extends React.Component {
  state = {
    input: 1,
    data: {},
    heartState: false,
    heartCount: 0,
  };

  calculationHandler = (e) => {
    let { input } = this.state;
    const { name } = e.target;
    const isPlus = name === "plus";

    if (!isPlus && input === 1) return 1;

    this.setState({
      input: isPlus ? (input += 1) : (input -= 1),
    });
  };

  quantityHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  componentDidMount = () => {
    fetch(`${API_URL}/product/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.data,
          heartState: res.data.user_like_pressed,
          heartCount: res.data.like_num,
        });
      });
  };

  shoppingHandler = () => {
    const {
      data: { id },
      input,
    } = this.state;

    fetch(`${API_URL}/cart/add`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        product: id,
        quantity: input,
      }),
    });

    this.props.history.push("/Cart");
  };

  cardPrice = (data) => {
    return (data * 2) / 100;
  };

  decimalRemove = (data) => {
    return (
      Math.floor(data).toLocaleString(undefined, {
        maximumFractionDigits: 5,
      }) + "원"
    );
  };

  handleHeartItem = () => {
    const {
      data: { id },
    } = this.state;

    if (!localStorage.getItem("token")) {
      alert("로그인 먼저 해주세요");
      this.props.history.push("/Login");
    } else {
      fetch(`${API_URL}/product/like`, {
        method: "PATCH",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          product: id,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            heartCount: res.like_data.like_num,
            heartState: res.like_data.pressed,
          });
        });
    }
  };

  render() {
    const {
      input,
      heartState,
      heartCount,
      data: {
        brand_logo,
        brand,
        brand_desc,
        image,
        name,
        price,
        discount_rate,
        discount_price,
      },
    } = this.state;
    const {
      calculationHandler,
      quantityHandler,
      shoppingHandler,
      cardPrice,
      decimalRemove,
      handleHeartItem,
    } = this;

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
                {!heartState ? <UnActiveIcon /> : <ActiveIcon />}
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
                      value={input}
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
                  {(discount_price * input).toLocaleString(undefined, {
                    maximumFractionDigits: 5,
                  })}
                  {"원"}
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
                앱에서 첫 구매 시 <span className="redFont">15%</span> 할인
                그리고 다양한 추가 할인 혜택들
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
}

export default withRouter(DetailItem);
