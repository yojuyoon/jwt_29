import React from "react";
import SnsLogin from "./SnsLogin/SnsLogin";
import { Link } from "react-router-dom";
import API_URL from "../../config";
import "./Login.scss";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    token: "",
    checked: false,
    cart: "",
  };

  handlerlogin = () => {
    const { email, password, token, checked } = this.state;

    fetch(`${API_URL}/account/sign-in`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        token,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          if (checked) {
            localStorage.setItem("token", res.token);
            this.props.history.push("/SpecialOrder");
          } else {
            sessionStorage.setItem("token", res.token);
            this.props.history.push("/SpecialOrder");
          }
        } else {
          alert("로그인 실패");
        }
      });
  };

  handlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlerChecked = (e) => {
    const {
      target: { checked },
    } = e;
    this.setState({ checked });
  };

  render() {
    const { handlerInput, handlerlogin, handlerChecked } = this;
    const { checked } = this.state;

    return (
      <div className="LoginContainer">
        <p className="loginTitle">로그인</p>
        <div className="loginBorder" />
        <div className="columnContainer">
          <input
            className="loginInput"
            name="email"
            onChange={handlerInput}
            placeholder="아이디 / 이메일 아이디 입력"
          />
          <input
            className="loginInput"
            name="password"
            type="password"
            onChange={handlerInput}
            placeholder="비밀번호"
          />
          <div className="autoLogin">
            <input
              className="autoLoginBtn"
              type="checkbox"
              onChange={handlerChecked}
              checked={checked}
            />
            <span>로그인 상태 유지</span>
          </div>
          <button className="loginBtn" onClick={handlerlogin} type="button">
            로그인하기
          </button>
          <div className="loginNotPossible">
            <Link to="/Join" className="LoginNotText">
              회원가입
            </Link>
            <div className="LoginNotBorder" />
            <p className="LoginNotText">계정찾기</p>
            <div className="LoginNotBorder" />
            <p className="LoginNotText">비밀번호 재설정</p>
          </div>
          <p className="snsLoginTitle">SNS계정으로 로그인하기</p>
          <SnsLogin />
        </div>
      </div>
    );
  }
}

export default Login;
