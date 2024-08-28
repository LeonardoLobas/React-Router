import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Produtos from "./Componentes/Produtos";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Contato from "./Componentes/Contato";
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
            element: <MainRouter />,
            children: [
                { path: "/", element: <Produtos /> },
                { path: "/contato", element: <Contato /> },
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
