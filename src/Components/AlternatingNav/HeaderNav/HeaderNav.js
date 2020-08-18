import React from "react";
import { withRouter, Link } from "react-router-dom";
import { navData } from "../navData";
import "./HeaderNav.scss";

class Nav extends React.Component {
  logoutHandler = () => {
    alert("로그아웃 정상 처리 되었습니다. 👋💨");
    localStorage.removeItem("token");
    localStorage.removeItem("cart_count");
    sessionStorage.removeItem("token");
    this.props.history.push("/SpecialOrder");
  };

  render() {
    const { logoutHandler } = this;

    return (
      <nav className="Nav">
        <div className="couponBox">
          <span className="couponText">
            29CM 첫 쇼핑을 지원하는 앱 <span className="redColor">15%</span>
            할인 쿠폰
          </span>
          <span className="couponDownContainer">
            쿠폰받기 <i className="fas fa-download" />
          </span>
        </div>
        <div className="menuColumnContainer">
          <div className="logoRowContainer">
            <Link to="/SpecialOrder" className="imgContainer">
              <img
                className="logoImg"
                alt="logo  square"
                src="/Images/logoRectangle.PNG"
              />
            </Link>
            <div>
              <Link to="/MyHeart" className="fas fa-user">
                <span className="menuIcon">MY PAGE</span>
              </Link>
              <Link to="/MyHeart" className="fas fa-heart">
                <span className="menuIcon">MY HEART</span>
              </Link>
              <Link to="/Cart" className="fas fa-shopping-bag">
                <span className="menuIcon">SHOPPING BAG</span>
                {localStorage.getItem("cart_count") && (
                  <span className="shoppingNumber">
                    {localStorage.getItem("cart_count")}
                  </span>
                )}
              </Link>
              {localStorage.getItem("token") ||
              sessionStorage.getItem("token") ? (
                <i onClick={logoutHandler} className="fas fa-door-open">
                  <span className="menuIcon">LOGOUT</span>
                </i>
              ) : (
                <Link to="/Login" className="fas fa-sign-in-alt">
                  <span className="menuIcon">LOGIN</span>
                </Link>
              )}
            </div>
          </div>
          <div className="navRowContainer">
            <div className="menuContainer">
              {navData.title.map(({ name, index, route }) => (
                <Link to={`${route}`} key={index} className="title">
                  {name}
                  {name === "29TV" && <span className="dot" />}
                </Link>
              ))}
            </div>
            <i className="fas fa-search fa-2x" />
          </div>
          <div className="navRowContainer">
            <div className="CategoryColumnContainer">
              <div className="categoryCollection">
                {navData.category.map(({ name, index }) => (
                  <Link
                    key={index}
                    to={`/Product/${name}`}
                    className="category"
                  >
                    {name}
                  </Link>
                ))}
              </div>
              <div className="border" />
              <div className="navSubmenu">
                {navData.submenu.map(({ name, index }) => (
                  <span key={index} className="submenu">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
