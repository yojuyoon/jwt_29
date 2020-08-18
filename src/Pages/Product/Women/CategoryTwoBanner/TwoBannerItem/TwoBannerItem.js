import React from "react";
import "./TwoBannerItem.scss";

class TwoBannerItem extends React.Component {
  render() {
    const { img, title, content } = this.props;
    return (
      <li className="Item">
        <div className="imgBox">
          <img src={img} alt="content" />
        </div>
        <div className="container">
          <div className="title">{title}</div>
          <div className="content">{content}</div>
        </div>
      </li>
    );
  }
}

export default TwoBannerItem;
