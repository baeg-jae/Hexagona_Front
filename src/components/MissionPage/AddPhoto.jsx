import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import flex from "components/Common/flex";
import Camera from "assets/img/Camera2.webp";
import styled from "@emotion/styled";
import apis from "shared/api/main";
import JoyrideContainer from "components/Tutorial/JoyrideContainer";
import { missionThree } from "shared/tutorialData";
import { useDispatch } from "react-redux";
import { MissionPhotoModalSuccess } from "redux/modules/modal";
import { StImg } from "components/Common/GlobalStyles";

const addPost = async (payload) => {
  const addedData = await apis.addPost(payload);
  return addedData;
};

const AddPhoto = ({ missionContent, files, missionId }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

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
      dispatch(MissionPhotoModalSuccess(true));
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

  useEffect(() => {
    if (files !== undefined) onCreate();
  }, [files, onCreate]);

  return <></>;
};

export default AddPhoto;

{
  /* <StWrap onClick={onCreate} className="mission_one">
  <div className="innerDiv">
    <span>{missionContent}</span>
    <StImg img={Camera} />
  </div>
  <JoyrideContainer
    run={isShowTutorial}
    setRun={setIsShowTutorial}
    steps={missionThree}
  />
</StWrap>;

const StWrap = styled.div`
  ${flex({ justify: "space-between" })}
  width: 345px;
  height: 105px;
  background: var(--gray-7);
  border-radius: 4px;
  margin-bottom: 8px;
  .innerDiv {
    ${flex({ justify: "space-between" })}
    width: 100%;
    span {
      width: 65%;
      margin-left: 40px;
      font-weight: 600;
      font-size: 24px;
      color: var(--white);
      white-space: pre-wrap;
    }
  }
  @media screen and (max-width: 350px) {
    width: 250px;
    height: 80px;
    span {
      font-size: 16px !important;
    }
  }
  @media screen and (max-height: 700px) {
    height: 80px;
    span {
      color: var(--gray-7);
    }
  }
`; */
}
