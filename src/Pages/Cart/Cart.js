import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: [],
      checkMasterState: false,
      checkState: false,
      cartData: [],
    };
  }

  //총 주문 금액 계산
  handleSumToalPrice = () => {
    const { itemSelected } = this.state;
    const { cartData } = this.state;

    let total = 0;

    for (let i = 0; i < cartData.length; i++) {
      if (itemSelected.includes(cartData[i].id)) {
        if (cartData[i].discount_rate) {
          total += cartData[i].quantity * Number(cartData[i].discount_price);
        } else {
          total += cartData[i].quantity * Number(cartData[i].price);
        }
      }
    }
    return total.toLocaleString();
  };

  //전체 선택 버튼을 따로 관리. 원래 담긴 아이템인 cartItem 배열의 전체 길이와 selectedItem 길이가 같고 다를 때 조건으로
  handleMasterSelectBtn = () => {
    const { itemSelected, cartData } = this.state;

    if (itemSelected.length === cartData.length) {
      this.setState({ itemSelected: [], checkMasterState: false });
    } else {
      const filteredItems = cartData.map((item) => item.id);
      this.setState({
        itemSelected: filteredItems,
        checkMasterState: true,
      });
    }
  };

  handleMasterState = () => {
    const { itemSelected, cartData } = this.state;

    this.setState({
      checkMasterState: itemSelected.length === cartData.length,
    });
  };

  handleSelectedItem = (id) => {
    const { itemSelected } = this.state;

    const filter = itemSelected.filter((item) => {
      return item !== id;
    });

    this.setState(
      {
        itemSelected: itemSelected.includes(id)
          ? filter
          : [...itemSelected, id],
      },
      () => this.handleMasterState()
    );
  };

  //DB로 보낼 데이터를 만드는 함수
  //형태 예시: [{product_list: [{id: 1004, quantity: 2}, {id: 404, quantity: 4}]}, {total: “225,700”}]
  handleCheckOut = () => {
    const { cartData, itemSelected } = this.state;
    let checkOut = [];
    let newData = [];
    var tempObj = {};

    for (let i = 0; i < itemSelected.length; i++) {
      for (let j = 0; j < cartData.length; j++) {
        if (itemSelected[i] === cartData[j].id) {
          tempObj = {};
          tempObj["id"] = itemSelected[i];
          tempObj["quantity"] = cartData[j].quantity;
          checkOut = [...checkOut, tempObj];
        }
      }
    }
    newData = [
      { product_list: checkOut },
      { total: this.handleSumToalPrice() },
    ];
    localStorage.setItem("cart_count", cartData.length);
    return newData;
  };

  handleLeaveCart = () => {
    const { cartData } = this.state;
    let checkOut = [];
    let newData = [];
    var tempObj = {};
    for (let i = 0; i < cartData.length; i++) {
      tempObj = {};
      tempObj["id"] = cartData[i].id;
      tempObj["quantity"] = cartData[i].quantity;
      checkOut = [...checkOut, tempObj];
    }
    newData = [
      { product_list: checkOut },
      { total: this.handleSumToalPrice() },
    ];
    localStorage.setItem("cart_count", cartData.length);
    return newData;
  };

  handleSum = (itemId) => {
    const { cartData } = this.state;
    let temp = [];
    cartData.forEach((item) => {
      if (item.id === itemId) {
        item.quantity += 1;
        temp.push(item);
      }
    });
    this.setState({ cardDate: temp });
  };

  handleMinus = (itemId) => {
    const { cartData } = this.state;
    let temp = [];
    cartData.forEach((item) => {
      if (item.id === itemId && item.quantity > 1) {
        item.quantity -= 1;
        temp.push(item);
      }
    });
    this.setState({ cardDate: temp });
  };

  //selectedItem 배열(선택 된 상품)에 해당하는 상품 삭제
  delSelectedItemGroup = () => {
    const { cartData, itemSelected } = this.state;
    let filtered = [...cartData];

    for (let i = 0; i < itemSelected.length; i++) {
      filtered = filtered.filter((eachItem) => {
        return itemSelected[i] !== eachItem.id;
      });
    }
    this.setState({ cartData: filtered, itemSelected: [] });
  };

  //cartItem에서 item개별적으로 삭제 버튼을 눌렀을 때 동작하는 함수
  delSelectedItem = (id) => {
    const { cartData, itemSelected } = this.state;

    const filter = cartData.filter((eachItem) => {
      return id !== eachItem.id;
    });
    this.setState({ cartData: filter });
    if (itemSelected.includes(id)) {
      this.handleSelectedItem(id);
    }
  };

  componentDidMount() {
    fetch("http://10.58.4.24:8000/cart", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          cartData: res.data,
        });
      });
  }

  componentWillUnmount() {
    let newData = this.handleLeaveCart();

    fetch("http://10.58.4.24:8000/cart/update", {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        cart: newData,
      }),
    })
      .then((res) => res.json())
      .then((res) => {});
  }

  render() {
    const { checkMasterState, itemSelected } = this.state;

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
                      onClick={this.handleMasterSelectBtn}
                    />
                  </span>
                </div>
                <span className="th2">상품 정보</span>
                <span className="th3">수량</span>
                <span className="th4">주문금액</span>
                <span className="th5">배송비</span>
              </div>
              {this.state.cartData.map((item, i) => {
                return (
                  <CartItem
                    cartData={item}
                    checkMasterState={checkMasterState}
                    itemSelected={itemSelected}
                    handleSelectedItem={this.handleSelectedItem}
                    handleSum={this.handleSum}
                    handleMinus={this.handleMinus}
                    delSelectedItem={this.delSelectedItem}
                    key={i}
                  />
                );
              })}
            </div>
            <div className="cartControl">
              <button type="button" onClick={this.delSelectedItemGroup}>
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
                  <span className="price">{this.handleSumToalPrice()}</span>
                  <span className="currency">원</span>
                </div>
                <div className="quantity">
                  총 {this.state.itemSelected.length}개
                </div>
              </div>
              <div className="td2">
                <span className="price">0</span> <span>원</span>
              </div>
              <div className="td3">
                <div className="totalPayment">
                  <span className="price">{this.handleSumToalPrice()}</span>
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
              onClick={this.handleCheckOut}
            >
              <Link to="/Product/MEN">CHECK OUT</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
