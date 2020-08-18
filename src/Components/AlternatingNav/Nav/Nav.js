import React from "react";
import { withRouter, Link } from "react-router-dom";
import { navData } from "../navData";
import "./Nav.scss";

class HeaderNav extends React.Component {
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
      <nav className="NavActive">
        <div className="navContainer">
          <Link to="/SpecialOrder" className="logoContainer">
            <img
              className="logoImg"
              alt="logo  square"
              src="/Images/logoSquare.PNG"
            />
          </Link>
          <div className="navMenuContainer">
            <div className="navRowContainer">
              <div className="menuTitle">
                {navData.title.map(({ name, index, route }) => (
                  <Link to={`${route}`} key={index} className="title">
                    {name}
                    {name === "29TV" && <span className="dot" />}
                  </Link>
                ))}
              </div>
              <div className="navMenuIcon">
                <i className="fas fa-user" />
                <Link to="/Myheart" className="fas fa-heart" />
                <Link to="/Cart" className="fas fa-shopping-bag" />
                {localStorage.getItem("cart_count") && (
                  <span className="shoppingNumber">
                    {localStorage.getItem("cart_count")}
                  </span>
                )}
                {localStorage.getItem("token") ||
                sessionStorage.getItem("token") ? (
                  <i onClick={logoutHandler} className="fas fa-door-open" />
                ) : (
                  <Link to="/Login" className="fas fa-sign-in-alt" />
                )}
              </div>
            </div>
            <div className="navRowContainer">
              <div className="categoryColumnContainer">
                <div className="categoryColletion">
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
                <div className="submenuCollection">
                  {navData.submenu.map(({ name, index }) => (
                    <span key={index} className="submenu">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
              <i className="fas fa-search fa-lg" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(HeaderNav);
