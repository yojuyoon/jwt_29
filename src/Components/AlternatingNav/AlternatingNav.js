import React from "react";
import { withRouter } from "react-router-dom";
import HeaderNav from "./HeaderNav/HeaderNav";
import Nav from "./Nav/Nav";

class AlternatingNav extends React.Component {
  state = {
    scrolled: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const { scrollHeight, clientHeight } = document.documentElement;
    const scrolled = winScroll / (scrollHeight - clientHeight);

    this.setState({
      scrolled,
    });
  };
  render() {
    const { scrolled } = this.state;
    return <>{scrolled >= 0.087 ? <Nav /> : <HeaderNav />}</>;
  }
}

export default withRouter(AlternatingNav);
