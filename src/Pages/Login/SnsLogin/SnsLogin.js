import React from "react";
import { snsLoginArray } from "./snsLoginData";

import "./SnsLogin.scss";

class SnsLogin extends React.Component {
  render() {
    return (
      <>
        {snsLoginArray.snsLogin.map(({ index, src, alt, text }) => (
          <div key={index} className="snsLoginContainer">
            <div className="imgContainer">
              <img className="logoImg" alt={alt} src={src} />
            </div>
            <p className="loginText">{text}</p>
          </div>
        ))}
        <div className="unLogin">
          <p className="unLoginText">2018년 2월 이전 비회원 주문조회 {">"}</p>
        </div>
      </>
    );
  }
}

export default SnsLogin;
