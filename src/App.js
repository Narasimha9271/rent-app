import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/LogIn";
import Signup from "./components/SignUp";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import AllCategory from "./components/AllCategory";
import Cars from "./components/Cars";
import Bikes from "./components/Bike";

const App = () => {
    return (
        <>
            <Header />
            <AllCategory />
            <Outlet />
            <Footer />
        </>
    );
};

const appRouter = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/cars",
                element: <Cars />,
            },
            {
                path: "/bikes",
                element: <Bikes />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
