import React from "react";
import { Link } from "react-router-dom";
import SnsLogin from "../Login/SnsLogin/SnsLogin";
import "./Join.scss";

class Join extends React.Component {
  render() {
    return (
      <div className="Join">
        <p className="loginTitle">회원가입</p>
        <div className="loginBorder" />
        <div className="bannerContainer">
          <p className="banner">
            29CM이 처음이세요?
            <br />
            <br />
            가입 후 더 많은 혜택을 받아보세요.
          </p>
        </div>
        <Link to="/JoinEmail" className="emailJoin">
          이메일로 가입하기
        </Link>
        <SnsLogin />
      </div>
    );
  }
}

export default Join;
