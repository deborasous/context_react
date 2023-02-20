import React, { useState } from "react";
import { useAuth } from "../providers/auth";

const Login = () => {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    name: "",
  });

  // simular uma chamada para a API
  // handleLogin vai no localStorage, pega o user e dá o novo nome Debora para name
  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(input));
    setUser(input); //retorna os dados do user, se atualizar a pagina é mantido o novo valor
  };
  // simular uma chamada para a API

  return (
    <div>
      <input
        type="email"
        onChange={(e) => setInput({ name: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
