import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/not-found/NotFound";
import Nodes from "./resources/nodes/Nodes";
import Node from "./resources/nodes/node/Node";
import NewNode from "./resources/nodes/new-node/NewNode";
import UpdateNode from "./resources/nodes/update-node/UpdateNode";
import Card from "./resources/nodes/card/Card";
import mockServer from "./mirage/server";

mockServer();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Nodes />} />
          <Route path="nodes" element={<Nodes />}>
            <Route path=":id" element={<Node />}>
              <Route path=":slug" element={<Card />} />
              <Route path="update" element={<UpdateNode />} />
            </Route>
            <Route path="new" element={<NewNode />} />
          </Route>
        </Route>
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
