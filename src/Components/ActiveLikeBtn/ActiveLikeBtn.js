import React from "react";
import API_URL from "../../config";
import ActiveIcon from "./svg/ActiveIcon";
import UnActiveIcon from "./svg/UnActiveIcon";
import "./ActiveLikeBtn.scss";

class ActiveLikeBtn extends React.Component {
  iconHandler = () => {
    const { postId, handleIcon } = this.props;

    fetch(`${API_URL}/media/recommend/like`, {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        post: postId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const { user_likes_pressed, like_num } = res.data;
        const option = { user_likes_pressed, like_num };
        handleIcon(postId, option);
      });
  };

  render() {
    const { iconHandler } = this;
    const { likedNumber, heartState } = this.props;
    return (
      <div onClick={iconHandler} className="likeIcon">
        <div>{heartState ? <ActiveIcon /> : <UnActiveIcon />}</div>
        <span className="likeNumber">{likedNumber}</span>
      </div>
    );
  }
}

export default ActiveLikeBtn;
