import api from './core';

export const apis = {
    // user
    getUser: () => api.get('/user/auth'),
    signUp: (payload) => api.put('/user/update/nickname', payload),
    dupCheck: (payload) => api.post('/user/signup/checkNickname', payload),
    newOldUser: () => api.put('/user/update/isNewUser'),
    updateUserNickname: (payload) => api.put('/user/update/nickname', payload),
    updateUserProfile: (payload) => api.put('/api/mypage/changeProfile', payload),

    // mission CRUD
    getTodos: () => api.get('/api/category/missions'),
    addTodo: (payload) => api.post('api/category/missions', payload),
    updateTodo: (payload) => api.put(`/api/category/missions/${payload.missionId}`, payload),
    completedTodo: (payload) => api.put(`/api/missions/changeMissionState/${payload.missionId}`, {}),
    deleteTodo: (payload) => api.delete(`/api/category/missions/${payload.missionId}`),

    // post CRUD
    // getPost: () => api.get("/api/posts"),
    getPosts: (pageParam) => api.get(`/api/posts?page=${pageParam}&size=6&sortBy=postId&isAsc=false`),
    getMyPost: () => api.get('/api/posts/mypost'),
    getPostDetail: (payload) => api.get(`/api/post/${payload.postId}`, payload),
    addPost: (payload) => api.post('/api/post', payload),
    deletePost: (payload) => api.delete(`/api/post/${payload.postId}`),

    // comment CRUD
    getComment: (payload) => api.get(`/api/post/${payload.postId}/comment`),
    addComment: (payload) => api.post(`/api/post/${payload.postId}/comment`, payload),
    updateComment: (payload) => api.patch(`/api/post/${payload.postId}/comment/${payload.commentId}`, payload),
    deleteComment: (payload) => api.delete(`/api/post/${payload.postId}/comment/${payload.commentId}`),

    // like CRUD
    getAllLikes: (payload) => api.get(`/api/post/${payload.postId}/likeUser`),
    getIfLiked: (payload) => api.get(`/api/post/${payload.postId}/isLiked`),
    addLike: (payload) => api.post(`/api/post/${payload.postId}/like`, {}),
    addDislike: (payload) => api.post(`/api/post/${payload.postId}/dontLike`, {}),

    // goal shot
    getGoalShot: () => api.get('/api/posts/goalShot'),

    //chat
    getChatListSetting: (payload) => api.get(`/chat/room/${payload.userId}`),
    getChatSetting: (payload) => api.get(`/chat/roomlist/${payload.userId}/chatRoom/${payload.chatRoomId}`),
    createChatRoom: (payload) => api.post('/chat/room', payload),
};

export default apis;
