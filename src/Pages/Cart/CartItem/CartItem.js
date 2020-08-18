import React from "react";
import "./CartItem.scss";
import { Link } from "react-router-dom";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      checkState: false,
      checkMasterState: false,
    };
  }

  componentDidMount() {
    this.setState({ quantity: this.props.cartData.quantity });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({ quantity: this.props.cartData.quantity });
    }
  }

  handleTotalPriceItem = () => {
    const { discount_rate, discount_price, price } = this.props.cartData;
    const { quantity } = this.state;

    if (discount_rate) {
      return (quantity * +discount_price).toLocaleString();
    }

    return (quantity * +price).toLocaleString();
  };

  render() {
    const {
      id,
      image,
      brand,
      name,
      price,
      discount_rate,
      discount_price,
      quantity,
    } = this.props.cartData;

    const {
      itemSelected,
      handleSelectedItem,
      delSelectedItem,
      handleMinus,
      handleSum,
    } = this.props;

    return (
      <div className="CartItem">
        <div className="td1">
          <span
            className="check"
            onClick={() => handleSelectedItem(id, quantity)}
          >
            <input
              type="checkbox"
              checked={itemSelected.includes(id) && "checked"}
            ></input>
          </span>
        </div>
        <div className="td2">
          <div className="image">
            <Link to={`/DetailProduct/${id}`}>
              <img src={image} alt="product" />
            </Link>
          </div>
          <div className="productInfo">
            <div>
              <Link to={`/DetailProduct/${id}`} className="name">
                {brand}
              </Link>
            </div>
            <div>
              <Link className="info">{name}</Link>
            </div>
            <div className="originalPrice">
              <span className="price">{parseInt(price).toLocaleString()}</span>{" "}
              <span className="currency">원</span>
            </div>
            <div className={discount_rate ? "productPrice" : "hide"}>
              <span className="discountRate">[{discount_rate}%]</span>{" "}
              <span className="totalPrice">
                {parseInt(discount_price).toLocaleString()}
              </span>
              <span className="currency">원</span>
            </div>
            <button
              className="delBtn"
              onClick={() => delSelectedItem(id)}
            ></button>
          </div>
        </div>
        <div className="td3">
          <div>
            <div className="inputQuantity">
              <button
                className="btn"
                type="button"
                onClick={() => handleMinus(id)}
              >
                -
              </button>
              <div className="quantity">{this.state.quantity}</div>
              <button
                className="btn"
                type="button"
                onClick={() => handleSum(id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="td4">
          <div>
            <div className="price">
              <span>{this.handleTotalPriceItem()}</span>
              <span>원</span>
            </div>
            <div>
              <button>
                <Link>BUY NOW</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="td5">29CM 무료배송</div>
      </div>
    );
  }
}

export default CartItem;
