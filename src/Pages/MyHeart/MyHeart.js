import React from "react";
import FavListProduct from "./FavListProduct";
import FavListPost from "./FavListPost";
import FavListBrand from "./FavListBrand";
import TwentyNineTV from "../TwentyNineTV/TwentyNineTV";
import API_URL from "../../config";
import "./MyHeart.scss";

class MyHeart extends React.Component {
  state = {
    favTwentyNineList: [],
    feedCount: "",
    favProductList: [],
    activeId: 0,
    titleClicked: false,
  };

  handleClicked = (id) => {
    this.setState({ activeId: id, titleClicked: true });
  };

  getProductData() {
    fetch(`${API_URL}/mypage/heart/product`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          favProductList: res.data,
        })
      );
  }

  getTVData() {
    fetch(`${API_URL}/mypage/heart/post`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          feedCount: res.my_heart_list.length,
        })
      );
  }

  componentDidMount() {
    const { getProductData, getTVData } = this;
    getProductData();
    getTVData();
  }

  componentHandler = (id) => {
    const { favProductList, favTwentyNineList } = this.state;
    switch (id) {
      case 0:
        return <FavListProduct item={favProductList} />;
      case 1:
        return <FavListBrand />;
      case 2:
        return <TwentyNineTV type="myheart" data={favTwentyNineList} />;
      case 3:
        return <FavListPost />;
      default:
        return favProductList.length ? (
          <FavListProduct item={favProductList} />
        ) : null;
    }
  };

  render() {
    const { handleClicked, componentHandler } = this;
    const { activeId, feedCount, favProductList } = this.state;
    return (
      <div className="MyHeart">
        <aside className="myHeartMenu">
          <div className="user">
            <h2 className="userName">윤지영님</h2>
            <span className="myHeartNumber">
              나의 하트<span>{favProductList.length + feedCount}</span>
            </span>
            <span className="following">
              팔로잉<span>0</span>
            </span>
          </div>
          <ul className="myShoppingInfo">
            <h3 className="title">나의 쇼핑 정보</h3>
            <li className="orderInfo">주문 배송 조회</li>
            <li className="returnInfo">취소/교환/반품 내역</li>
            <li className="review">상품 리뷰</li>
            <li className="paper">증빙서류 발급</li>
          </ul>
          <ul className="myAccountSetting">
            <h3 className="title">나의 계정 설정</h3>
            <li className="userInfoEdit">회원 정보 수정</li>
            <li className="userGrade">회원 등급</li>
            <li className="currentMileage">마일리지현황</li>
            <li className="couponInfo">쿠폰</li>
          </ul>
          <ul className="serviceCenter">
            <h3 className="title">고객 센터</h3>
            <li className="inquiry">1:1 문의내역</li>
            <li className="productqna">상품 Q&A</li>
            <li className="notice">공지사항</li>
            <li className="faq">FAQ</li>
          </ul>
          <ul className="customerInfo">
            <h3 className="number">1644-0560</h3>
            <span>CUSTOMER@29CM.CO.KR</span>
            <span>AM 10:00 - PM 17:00</span>
            <span>(점심시간 12:00 - 14:00)</span>
            <span>DAY OFF(토/일/공휴일)</span>
          </ul>
          <button className="inquireBtn">1:1 문의하기 →</button>
        </aside>
        <main className="myHeartMain">
          <div className="myHeartTopContainer">
            <div className="membershipGrade">
              <h4 className="title">회원등급 〉</h4>
              <div className="membershipContent">
                <span className="grade">ORANGE</span>
                <button className="moreBtn">할인혜택 보기</button>
              </div>
            </div>
            <div className="coupon">
              <h4 className="title">사용가능쿠폰 〉</h4>
              <div className="number">2</div>
            </div>
            <div className="mileage">
              <h4 className="title">마일리지 〉</h4>
              <div className="number">910</div>
            </div>
          </div>
          <ul className="myheartCategory">
            <li
              onClick={() => handleClicked(0)}
              className={activeId === 0 && "myheartCategoryClicked"}
            >
              PRODUCT({favProductList.length})
            </li>
            <li
              onClick={() => handleClicked(1)}
              className={activeId === 1 && "myheartCategoryClicked"}
            >
              BRAND(0)
            </li>
            <li
              onClick={() => handleClicked(2)}
              className={activeId === 2 && "myheartCategoryClicked"}
            >
              TV({feedCount})
            </li>
            <li
              onClick={() => handleClicked(3)}
              className={activeId === 3 && "myheartCategoryClicked"}
            >
              POST(0)
            </li>
          </ul>
          <div className="myHeartContents">{componentHandler(activeId)}</div>
        </main>
      </div>
    );
  }
}

export default MyHeart;
