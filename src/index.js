import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
