import React from "react";
import ReactDOM from "react-dom/client";
import App from "layouts/App";
import { HashRouter } from "react-router-dom";
import "./index.css";
// React-Query
import { QueryClient, QueryClientProvider } from "react-query";
// Redux
import { Provider } from "react-redux";
import store from "redux/configstore";
import ReactPWAInstallProvider from "react-pwa-install";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReactPWAInstallProvider enableLogging>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <App />
        </HashRouter>
      </QueryClientProvider>
    </Provider>
  </ReactPWAInstallProvider>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/serviceworker.js");
  });
}
