import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createRoot } from 'react-dom/client';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const rootDiv = document.getElementById("root");
const root = createRoot(rootDiv);
root.render(<App />)
