import React, { useState } from "react";
import apis from "shared/api/main";
import { useMutation, useQueryClient } from "react-query";

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
      alert("사진 추가에 성공했습니다");
    },
    onError: (e) => {
      alert("사진추가 에러: " + e);
    },
  });

  const onCreate = () => {
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
  };

  return (
    <div>
      <input type="file" id="file" onChange={saveFileImage} />
      <label for="file">여길 눌러서 추가해주세요</label>
      <button onClick={onCreate}>생성하기</button>
    </div>
  );
};
export default AddPost;
