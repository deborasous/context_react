import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  // COM USESTATE => usando o useState passando as propriedades do objeto user em vez de usar o objeto user
  const [user, setUser] = useState({
    name: "Deb",
  });

  const [sName, setSName] = useState({
    sname: "Sousa",
  });

  const [bg, setBg] = useState({
    background: "#cdce",
  });
  // COM USESTATE =>

  // COM CHAMADA DE APIS OU SETAR UM ESTADO INICIAL
  //useEffect, buscando o user do localStorage
  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    //se o userStorage existir, seta o userStorage
    if (userStorage) {
      //porém, no localStorage é uma string, precisa transformar essa string em JSON usando o parse / mesmo que o valor de name:'Debora' esteja declarado no objeto, se não ouver o user no localStorage, não vai aparecer no navegador
      setUser(JSON.parse(userStorage));
    } else {
      setUser({ name: "" });
    }
  }, []);

  // COM CHAMADA DE APIS OU SETAR UM ESTADO INICIAL

  // COM OBJETO

  // const user = {
  //   name: "Debora",
  //   color: "red",
  // };

  // COM OBJETO

  return (
    // passa o user e o setUser dentro do value para que o component App possa acessar as informações
    <AuthContext.Provider value={{ user, setUser, bg, setBg, sName, setSName }}>
      {props.children}
    </AuthContext.Provider>
  );
};
//agora passa o AuthProvider em volta do <App/> dentro do index.js

//CRIANDO HOOK CURTOMIZADO
// assim em vez de importar assim const { user } = React.useContext(AuthContext); dentro do componente, importa assim ... const { user } = useAuth();
export const useAuth = () => React.useContext(AuthContext);
