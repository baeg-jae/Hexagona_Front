import { useState, useCallback } from "react";
import { useMutation, useQueryClient } from "react-query";
import AlertComponent from "components/Common/AlertComponent";
import apis from "shared/api/main";

const addPost = async (payload) => {
  const addedData = await apis.addPost(payload);
  return addedData;
};

const AddPost = ({ missionId, postContent, category }) => {
  const [files, setFiles] = useState();
  const queryClient = useQueryClient();

  const saveFileImage = (e) => {
    setFiles(e.target.files[0]);
  };

  const addTodoMutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");

      AlertComponent({
        icon: "success",
        text: "사진 추가에 성공했습니다.",
      });
    },
    onError: (e) => {},
  });

  const onCreate = useCallback(() => {
    const formData = new FormData();
    const secondData = {
      postContent: postContent,
      category: category,
      missionId: missionId,
    };

    formData.append("file", files);
    formData.append(
      "data",
      new Blob([JSON.stringify(secondData)], { type: "application/json" })
    );
    addTodoMutation.mutate(formData);
  }, [addTodoMutation, category, files, missionId, postContent]);

  return (
    <div>
      <input type="file" id="file" onChange={saveFileImage} />
      <label for="file">여길 눌러서 추가해주세요</label>
      <button onClick={onCreate}>생성하기</button>
    </div>
  );
};
export default AddPost;
