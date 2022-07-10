import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { StWidth } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import useCategory from "components/Hooks/useCategory";
import useGetMission from "components/Hooks/useGetMission";
import Loading from "pages/Status/Loading";
import { useParams } from "react-router-dom";
import AddModal from "components/Common/addModal";
import { useMutation, useQueryClient } from "react-query";
import AddPost from "components/missionComponents/AddPost";
import {
  missionBG,
  missionCamera,
  missionText,
} from "components/Common/ButtonPropsHandler";
import apis from "shared/api/main";

const HomeCategory = () => {
  const [flag, setFlag] = useState(false);
  const [content, setContent] = useState("");
  const { category } = useParams();
  const categoryCheck = useCategory();
  const { data, isLoading } = useGetMission();
  const arr = [1, 2, 3, 4];
  const queryClient = useQueryClient();

  useEffect(() => {}, [data]);

  const list = data
    ?.map((v) => {
      return category === v.category && v;
    })
    .filter((v) => {
      return v !== false;
    });

  const onToggleModal = useCallback(() => {
    setFlag((value) => !value);
  }, []);

  const completedTodoMutation = useMutation(apis.completedTodo, {
    onSuccess: () => {
      // 캐시에 있는 모든 쿼리를 무효화한다.
      queryClient.invalidateQueries("todos");
    },
  });

  const onCompletedHandler = useCallback(
    (payload) => {
      completedTodoMutation.mutate({
        missionId: payload.missionId,
      });
      alert("미션이 완료 되었습니다. 다시 클릭해서 사진을 추가해주세요");
    },
    [completedTodoMutation]
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StWrap>
      <StContainer>
        <div className="category">
          <span>{categoryCheck}</span>
        </div>
        <div className="missions">
          {arr.map((_, i) => {
            return list[i] !== undefined ? (
              list[i]?.missionState ? (
                <StCompletedDiv number={i}>
                  <AddPost
                    missionId={list[i]?.missionId}
                    category={category}
                    postContent={list[i]?.missionContent}
                  />
                  <span className="missionStatusText">수행완료</span>
                  <StImg number={i} />
                  <span className="innerText">{list[i]?.missionContent}</span>
                </StCompletedDiv>
              ) : (
                <StDiv
                  number={i}
                  onClick={() =>
                    onCompletedHandler({
                      missionId: list[i]?.missionId,
                    })
                  }
                >
                  <span className="missionStatusText">수행중</span>
                  <StImg number={i} />
                  <span className="innerText">{list[i]?.missionContent}</span>
                </StDiv>
              )
            ) : (
              <StDiv onClick={onToggleModal}>
                <StImg />
                <span className="innerText">목표를 생성해주세요.</span>
              </StDiv>
            );
          })}
        </div>
      </StContainer>
      {flag && (
        <AddModal
          setContent={setContent}
          content={content}
          category={category}
          setFlag={setFlag}
        />
      )}
    </StWrap>
  );
};

export default HomeCategory;

const StWrap = styled(StWidth)`
  ${flex({ direction: "column" })}
`;

const StContainer = styled.div`
  ${flex({
    direction: "column",
    justify: "space-between",
    align: "flex-start",
  })}
  width: 345px;
  height: 497px;
  margin-top: 40px;
  .category {
    ${flex({ justify: "flex-start" })}
    width: 201px;
    height: 27px;

    &:first-of-type {
      margin-left: 9px;
    }
    span {
      margin-right: 19px;
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;
      color: #202020;
    }
  }
`;
const StDiv = styled.div`
  position: relative;
  width: 345px;
  height: 105px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  margin-bottom: 8px;
  background-color: ${(props) => missionBG(props.number)};
  .missionStatusText {
    position: absolute;
    top: 23.5px;
    left: 20px;
    padding: 8px 16px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.02em;
    background: #ffffff;
    border-radius: 63px;
    color: ${(props) => missionText(props.number)};
  }
  .innerText {
    position: absolute;
    right: 24px;
    bottom: 24px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.02em;
    color: ${(props) => missionText(props.number)};
  }
`;

const StImg = styled.div`
  margin-top: 24.25px;
  margin-left: 31.5px;
  width: 105px;
  height: 79px;
  background-image: url(${(props) => missionCamera(props.number)});
  background-size: cover;
  background-position: center;
`;

const StCompletedDiv = styled(StDiv)`
  background-color: ${(props) => missionText(props.number)};
  .innerText {
    color: white;
  }
`;
