import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
    return (
        <div className="text-xl font-bold text-blue-600 ml-5">
            <Link to="/">Rental App</Link>
        </div>
    );
};

const Header = () => {
    return (
        <div className="flex items-center justify-between bg-white shadow-lg h-20 sticky z-[999] top-0">
            <Title />
            <div className="nav-items">
                <div className="flex  py-10 justify-end">
                    <button className="p-3  text-base font-bold text-black  hover:bg-blue-300 ">
                        <Link to="/">Home</Link>
                    </button>

                    <button className="p-3 text-base font-bold text-black hover:bg-blue-300 ">
                        <Link to="/about">About Us</Link>
                    </button>

                    <button className="m-3 bg-blue-500  text-white font-semibold py-2 px-4 rounded-md hover:bg-white hover:border-blue-500 hover:text-blue-500 border border-blue-500 transition-colors duration-300">
                        <Link to="/login"> Log In</Link>
                    </button>

                    <button className="m-3 bg-white hover:bg-blue-500 hover:text-white text-blue-500 border border-blue-500 hover:border-transparent font-semibold py-2 px-4 rounded-md">
                        <Link to="/signup"> Sign Up</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
