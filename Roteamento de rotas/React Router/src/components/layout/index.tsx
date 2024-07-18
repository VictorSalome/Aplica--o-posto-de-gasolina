import { Outlet } from "react-router-dom";
import { Header } from "../header";

export const Layout = () => {
  return (
    <>
    <Header/>
      <Outlet />
      <br /> <br />
      <footer>
        <span>Todos os direitos reservado @2024</span>
      </footer>
    </>
  );
};
