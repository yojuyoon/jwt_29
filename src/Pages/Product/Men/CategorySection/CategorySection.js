import React from "react";
import "./CategorySection.scss";

class CategorySection extends React.Component {
  render() {
    return (
      <div className="categoryWrap">
        <div className="categoryTop">
          <div className="left">
            <div className="FeedLeft">
              <div>
                <div className="imgBox">
                  <div className="line" />
                  <img src="//img.29cm.co.kr/next-product/2020/07/16/8f27856897d841f08f82267f666f62cc_20200716233920.jpg?width=700" />
                </div>
                <div className="contentBox">
                  <div className="title">완벽을 위한 끊임없는 노력</div>
                  <div className="content">
                    1989년 캐나다 서부 연안의 산맥 아래서 태어난 아크테릭스는
                    최상급 아웃도어 의류와 장비로 대표되는 브랜드입니다.
                    역동적인 아웃도어 활동을 위한 정밀한 디자인의 아크테릭스를
                    29CM 쇼케이스로 소개합니다.
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
            <div className="right-top">
              <div className="FeedRightTop">
                <div className="container">
                  <div className="imgBox">
                    <div className="line" />
                    <img src="//img.29cm.co.kr/next-product/2020/07/16/4ee69b189c8945d0976eee7f23d38016_20200716233902.jpg?width=1100" />
                  </div>
                  <div className="contentBox">
                    <div className="title">
                      더니트컴퍼니의 시즌오프가 시작했어요.
                    </div>
                    <div className="content">
                      늘 믿을 수 있는 품질과 디자인을 선보이는 더니트컴퍼니의
                      시즌오프가 시작되었습니다. 지금부터는 더욱 착한 가격으로
                      만나보세요!
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
            <div className="right-bottom">
              <div className="FeedRightBottom">
                <div className="container">
                  <div className="imgBox">
                    <div className="line" />
                    <img src="//img.29cm.co.kr/next-product/2020/07/16/a1f7586652a446ff8451e052078a4b28_20200716233944.jpg?width=700" />
                  </div>

                  <div className="contentBox">
                    <div>
                      <div className="title">빅웨이브 시즌오프 시작</div>
                      <div className="content">
                        다채로운 그래픽을 통해 생기 있는 여름을 만들어드릴
                        빅웨이브의 시즌오프가 시작되었어요, 놓치면 아쉬울
                        아이템들이 가득하니 지금 바로 만나보세요. 단독 ~20%
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
