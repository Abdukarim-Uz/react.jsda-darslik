import { Outlet, type RouteObject } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/home/Home"))

const Products = lazy(() => import("../pages/products/Products"))

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Outlet />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            }
        ]
    },
    {
        path: "*",
        element: <Home />
    }
]



