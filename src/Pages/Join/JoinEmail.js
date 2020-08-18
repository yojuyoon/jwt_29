import React from "react";
import "./JoinEmail.scss";
import API_URL from "../../config";

class JoinEmail extends React.Component {
  state = {
    email: "",
    password: "",
    passwordCheck: "1",
    checkbox: false,
    token: "",
    value: "",
    checked: "",
  };

  joinHandler = () => {
    const { email, password } = this.state;

    fetch(`${API_URL}/account/sign-up`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) =>
        res.token
          ? (sessionStorage.setItem("token", res.token),
            this.props.history.push("/Login"))
          : alert("다시 회원가입 해주세요")
      );
  };

  changeInputHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  checkboxHandler = (e) => {
    const { checked } = e.target;
    this.setState({ checked });
  };

  render() {
    const { changeInputHandler, checkboxHandler } = this;
    const { email, password, passwordCheck, checked, checkbox } = this.state;

    return (
      <div className="LoginContainer">
        <p className="loginTitle">회원가입</p>
        <div className="loginBorder" />
        <p className="loginSubtitle">이메일</p>
        <input
          name="email"
          className="loginInput"
          onChange={changeInputHandler}
          placeholder="이메일을 입력하세요"
          required
        />
        {!email.includes("@", ".") && (
          <p className="format">이메일 형식이 올바르지 않습니다.</p>
        )}

        <p className="loginSubtitle">비밀번호</p>
        <input
          type="password"
          name="password"
          className="loginInput"
          onChange={changeInputHandler}
          placeholder="비밀번호를 입력하세요"
        />
        <input
          type="password"
          name="passwordCheck"
          className="loginInput"
          onChange={changeInputHandler}
          placeholder="비밀번호를 확인해주세요"
        />
        {password !== passwordCheck && (
          <p className="format">비밀번호가 일치하지 않습니다.</p>
        )}
        <div className="agreeContainer">
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={checkboxHandler}
              value={checkbox}
            />
            [필수] 이용약관 및 개인정보 수집/이용에 동의
          </label>
          <i className="fas fa-chevron-down" />
        </div>
        <div className="agreeContainer">
          <label>
            <input type="checkbox" value="false" />
            [선택] 광고성 정보 수신 동의
          </label>
          <i className="fas fa-chevron-down" />
        </div>
        {email && password && checked ? (
          <button onClick={this.joinHandler} className="join activeBtn">
            가입하기
          </button>
        ) : (
          <button
            onClick={this.joinHandler}
            className="join disableBtn"
            disabled
          >
            가입하기
          </button>
        )}
      </div>
    );
  }
}

export default JoinEmail;
