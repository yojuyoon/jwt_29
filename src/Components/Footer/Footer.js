import React from "react";
import { withRouter } from "react-router-dom";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="FooterContainer">
        <div className="csSection">
          <div className="bar"></div>
          <div className="csInfo">
            <h2 className="csNumber">1644-0560</h2>
            <span className="csTime">
              AM 10:00 - PM 05:00 Off-time PM 1200:00 - PM 02:00
            </span>
            <span className="csDay">DAY OFF (SATURDAY. SUNDAY. HOLIDAY)</span>
          </div>
          <div className="csIconContainer">
            <div className="FAQ">FAQ ‣</div>
            <div className="snsIconWrapper">
              <i className="fab fa-facebook" />
              <i className="fab fa-instagram" />
              <i className="fab fa-bootstrap" />
            </div>
          </div>
          <div className="footerHalf">
            <div className="noticeSection">
              <h2 className="title">NOTICE</h2>
              <ul className="noticeList">
                <li>
                  [당첨자 발표] 바른생각 쇼케이스 포토 후기 이벤트 당첨 안내
                  <div className="new">N</div>
                </li>

                <li>
                  [당첨자 발표] 이달의 홈 잭슨카멜레온 후기 이벤트 당첨자 발표
                  <div className="new">N</div>
                </li>
                <li>
                  [채용] 29CM HOME MD 경력사원 모집
                  <div className="new">N</div>
                </li>
                <li>
                  [당첨자 발표] 비얼디드키드 감상평 이벤트 당첨자 발표
                  <div className="new">N</div>
                </li>
                <li>
                  [당첨자 발표] 헤지스 감상평 이벤트 당첨자 발표
                  <div className="new">N</div>
                </li>
              </ul>
            </div>
            <ul className="menuList">
              <li className="aboutUs">
                <h3 className="title">ABOUT US</h3>
                <span>회사소개</span>
                <span>인재채용</span>
                <span>상시 할인 혜택</span>
              </li>
              <li className="myOrder">
                <h3 className="title">MY ORDER</h3>
                <span>주문배송</span>
                <span>취소/교환/반품 내역</span>
                <span>상품리뷰 내역</span>
                <span>증빙서류발급</span>
              </li>
              <li className="myAccount">
                <h3 className="title">MY ACCOUNT</h3>
                <span>회원정보수정</span>
                <span>회원등급</span>
                <span>마일리지현황</span>
                <span>쿠폰</span>
              </li>
              <li className="help">
                <h3 className="title">HELP</h3>
                <span>상담내역</span>
                <span>상품 Q&A내역</span>
                <span>공지사항</span>
                <span>FAQ</span>
              </li>
            </ul>
          </div>
          <div className="footerInfo">
            <div className="title">
              <h3>개인정보처리방침</h3>
              <span>|</span>
              <h4>이용약관</h4>
            </div>
            <div className="infoContainer">
              <div className="infoText">
                <div className="infoWrap">
                  <span>
                    상호명(주) 에이플러스비 사업장소재지 서울특별시 강남구
                    선릉로93길 35 나라키움 역삼B빌딩 4층팩스 070-8622-7737
                    사업자등록번호 101-86-64617 통신판매업신고
                    2019-서울강남-02774
                  </span>
                  <div className="button">사업자정보확인</div>
                </div>
                <span>
                  고객센터 1644-0560 평일 10:00 ~ 17:00 / Off-time 12:00 ~ 14:00
                  (토/일/공휴일 휴무)이메일 customer@29cm.co.kr 대표이사 윤자영
                  개인정보책임자 신재홍 호스팅서비스 (주)에이플러스비
                </span>
              </div>
              <div className="infoIcon">
                <i className="fas fa-circle-notch" />
                <i className="fab fa-apple" />
                <i className="fab fa-google-play" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
