import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "urql";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages/Home";
import User from "./pages/User";
import { client } from "./client";
import { theme } from "./theme";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path=":login" element={<User />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem", textAlign: "center" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
