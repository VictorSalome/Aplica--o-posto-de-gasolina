import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import { Produto } from "./pages/produto";
import { Contato } from "./pages/contato";
import { NotFound } from "./pages/notfound";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/produto/:id",
        element: <Produto />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
