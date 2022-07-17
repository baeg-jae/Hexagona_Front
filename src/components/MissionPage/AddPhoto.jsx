import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback } from "react";
import AlertComponent from "components/Common/AlertComponent";
import flex from "components/Common/flex";
import Camera from "assets/img/Camera.webp";
import styled from "@emotion/styled";
import apis from "shared/api/main";
// import useGetPost from "components/Hooks/useGetPost";

const addPost = async (payload) => {
  const addedData = await apis.addPost(payload);
  return addedData;
};

const AddPhoto = ({ missionContent, files, missionId }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // const { data } = useGetPost();

  const addTodoMutation = useMutation(addPost, {
    onMutate: () => {
      navigate("/");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      AlertComponent({
        icon: "success",
        text: "사진 추가에 성공했습니다.",
      });
      // navigate(`/detail/${data[data?.length - 1]?.postId + 1}`);
      navigate(`/feed`);
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
    <StWrap onClick={onCreate}>
      <div className="innerDiv">
        <span>{missionContent}</span>
        <StImg img={Camera} />
      </div>
    </StWrap>
  );
};

export default AddPhoto;

const StWrap = styled.div`
  ${flex({ justify: "space-between" })}
  width: 345px;
  height: 105px;
  background: #f9f9f9;
  border-radius: 20px;
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
      color: #454545;
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
