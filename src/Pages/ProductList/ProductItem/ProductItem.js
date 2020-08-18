import React from "react";
import "./ProductItem.scss";
import { withRouter, Link } from "react-router-dom";
import API_URL from "../../../Components/config";

class ProductItem extends React.Component {
  constructor() {
    super();
    this.state = {
      heartCount: 0,
      myHeartState: false,
    };
  }

  componentDidMount() {
    this.setState({
      heartCount: this.props.data.like_num,
      myHeartState: this.props.data.user_like_pressed,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.data.user_like_pressed !== this.props.data.user_like_pressed
    ) {
      this.setState({
        heartCount: this.props.data.like_num,
        myHeartState: this.props.data.user_like_pressed,
      });
    }
  }

  handleHeartItem = () => {
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
          product: this.props.data.id,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            heartCount: res.like_data.like_num,
            myHeartState: res.like_data.pressed,
          });
        });
    }
  };

  render() {
    const { data } = this.props;
    const {
      image,
      brand,
      name,
      price,
      discount_rate,
      discount_price,
      id,
    } = data;
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
              <span className={discount_rate ? "hide" : "nonDiscounted"}>
                원
              </span>
            </div>
            <div
              className={
                data.discount_rate ? "discountedPrice" : "discountedPrice hide"
              }
            >
              <span>{discount_rate}</span>
              <span>% </span>
              <span>{parseInt(discount_price)}</span>
              <span>원</span>
            </div>
          </div>
          <div className="freeShipping">무료배송</div>
        </div>
        <div className="heartArea" onClick={this.handleHeartItem}>
          <div className="heart">
            <div className="heartImageBox">
              <svg
                aria-label="non colored"
                className={this.state.myHeartState ? "hide" : "dislike"}
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
              <svg
                aria-label="colored"
                className={this.state.myHeartState ? "like" : "hide"}
                fill="#ed4956"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </div>
            <div className="count">{this.state.heartCount}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ProductItem);
