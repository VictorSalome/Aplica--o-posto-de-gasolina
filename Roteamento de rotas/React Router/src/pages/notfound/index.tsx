import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>Ops essa pagina não existe 😥!!</h1>
      <Link to={"/"}>Voltar para a home</Link>

    </div>
  );
};
