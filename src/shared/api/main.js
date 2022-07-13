import api from "./core";

export const apis = {
  // user
  signUp: (payload) => api.put("/user/update/nickname", payload),
  dupCheck: (payload) => api.post("/user/signup/checkNickname", payload),
  newOldUser: () => api.put("/user/update/isNewUser"),

  getUser: () => api.get("/user/auth"),
  updateUserNickname: (payload) => api.put("/user/update/nickname", payload),
  updateUserProfile: (payload) => api.put("/user/update/profile", payload),

  // mission CRUD
  getTodos: () => api.get("/api/category/missions"),
  addTodo: (payload) => api.post("api/category/missions", payload),
  updateTodo: (payload) =>
    api.put(`/api/missions/${payload.missionId}`, payload),
  completedTodo: (payload) =>
    api.put(`/api/missions/changeMissionState/${payload.missionId}`, {}),
  deleteTodo: (payload) => api.delete(`/api/missions/${payload.missionId}`),

  // post CRUD
  addPost: (payload) => api.post("/api/post", payload),
  getPost: () => api.get("/api/posts"),
  getPostDetail: (payload) => api.get(`/api/post/${payload.postId}`, payload),
  deletePost: (payload) => api.delete(`/api/post/${payload.postId}`, payload),

  // comment CRUD
  getComment: (payload) => api.get(`/api/post/${payload.postId}/comment`),
  addComment: (payload) =>
    api.post(`/api/post/${payload.postId}/comment`, payload),
  updateComment: (payload) =>
    api.patch(
      `/api/post/${payload.postId}/comment/${payload.commentId}`,
      payload
    ),
  deleteComment: (payload) =>
    api.delete(`/api/post/${payload.postId}/comment/${payload.commentId}`),

  // like CRUD
  addLike: (payload) => api.post(`/api/post/${payload.postId}/like`, {}),
  getAllLikes: (payload) => api.get(`/api/post/${payload.postId}/likeUser`),
};

export default apis;
