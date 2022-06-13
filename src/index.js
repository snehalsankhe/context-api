import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Layout } from "./components/Layout";
import reportWebVitals from "./reportWebVitals";
import Routing from "./routing/Routing";
import ThemeContextProvider from "./context/ThemeContext";
import { AuthProvider } from './context/auth'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
    <Layout>
      <AuthProvider>
        <Routing>
          <App />
        </Routing>
      </AuthProvider>
    </Layout>

    </ThemeContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();