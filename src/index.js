import React from "react";
import ReactDOM from "react-dom/client";
import App from "layouts/App";
import "./index.css";

// 상태관리
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "redux/configstore";

// 캐시를 관리하기 위해 QueryClient 인스턴스를 사용
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* useQuery 훅 안에서 QueryClient 인스턴스에 접근할 수 있도록 QueryClientProvider를 컴포넌트 트리 상위에 추가 */}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
