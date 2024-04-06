import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from './store'
import { Provider } from 'react-redux';
import { Offline } from "react-detect-offline";
import OfflinePopup from "./components/OfflinePopup.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Offline>
        <OfflinePopup />
      </Offline>
      <App />
    </Provider>
  </React.StrictMode>
);
