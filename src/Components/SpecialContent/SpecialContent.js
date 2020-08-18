import React from "react";
import { withRouter } from "react-router-dom";
import "./SpecialContent.scss";

class SpecialContent extends React.Component {
  state = {
    dDay: "",
  };

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      dDay: new Date("2020/07/31 23:59:59").getTime() - new Date().getTime(),
    });
  }

  digitCheck = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  progressHandler = () => {
    const endDay = this.props.content.end.replace(/^ /, "");
    const endDate = "2020/" + endDay + " 23:59:59";
    const startDate = this.props.content.start + " 00:00:00";

    const endDateTime = new Date(endDate).getTime();
    const startDateTime = new Date(startDate).getTime();
    const nowDateTime = new Date().getTime();

    const entireDate = endDateTime - startDateTime;
    const nowDate = nowDateTime - startDateTime;
    const dDayPercent = Math.floor((nowDate / entireDate) * 100) + "%";

    const progressStyle = {
      width: `${dDayPercent}`,
    };

    return progressStyle;
  };

  dDayHandler = () => {
    const endDay = this.props.content.end.replace(/^ /, "");
    const endDate = "2020/" + endDay + " 00:00:00";
    const day = 1000 * 60 * 60 * 24;

    const endDateTime = new Date(endDate).getTime();
    const nowDateTime = new Date().getTime();

    const entireTime = endDateTime - nowDateTime;
    const remainingDate = Math.floor(entireTime / day + 1);
    return remainingDate + "일";
  };

  render() {
    const { digitCheck, progressHandler, dDayHandler } = this;
    const { dDay } = this.state;
    const { content } = this.props;

    const Second = 1000 * 60;
    const Minute = Second * 60;
    const Hour = Minute * 24;
    const hourCheck = digitCheck(Math.floor((dDay % Hour) / Minute));
    const minuteCheck = digitCheck(Math.floor((dDay % Minute) / Second));
    const secondCheck = digitCheck(Math.floor((dDay % Second) / 1000));
    const dDayTime = hourCheck + ":" + minuteCheck + ":" + secondCheck;

    return (
      <li className="SpecialContent">
        <div className="imgContainer">
          <a
            href={
              content.id === 6
                ? "https://wecode.co.kr/"
                : "/DetailProduct/" + content.product_id
            }
          >
            <img className="orderImg" alt="img" src={content.image} />
          </a>
        </div>
        <h2 className="itemTitle">{content.title}</h2>
        <h4 className="itemSubtitle">
          {content.subtitle}
          <span className="subcontent">{content.subcontent}</span>
        </h4>
        <div className="dDayBubble">
          {
            <div className="bubble">
              D-day {dDayHandler()} {dDayTime}
            </div>
          }
        </div>
        <div className="dDayBorder">
          <div className="progress" style={progressHandler()} />
        </div>
        <p className="itemDate">
          {content.start}
          {"~"}
          {content.end}
        </p>
      </li>
    );
  }
}

export default withRouter(SpecialContent);
