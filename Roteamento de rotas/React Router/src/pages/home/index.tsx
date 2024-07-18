import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <>
        <h1>Bem vindo a pagina home!</h1>
        <span>essa e a minha primeira pagina com navegação</span>
        <br />

        <Link to={"/sobre"}>Sobre</Link> <br />
        <Link to={"/contato"}>Contato</Link>
    </>
  )
}
