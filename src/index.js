import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./providers/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* AuthProvider será responsável por passar todas as informações do context */}
    {/* Agora importa o AuthContext dentro dos componentes que desejar usando o useContext*/}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
