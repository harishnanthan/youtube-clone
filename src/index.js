// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./redux/store";

// css
import "./styles/global.scss";

import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </StrictMode>
);
