import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
import { Link } from "react-router-dom";

const AllCategory = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="relative z-[5]">
            <div className="flex items-center mt-5 border border-gray-300 justify-end bg-blue-500 h-20 sticky z-[999] top-0">
                <div className="flex flex-1">
                    <div className="flex flex-col items-center mr-10 ml-10">
                        <Link to="/cars">
                            <img
                                src="https://callvcal.com/admin/photos/all.png"
                                alt="all-logo"
                                className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-12 w-12"
                            />
                        </Link>
                        <span className="font-medium text-white">All</span>
                    </div>
                    <div className="flex flex-col items-center mr-10 ">
                        <Link to="/cars">
                            <img
                                src="https://callvcal.com/admin/photos/car.png"
                                alt="car-logo"
                                className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-12 w-12"
                            />
                        </Link>
                        <span className="font-medium text-white">Car</span>
                    </div>
                    <div className="flex flex-col items-center mr-10">
                        <img
                            src="https://callvcal.com/admin/photos/loader.png"
                            alt="car-logo"
                            className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-12 w-12"
                        />
                        <span className="font-medium text-white">GFR Car</span>
                    </div>
                    <div className="flex flex-col items-center mr-10">
                        <Link to="/bikes">
                            <img
                                src="https://callvcal.com/admin/photos/bike.png"
                                alt="bike-logo"
                                className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-12 w-12"
                            />
                        </Link>
                        <span className="font-medium text-white">Bike</span>
                    </div>
                    <div className="flex flex-col items-center mr-10">
                        <img
                            src="https://callvcal.com/admin/photos/boat.png"
                            alt="boat-logo"
                            className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-12 w-12"
                        />
                        <span className="font-medium text-white">Boat</span>
                    </div>
                    <div className="flex flex-col items-center mr-10">
                        <img
                            src="https://callvcal.com/admin/photos/choper.png"
                            alt="plane-logo"
                            className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-12 w-12"
                        />
                        <span className="font-medium text-white">Plane</span>
                    </div>
                    <div className="flex flex-col items-center mr-10">
                        <img
                            src="https://callvcal.com/admin/photos/auto.png"
                            alt="auto-logo"
                            className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-12 w-12"
                        />
                        <span className="font-medium text-white">Auto</span>
                    </div>
                </div>
                <div
                    className="flex items-center justify-center bg-white  transition-colors p-1 cursor-pointer mr-10"
                    onMouseEnter={toggleDropdown}
                >
                    <span className="font-semibold text-black ml-2 mr-2">
                        Categories
                    </span>
                    <Icon icon={ic_keyboard_arrow_down} size={20} />
                </div>
            </div>
            {showDropdown && (
                <div className="absolute top-full right-0 bg-black text-blue-500 py-2 mt-1 mr-2">
                    <div className="container mx-auto flex space-x-4">
                        <div className="flex-1 bg-black w-40">
                            <ul>
                                <li className="py-1 pl-12 font-semibold border-b border-gray-300 cursor-pointer">
                                    All
                                </li>
                                <li className="py-1 pl-12 font-semibold border-b border-gray-300 cursor-pointer">
                                    <Link to="/cars">Car</Link>
                                </li>
                                <li className="py-1 pl-12 font-semibold border-b border-gray-300 cursor-pointer">
                                    GFR Car
                                </li>
                                <li className="py-1 pl-12 font-semibold border-b border-gray-300 cursor-pointer">
                                    <Link to="/bikes">Bike</Link>
                                </li>
                                <li className="py-1 pl-12 font-semibold border-b border-gray-300 cursor-pointer">
                                    Boat
                                </li>
                                <li className="py-1 pl-12 font-semibold border-b border-gray-300 cursor-pointer">
                                    Plane
                                </li>
                                <li className="py-1 pl-12 font-semibold cursor-pointer">
                                    Auto
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllCategory;
