import React from "react";
import "./CartItem.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartsActions } from "../../../store/actions";

const CartItem = ({
  product,
  itemSelected,
  handleSelectedItem,
  delSelectedItem,
}) => {
  const {
    id,
    image,
    brand,
    name,
    price,
    discount_rate,
    discount_price,
    quantity,
  } = product;

  const dispatch = useDispatch();

  const handleTotalPriceItem = () => {
    if (discount_rate) {
      return (quantity * Number(discount_price)).toLocaleString();
    }

    return (quantity * Number(price)).toLocaleString();
  };

  return (
    <div className="CartItem">
      <div className="td1">
        <span
          className="check"
          onClick={() => handleSelectedItem(id)}
        >
          <input
            type="checkbox"
            checked={itemSelected.includes(id) && "checked"}
          >
          </input>
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
            <span className="price">{parseInt(price).toLocaleString()}</span>
            {" "}
            <span className="currency">원</span>
          </div>
          <div className={discount_rate ? "productPrice" : "hide"}>
            <span className="discountRate">[{discount_rate}%]</span>
            {" "}
            <span className="totalPrice">
              {parseInt(discount_price).toLocaleString()}
            </span>
            <span className="currency">원</span>
          </div>
          <button
            className="delBtn"
            onClick={() => dispatch(cartsActions.removeOneFromCart(id))}
          >
          </button>
        </div>
      </div>
      <div className="td3">
        <div>
          <div className="inputQuantity">
            <button
              className="btn"
              type="button"
              onClick={() => dispatch(cartsActions.decrementQuantity(id))}
            >
              -
            </button>
            <div className="quantity">{quantity}</div>
            <button
              className="btn"
              type="button"
              onClick={() => dispatch(cartsActions.incrementQuantity(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="td4">
        <div>
          <div className="price">
            <span>{handleTotalPriceItem()}</span>
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
};

export default CartItem;
