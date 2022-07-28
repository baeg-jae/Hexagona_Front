import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import AlertComponent from "components/Common/AlertComponent";
import flex from "components/Common/flex";
import Camera from "assets/img/Camera2.webp";
import styled from "@emotion/styled";
import apis from "shared/api/main";
import JoyrideContainer from "components/Tutorial/JoyrideContainer";
import { missionThree } from "shared/tutorialData";

const addPost = async (payload) => {
  const addedData = await apis.addPost(payload);
  return addedData;
};

const AddPhoto = ({ missionContent, files, missionId }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [isShowTutorial, setIsShowTutorial] = useState(false);

  const tutorial = localStorage.getItem("tutorial-photo");

  useEffect(() => {
    if (tutorial === null) {
      setIsShowTutorial(true);
      localStorage.setItem("tutorial-photo", false);
    }
  }, [tutorial]);

  const addTodoMutation = useMutation(addPost, {
    onMutate: () => {
      navigate("/loading");
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("post");
      AlertComponent({
        icon: "success",
        text: "사진 추가에 성공했습니다.",
      });
      navigate(`/feed/${data?.data?.postId}`);
    },
    onError: (e) => {},
  });

  const onCreate = useCallback(() => {
    const formData = new FormData();
    const secondData = {
      postContent: missionContent,
      category: category,
      missionId: missionId,
    };

    formData.append("file", files);
    formData.append(
      "data",
      new Blob([JSON.stringify(secondData)], { type: "application/json" })
    );
    addTodoMutation.mutate(formData);
  }, [addTodoMutation, category, files, missionContent, missionId]);

  return (
    <StWrap onClick={onCreate} className="mission_one">
      <div className="innerDiv">
        <span>{missionContent}</span>
        <StImg img={Camera} />
      </div>
      <JoyrideContainer
        run={isShowTutorial}
        setRun={setIsShowTutorial}
        steps={missionThree}
      />
    </StWrap>
  );
};

export default AddPhoto;

const StWrap = styled.div`
  ${flex({ justify: "space-between" })}
  width: 345px;
  height: 105px;
  background: #454545;
  border-radius: 4px;
  margin-bottom: 8px;
  border: none;
  .innerDiv {
    ${flex({ justify: "space-between" })}
    width: 100%;
    height: 100%;
    span {
      width: 65%;
      margin-left: 40px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      white-space: pre-wrap;
    }
  }
`;
const StImg = styled.div`
  width: 50.33px;
  height: 43.72px;
  margin-right: 19.67px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;
