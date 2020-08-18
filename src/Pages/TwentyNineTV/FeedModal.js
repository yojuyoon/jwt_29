import React from "react";
import SnsModal from "./SnsModal";
import ActiveLikeBtn from "../../Components/ActiveLikeBtn/ActiveLikeBtn";
import "./FeedModal.scss";

class FeedModal extends React.Component {
  constructor() {
    super();
    this.state = {
      shareModal: false,
      heart: false,
      count: "",
    };
  }

  handleSnsModal = () => {
    const { shareModal } = this.state;
    this.setState({ shareModal: !shareModal });
  };

  render() {
    const { HandleSnsModal } = this;
    const {
      hideModal,
      idxPrevHandler,
      idxNextHandler,
      handleIcon,
      data: {
        thumbnail_image,
        staff_logo,
        staff_name,
        official_check,
        content,
        hashtag,
        post_id,
        like_num,
        user_likes_pressed,
      },
    } = this.props;
    const { shareModal } = this.state;
    return (
      <div className="FeedModal">
        {shareModal && <SnsModal hideReport={HandleSnsModal} />};
        <div
          onClick={idxPrevHandler}
          className={!idxPrevHandler ? "btn left hidden" : "btn left"}
        ></div>
        <div className="ModalContentContainer">
          <button onClick={hideModal} className="closeBtn">
            <img
              alt="closeBtn"
              src="https://img.29cm.co.kr/next29cm/media/btn_viewer.png"
            />
          </button>
          <div className="ModalContentImg">
            <img
              alt="contentImg"
              className="contentImg"
              src={thumbnail_image}
            />
          </div>
          <div className="progressBar"></div>
          <div className="rightContents">
            <div className="profile">
              <div className="info">
                <div className="logo">
                  <img
                    alt="profileLogo"
                    className="profileLogo"
                    src={staff_logo}
                  />
                </div>
                <div className="profileName">
                  <span className="brandName">{staff_name}</span>
                  <span className="officialCheck">
                    {official_check && (
                      <span className="officialCheck">✹ Official</span>
                    )}
                  </span>
                </div>
              </div>
              <div className="moreBtn">•••</div>
            </div>
            <div className="contents">
              <div className="text">{content}</div>
              <div className="tag">{hashtag.join(" ")}</div>
            </div>
            <div className="icons">
              <ActiveLikeBtn
                handleIcon={handleIcon}
                postId={post_id}
                likedNumber={like_num}
                heartState={user_likes_pressed}
              />
              <div onClick={HandleSnsModal} className="shareIcon">
                <img
                  alt="shareIcon"
                  src="https://img.icons8.com/windows/32/000000/share-2.png"
                />
              </div>
            </div>
            <div className="productContainer">
              <div className="titleContainer">
                <span className="title">관련 상품 및 브랜드</span>
                <div className="sideBtn">
                  <button className="left">
                    <i className="fas fa-chevron-left" />
                  </button>
                  <button className="right">
                    <i className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
              <div className="productImage">
                <div className="product">
                  <img
                    alt="product"
                    className="product"
                    src="https://img.29cm.co.kr/next-brand/2018/04/27/05e31d8d1ae1439888a0219cc25290ef_20180427184037.jpg"
                  />
                  <img
                    alt="product"
                    className="product"
                    src="https://img.29cm.co.kr/next-brand/2018/04/27/05e31d8d1ae1439888a0219cc25290ef_20180427184037.jpg"
                  />
                  <img
                    alt="product"
                    className="product"
                    src="https://img.29cm.co.kr/next-brand/2018/04/27/05e31d8d1ae1439888a0219cc25290ef_20180427184037.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={idxNextHandler}
          className={!idxNextHandler ? "btn right hidden" : "btn right"}
        ></div>
      </div>
    );
  }
}

export default FeedModal;
