import { MISSION_ADD_LENGTH } from "shared/data";
import { useState, useCallback, useEffect } from "react";
import { badWords } from "shared/TextsData";
import useAddMission from "components/Hooks/Mission/useAddMission";
import InputModal from "components/Common/InputModal";
import AddedMission from "./AddedMission";
import flex from "components/Common/flex";
import plus from "assets/img/plus.webp";
import styled from "@emotion/styled";
import Button from "components/Common/Button";
import JoyrideContainer from "components/Tutorial/JoyrideContainer";
import { missionOne } from "shared/tutorialData";
import { useDispatch } from "react-redux";
import {
  MissionAddModalError,
  MissionAddModalSuccess,
} from "redux/modules/modal";

const EmptyMission = ({ category, list }) => {
  const arr = [1, 2, 3, 4];
  const [mission, setMission] = useState("");
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const { mutate } = useAddMission();

  const [isShowTutorial, setIsShowTutorial] = useState(false);

  const tutorial = localStorage.getItem("tutorial-mission");

  useEffect(() => {
    if (tutorial === null) {
      setIsShowTutorial(true);
      localStorage.setItem("tutorial-mission", false);
    }
  }, [tutorial]);

  const onClickedHandler = useCallback(() => {
    setClicked((value) => !value);
  }, []);

  const onCancelBtnHandler = useCallback((setter) => {
    setter((value) => !value);
  }, []);

  const onAddMissionHandler = useCallback(() => {
    if (mission !== "") {
      mutate({ missionContent: mission, category: category });
      setClicked((value) => !value);
      dispatch(MissionAddModalSuccess(true));
    } else {
      dispatch(MissionAddModalError(true));
    }
  }, [mutate, mission, category, dispatch]);

  const bogusCheck = useCallback(() => {
    const foundSwears = badWords.filter((word) =>
      mission.toLowerCase().includes(word.toLowerCase())
    );
    if (foundSwears.length) {
      dispatch(MissionAddModalError(true));
    } else {
      onAddMissionHandler();
    }
  }, [mission, onAddMissionHandler, dispatch]);

  return (
    <>
      {/* 목표 등록 인풋 모달 */}
      {clicked ? (
        <InputModal
          set={setMission}
          confirm={bogusCheck}
          cancel={() => onCancelBtnHandler(setClicked)}
          title="목표 생성하기"
          list1="비속어 사용 불가"
          list2="20자 이하"
          isListed={true}
          cancelTitle="취소"
          confirmTitle="등록하기"
          placeholder="매일 런닝 30분"
          count={MISSION_ADD_LENGTH}
        />
      ) : (
        <></>
      )}
      {arr.map((v, i) => {
        return list[i] !== undefined ? (
          <AddedMission
            key={i}
            missionContent={list[i].missionContent}
            missionId={list[i].missionId}
          />
        ) : (
          <></>
        );
      })}
      <StFlexBtw>
        {list?.length < 1 ? (
          <StWrap onClick={onClickedHandler} className="mission_one">
            <StCircle>
              <StImg img={plus} />
            </StCircle>
            <div className="innerDiv">
              <span>목표를 생성해주세요.</span>
            </div>
          </StWrap>
        ) : (
          <></>
        )}
        <StMissionBtn className="mission_two">
          <Button
            theme="dark"
            text="새로운 목표 추가하기"
            click={onClickedHandler}
          />
        </StMissionBtn>
      </StFlexBtw>
      <JoyrideContainer
        run={isShowTutorial}
        setRun={setIsShowTutorial}
        steps={missionOne}
      />
    </>
  );
};

export default EmptyMission;

const StWrap = styled.div`
  ${flex({ justify: "flex-start" })}
  width: 345px;
  height: 105px;
  background: var(--white);
  border: 1px dashed var(--gray-5);
  border-radius: 16px;
  margin-bottom: 8px;
  .innerDiv {
    ${flex({ align: "flex-end" })}
    height: 100%;
    span {
      margin: 0 0 24px 31px;
      font-weight: 600;
      font-size: 24px;
      color: var(--gray-7);
    }
  }
  @media screen and (max-width: 350px) {
    width: 250px;
    height: 80px;
    span {
      margin: 0 0 24px 21px !important;
      font-weight: 600;
      font-size: 16px !important;
      color: var(--gray-7);
    }
  }
  @media screen and (max-height: 700px) {
    height: 80px;
    span {
      margin: 0 0 24px 31px !important;
      font-weight: 600;
      color: var(--gray-7);
    }
  }
`;

const StCircle = styled.div`
  ${flex({})}
  width: 66px;
  height: 66px;
  border: 1px solid var(--gray-3);
  border-radius: 94px;
  margin-left: 29px;
  @media screen and (max-width: 350px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-height: 700px) {
    width: 50px;
    height: 50px;
  }
`;

const StImg = styled.div`
  width: 22px;
  height: 22px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;
const StFlexBtw = styled.div`
  ${flex({ direction: "column", justify: "space-between" })};
  height: calc(100% - 300px);
  @media screen and (max-height: 700px) {
    height: calc(100% - 250px);
  }
  @media screen and (min-height: 1000px) {
    height: 700px;
  }
`;
const StMissionBtn = styled.div``;
