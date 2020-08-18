import React from "react";
import "./CategorySection.scss";

class CategorySection extends React.Component {
  render() {
    return (
      <div className="categoryWrap">
        <div className="categoryTop">
          <div className="left">
            <div className="feedLeft">
              <div>
                <div className="imgBox">
                  <div className="line" />
                  <img
                    src="http://img.29cm.co.kr/next-product/2020/07/24/5ee95cd4233f4709ab28a6384cce3d78_20200724172552.jpg?width=700"
                    alt="banner"
                  />
                </div>
                <div className="contentBox">
                  <div className="title">월간 캐주얼 #여름 셔츠</div>
                  <div className="content">
                    29CM만의 안목으로 골라낸 캐주얼 아이템. 이번 월간 캐주얼의
                    키워드는 #여름 셔츠입니다.
                  </div>
                </div>
                <div className="btnContainer">
                  <div className="btn">
                    <span>보러가기</span>
                    <span className="arrow"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="rightTop">
              <div className="feedRightTop">
                <div className="container">
                  <div className="imgBox">
                    <div className="line" />
                    <img
                      src="http://img.29cm.co.kr/next-product/2020/07/24/4889593acee540eda0dffc743477c101_20200724172500.jpg?width=1100"
                      alt="content"
                    />
                  </div>
                  <div className="contentBox">
                    <div className="title">29Edition.</div>
                    <div className="content">
                      내 마음에 쏙 드는 물건을 찾으면 아무도 모르게 나만 갖고
                      싶기도 합니다. 오직 29CM에서만 만날 수 있는 유일하고
                      특별한 패션 브랜드와 상품을 소개합니다
                    </div>
                    <div className="btnContainer">
                      <div className="btn">
                        <span>보러가기</span>
                        <span className="arrow"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightBottom">
              <div className="feedRightBottom">
                <div className="container">
                  <div className="imgBox">
                    <div className="line" />
                    <img
                      src="http://img.29cm.co.kr/next-product/2020/07/24/7960da5b113e4ee480ff1aba69d9be86_20200724172638.jpg?width=700"
                      alt="content"
                    />
                  </div>

                  <div className="contentBox">
                    <div>
                      <div className="title">여름을 책임질 팬츠</div>
                      <div className="content">
                        활동성과 스타일 지수를 높여줄 여름 팬츠를 소개합니다.
                      </div>
                      <div className="btnContainer">
                        <div className="btn">
                          <span>보러가기</span>
                          <span className="arrow"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategorySection;
