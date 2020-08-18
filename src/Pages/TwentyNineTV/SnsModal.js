import React from "react";
import "./SnsModal.scss";

class SnsModal extends React.Component {
  render() {
    const { hideReport } = this.props;
    return (
      <div className="SnsModal">
        <div className="SnsModalContainer">
          <div className="closeBtn">
            <img
              onClick={hideReport}
              alt="closeBtn"
              src="https://img.29cm.co.kr/next29cm/media/btn_viewer.png"
            />
          </div>
          <div className="title">
            <h3>공유하기</h3>
          </div>
          <div className="snsLogo">
            <div className="kakao">
              <i class="fas fa-comment" />
            </div>
            <div className="facebook">
              <i class="fab fa-facebook" />
            </div>
            <div className="twitter">
              <i class="fab fa-twitter" />
            </div>
            <div className="url">
              <i class="fas fa-link" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SnsModal;
