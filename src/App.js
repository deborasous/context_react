import React, { useState } from "react";
import "./App.css";
import Login from "./components/login";
import SeeObjectContext from "./components/SeeObjectContext";
// import o context
import { AuthContext, useAuth } from "./providers/auth";

function App() {
  // declara e puxa o AuthContext usando o useContext / Usando a desestruturação na declaração user, com {}, é possível pegar somente as propriedades que estão dentro do objeto user
  //Tambem é possível passar styles, criando uma variavel dentro do objeto onde o name está e passadno na tag com style={{ color: user.color }}

  //chama o user e o setUser na desestruturação
  // const { user, setUser } = React.useContext(AuthContext); //RESPONSÁVEL POR TRAZER AS INFORMAÇÕES QUE ESTÃO NO AUTH.JS

  // USANDO HOOK CUSTOMIZADO
  const { user, setUser, bg, sName } = useAuth();

  console.log(user, sName); //retorna um objeto com o nome que está no auth.js
  return (
    <div className="App" style={{ background: bg.background }}>
      <h1>gdsdfghsg</h1>
      {/* o input onChange mostra o que esta sendo digitado em tempo real */}
      {/* onChange={(e) => setUser({ name: e.target.value })} altera a propriedade name do objeto user */}
      <input type="text" onChange={(e) => setUser({ name: e.target.value })} />
      {/* Tudo o que for digitado no input será impresso em tempo real pelo SeeObjectContext*/}
      <SeeObjectContext />
      <Login />
    </div>
  );
}

export default App;
