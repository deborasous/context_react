import React from "react";
import { AuthContext, useAuth } from "../providers/auth";

const SeeObjectContext = () => {
  // acessa o Context, através do useContext passando o Context dentro
  // com o HOOK CURTOMIZADO useAuth(), não precisa mais passar o Context como abaixo, agora passa assim ...  const {user} =useAuth()
  // const { user } = React.useContext(AuthContext);

  //agora o {user.name} trás o valor que está em name do objeto e após começar a digitar no input, o valor do nome some e dá lugar ao novo valor digitado
  const { user, sName } = useAuth();
  return (
    <div>
      {/* Agora tudo o que for digitado no input, será impresso no <p>, chamar esse componente dentro do App.js */}
      <h2>Perfil</h2>
      <p>{user.name}</p>
      <p>{sName.sname}</p>
    </div>
  );
};

export default SeeObjectContext;
