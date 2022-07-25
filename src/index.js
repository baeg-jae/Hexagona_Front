import React from "react";
import ReactDOM from "react-dom/client";
import App from "layouts/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// React-Query
import { QueryClient, QueryClientProvider } from "react-query";
// Redux
import { Provider } from "react-redux";
import store from "redux/configstore";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/serviceworker.js");
  });
}
