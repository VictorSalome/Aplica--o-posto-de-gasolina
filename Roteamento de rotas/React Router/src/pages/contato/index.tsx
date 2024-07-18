import { Link } from "react-router-dom";

export const Contato = () => {
  return (
    <>
      <h1>Bem vindo a pagina contatos!</h1>
      <h3>Telefone: (xx) xxxxx-xxxx</h3>
      <hr />
      <Link to={"/sobre"}>Sobre</Link> <br />
      <Link to={"/"}>Ir para Home</Link>
    </>
  );
};
