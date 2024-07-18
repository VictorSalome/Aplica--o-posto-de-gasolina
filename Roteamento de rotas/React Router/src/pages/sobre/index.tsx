import { Link } from "react-router-dom";

export const Sobre = () => {
  return (
    <>
       <h1>Bem vindo a pagina Sobre!</h1>
        <span>essa e a minha primeira pagina com navegação</span>
        <br />

        <Link to={"/"}>Ir para home</Link>
    </>
  );
};
