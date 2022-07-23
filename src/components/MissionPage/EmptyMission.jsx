import { MISSION_ADD_LENGTH } from "shared/data";
import { useState, useCallback } from "react";
import { badWords } from "shared/TextsData";
import useAddMission from "components/Hooks/Mission/useAddMission";
import AlertComponent from "components/Common/AlertComponent";
import InputModal from "components/Common/InputModal";
import AddedMission from "./AddedMission";
import flex from "components/Common/flex";
import plus from "assets/img/plus.webp";
import styled from "@emotion/styled";
import Button from "components/Common/Button";

const EmptyMission = ({ category, list }) => {
  const arr = [1, 2, 3, 4];
  const [mission, setMission] = useState("");
  const [clicked, setClicked] = useState(false);
  const { mutate } = useAddMission();

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

      AlertComponent({
        icon: "success",
        title: `${mission}`,
        text: "목표 생성 완료!",
      });
    } else {
      AlertComponent({
        icon: "error",
        title: "에러!",
        text: "제대로 된 미션을 입력해주세요",
      });
    }
  }, [mutate, mission, category]);

  const bogusCheck = useCallback(() => {
    const foundSwears = badWords.filter((word) =>
      mission.toLowerCase().includes(word.toLowerCase())
    );
    if (foundSwears.length) {
      AlertComponent({
        icon: "error",
        title: "에러!",
        text: "제대로 된 미션을 입력해주세요",
      });
    } else {
      onAddMissionHandler();
    }
  }, [mission, onAddMissionHandler]);

  return (
    <>
      {clicked ? (
        <InputModal
          set={setMission}
          confirm={bogusCheck}
          cancel={() => onCancelBtnHandler(setClicked)}
          title="목표 생성하기"
          cancelTitle="취소"
          confirmTitle="등록하기"
          placeholder="매일 런닝 30분"
          count={MISSION_ADD_LENGTH}
        />
      ) : (
        <></>
      )}
      {arr.map((_, i) => {
        return list[i] !== undefined ? (
          <AddedMission
            missionContent={list[i].missionContent}
            missionId={list[i].missionId}
            index={list[i]}
            key={i}
          />
        ) : (
          <></>
        );
      })}
      {list?.length < 1 ? (
        <StWrap onClick={onClickedHandler}>
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
      <StMissionBtn>
        <Button
          theme="dark"
          text="새로운 목표 추가하기"
          click={onClickedHandler}
        />
      </StMissionBtn>
    </>
  );
};

export default EmptyMission;

const StWrap = styled.div`
  ${flex({ justify: "flex-start" })}
  width: 345px;
  height: 105px;
  background: #ffffff;
  border: 1px dashed #e0e0e0;
  border-radius: 4px;
  margin-bottom: 8px;
  .innerDiv {
    ${flex({ align: "flex-end" })}
    height: 100%;
    span {
      margin-left: 31px;
      margin-bottom: 24px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #727272;
    }
  }
`;

const StCircle = styled.div`
  ${flex({})}
  width: 66px;
  height: 66px;
  border: 1px solid #d9d9d9;
  border-radius: 94px;
  margin-left: 29px;
`;

const StImg = styled.div`
  width: 22px;
  height: 22px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;
const StMissionBtn = styled.div`
  position: absolute;
  bottom: 10%;
`;
