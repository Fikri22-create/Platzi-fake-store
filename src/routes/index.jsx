import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Template from "../Template";

// membuat variable penampung route, pake export untuk digunakan di file lain
// mendaftarkan routing
export const router = createBrowserRouter([
    {
        path: "/",
        element : <Template />,
        children: [
             {
                path: "/", // url path
                element: <App /> //tampilan
            },
            {
                path: "/products",
                element: <Products /> //tampilan   
            }
        ]
    },
]);