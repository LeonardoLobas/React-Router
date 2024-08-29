import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import Produtos from "./Componentes/Produtos";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Contato from "./Componentes/Contato";
import Produto from "./Componentes/Produto";
import "./index.css";

const App = () => {
    const MainRouter = () => {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        );
    };

    const RouterChildren = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Navigate to={"/home"} />
                </>
            ),
        },
        {
            path: "/home",
            element: <MainRouter />,
            children: [
                { path: "/home/produtos", element: <Produtos /> },
                { path: "/home/contato", element: <Contato /> },
                { path: "/home/produtos/produto/:id", element: <Produto /> },
            ],
        },
    ]);
    return (
        <div>
            <RouterProvider router={RouterChildren} />
        </div>
    );
};

export default App;
