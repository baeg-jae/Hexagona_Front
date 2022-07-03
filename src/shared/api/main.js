import api from "./core";

export const apis = {
  // user
  signUp: (payload) => api.put("/user/update/nickname", payload),
  dupCheck: (payload) => api.post("/user/signup/checkEmail", payload),

  // article CRUD
  getTodos: () => api.get("/todos"),
  addTodo: (payload) => api.post("/todos", payload),
  updateTodo: (payload) => api.patch(`/todos/${payload.id}`, payload),
  deleteTodo: (payload) => api.delete(`/todos/${payload.id}`),
};

export default apis;

// 사용법
/*
    1. import 한다
    import apis from "../api/main";

    2. 아래처럼 쓴다
    const addTodo = async (payload) => {
    const addTodoDB = await apis.addTodo(payload);
    return addTodoDB;
    };
*/
