import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartsActions } from "../../store/actions";

const Cart = () => {
  const [itemSelected, setItemSelected] = useState([]);
  const [checkMasterState, setCheckMasterState] = useState(false);

  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/data/cartData.json", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(cartsActions.setCarts(res.data));
      });
  }, []);

  const handleSumToalPrice = () => {
    return carts
      .reduce((totalPrice, product) => {
        const { id, price, discount_rate, discount_price, quantity } = product;

        if (itemSelected.includes(id)) {
          totalPrice += discount_rate
            ? quantity * Number(discount_price)
            : quantity * Number(price);
        }

        return totalPrice;
      }, 0)
      .toLocaleString();
  };

  const handleMasterSelectBtn = () => {
    setItemSelected(
      itemSelected.length === carts.length ? [] : carts.map((item) => item.id)
    );
  };

  const handleSelectedItem = (id) => {
    setItemSelected(
      itemSelected.includes(id)
        ? itemSelected.filter((selectedId) => selectedId !== id)
        : [...itemSelected, id]
    );
  };

  useEffect(() => {
    setCheckMasterState(carts.length && itemSelected.length === carts.length);
  }, [itemSelected, carts]);

  const handleCheckOut = () => {
    const product_list = carts.reduce((product_list, product) => {
      const { id, quantity } = product;

      if (itemSelected.includes(id)) {
        product_list.push({
          id,
          quantity,
        });
      }

      return product_list;
    }, []);

    const newData = [{ product_list }, { total: handleSumToalPrice() }];
    localStorage.setItem("cart_count", carts.length);
    return newData;
  };

  const handleRemoveSelectedProducts = () => {
    dispatch(cartsActions.removeSelectedProductsFromCart(itemSelected));
    setItemSelected([]);
  };

  // const handleLeaveCart = () => {
  //   console.log("handle leave cart", carts);

  //   const product_list = carts.map((product) => {
  //     const { id, quantity } = product;
  //     return {
  //       id,
  //       quantity,
  //     };
  //   });

  //   const newData = [{ product_list }, { total: handleSumToalPrice() }];
  //   localStorage.setItem("cart_count", carts.length);

  //   fetch("http://10.58.4.24:8000/cart/update", {
  //     method: "PATCH",
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify({
  //       cart: newData,
  //     }),
  //   }).then((res) => console.log(res));
  // };

  return (
    <div className="Cart">
      <div className="orderFlow">
        <ol>
          <li className="inCart">
            <span>01 SHOPPING BAG</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="orderNow">
            <span className="greyed">02 ORDER</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="orderConfirmed">
            <span className="greyed">03 ORDER CONFIRMED</span>
          </li>
        </ol>
      </div>
      <div className="order">
        <div className="productInfoWrap">
          <div className="cartList">
            <div className="category">
              <div className="th1">
                <span className="check">
                  <input
                    type="checkbox"
                    checked={checkMasterState && "checked"}
                    onChange={handleMasterSelectBtn}
                  />
                </span>
              </div>
              <span className="th2">상품 정보</span>
              <span className="th3">수량</span>
              <span className="th4">주문금액</span>
              <span className="th5">배송비</span>
            </div>
            {carts.map((product, i) => {
              return (
                <CartItem
                  product={product}
                  itemSelected={itemSelected}
                  handleSelectedItem={handleSelectedItem}
                  key={i}
                />
              );
            })}
          </div>
          <div className="cartControl">
            <button type="button" onClick={handleRemoveSelectedProducts}>
              선택상품 삭제
            </button>
            <button type="button">품절상품 삭제</button>
            <span>장바구니는 접속 종료 후 60일 동안 보관됩니다.</span>
          </div>
        </div>
        <div className="priceInfoWrap">
          <div className="category">
            <div className="th1">총 주문금액</div>
            <div className="th2">총 배송비</div>
            <div className="th3">총 결제금액</div>
          </div>
          <div className="content">
            <div className="td1">
              <div className="totalPrice">
                <span className="price">{handleSumToalPrice()}</span>
                <span className="currency">원</span>
              </div>
              <div className="quantity">총 {itemSelected.length}개</div>
            </div>
            <div className="td2">
              <span className="price">0</span>
              <span>원</span>
            </div>
            <div className="td3">
              <div className="totalPayment">
                <span className="price">{handleSumToalPrice()}</span>
                <span className="currency">원</span>
              </div>
            </div>
          </div>
        </div>
        <div className="btnOrderWrap">
          <button className="btnShopping" type="button">
            <Link to="/Product/MEN">CONTINUE SHOPPING</Link>
          </button>
          <button
            className="btnCheckout"
            type="button"
            onClick={handleCheckOut}
          >
            <Link to="/Product/MEN">CHECK OUT</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
