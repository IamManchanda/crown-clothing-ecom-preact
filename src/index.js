import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./pages/app";

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root"),
);
