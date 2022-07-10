import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { StWrap } from "components/Common/GlobalStyles";
import Detail from "assets/img/Detail.png";
import HeaderImg from "assets/img/HeaderImg.png";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetPostDetail from "components/Hooks/useGetPostDetail";
import { useParams } from "react-router-dom";

const FeedDetail = () => {
  const { postId } = useParams();
  const { data } = useGetPostDetail({ postId: postId });
  return (
    <StWrapFlex>
      <StImgWrap>
        <div className="imageDiv">
          <StImgHeader>
            <div className="headerImg"></div>
            <div className="textDiv">
              <span className="secondaryText">갓생 입문자</span>
              <span>김갓생</span>
            </div>
          </StImgHeader>
          <div className="title">
            <span className="secondaryTitle">운동하기..</span>
            <span>크로스핏 다녀오기</span>
          </div>
        </div>
        <div className="like">
          <div
            className="likeImg"
            type="nth-of-type (z-index: n, left: 10px)"
          ></div>
        </div>
      </StImgWrap>
      <StReplyWrap>
        <div className="replyImg"></div>
        <div className="reply">
          <div>
            <div className="replyUser">댓글쓰는사람</div>
            <div className="replyDay">20.08.7</div>
          </div>

          <div className="replyText">
            저는 21살에 취업해서 1년씩 경력이 두군데 있고 지금은 2살에 1년
            4개월정도 회사에 다니고 있습니다. 이직을 하고 싶은데 어떤 직종으로
            가야할지 모르겠네요. 알려주시면 감사하겠습니다.
          </div>
        </div>
      </StReplyWrap>
      <NavigatorBar />
    </StWrapFlex>
  );
};

export default FeedDetail;

const StWrapFlex = styled(StWrap)`
  ${flex({ justify: "center", direction: "column" })}
  height: 100%;
  width: 375px;
`;
const StReplyWrap = styled.div`
  ${flex({ justify: "flex-start", direction: "row", align: "flex-start" })}
  width: 343px;
  margin-top: 14px;
  margin-bottom: 36px;
  .replyImg {
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-image: url(${HeaderImg});
    background-size: cover;
    background-position: center;
    background-color: white;
    margin-right: 8px;
  }
  .reply {
    width: 280px;
    .replyUser {
      font-weight: 700;
      font-size: 14px;
      line-height: 130%;
    }
    .replyDay {
      font-weight: 400;
      font-size: 12px;
      line-height: 130%;
      color: #b4b4b4;
    }
  }
  .relyText {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-top: 3px;
  }
`;
const StImgWrap = styled.div`
  ${flex({ direction: "column", justify: "flex-start", align: "flex-start" })}

  .imageDiv {
    ${flex({ direction: "column", justify: "flex-end", align: "flex-start" })}
    background-image: url(${Detail});
    background-size: cover;
    background-position: center;
    width: 325px;
    height: 440px;
    margin-top: 56px;
    border-radius: 20px;
    .title {
      ${flex({
        direction: "column",
        align: "flex-start",
        justify: "flex-start",
      })}
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      margin-left: 20px;
      margin-bottom: 25px;
      .secondaryTitle {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
  .like {
    ${flex({ direction: "row", align: "flex-start", justify: "flex-start" })}

    .likeImg {
      height: 24px;
      width: 24px;
      border-radius: 24px;
      background-image: url(${HeaderImg});
      background-size: cover;
      background-position: center;
      border-radius: 100%;
      background-color: white;
      padding: 10px;
      margin-top: 14px;
      left: n px nth-of-type (z-index: 1, left: 10px);
    }
  }
`;
const StImgHeader = styled.div`
  ${flex({ direction: "row" })}
  position: absolute;
  width: 116.03px;
  height: 49.03px;
  left: 20px;
  top: 20px;
  margin-top: 46px;
  margin-left: 30px;
  .headerImg {
    background-image: url(${HeaderImg});

    width: 49.03px;
    height: 49.03px;
    border-radius: 49px;
  }
  .textDiv {
    ${flex({ direction: "column", align: "flex-start" })}
    font-weight: 700;
    font-size: 15px;
    line-height: 130%;
    margin-left: 5px;
    color: #212121;
    .secondaryText {
      font-weight: 400;
      font-size: 13px;
      line-height: 130%;
    }
  }
`;
