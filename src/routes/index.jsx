import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Template from "../Template";
import Productcategory from "../pages/ProductCategory";

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
                element: <Products />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/categories/:categoryId",
                element: <Productcategory/>
                //path dinamis ditandai dengan titik 2 (:)
            }
        ]
    },
]);