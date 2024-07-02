import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./context/index.js";
import { Provider } from "react-redux";
import "./sass/main.scss";
import "./index.scss";
import "./media.scss";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<span className="loader"></span>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
