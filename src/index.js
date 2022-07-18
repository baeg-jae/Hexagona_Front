import React from "react";
import ReactDOM from "react-dom/client";
import App from "layouts/App";
import { BrowserRouter } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import "./index.css";
// React-Query
import { QueryClient, QueryClientProvider } from "react-query";

// Redux
import { Provider } from "react-redux";
import store from "redux/configstore";
import Mobile from "layouts/Mobile";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BrowserView>
          <App />
        </BrowserView>
        <MobileView>
          <Mobile />
        </MobileView>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceworker.js")
      .then((registration) => {})
      .catch((e) => {});
  });
}
