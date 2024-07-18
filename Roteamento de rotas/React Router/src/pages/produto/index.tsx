
import { useParams } from "react-router-dom";

export const Produto = () => {
  const { id } = useParams()
  return (
    <>
      <h1>Bem vindo ao produto {id}</h1>
    </>
  );
};
