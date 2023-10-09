import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { GiFoodTruck } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { HiDatabase } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from 'react-icons/bs';

const Sidebar = (props) => {

    const {showSideBar} = props;

    return (
        <div className={`bg-[#0e1111] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between rounded-tl-xl rounded-br-xl z-50 transition-all ${showSideBar ? "left-0" : "-left-full"}`}
        >
            <ul className="pl-4 space-y-5">
                <Link to="/" className="brand"><img src={logo} alt="" className="w-full mt-10 mb-10 " /></Link>
                <li className="bg-[#414a4c] p-4 rounded-tl-xl rounded-bl-xl"><Link to="/" className="text-[#ec7c6a] p-4 flex justify-center w-full bg-[#ec7c6a]rounded-xl">
                    <HiHome className="text-3xl" />
                </Link>
                </li>
                <li className="hover:bg-[#414a4c] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <Link to="/" className="group-hover:bg-[#ec7c6a] text-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-xl transition-colors rounded-xl">
                        <HiDatabase className="text-5xl" />
                    </Link>
                </li>
                <li className="hover:bg-[#414a4c] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <Link to="/" className="group-hover:bg-[#ec7c6a] text-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-xl transition-colors rounded-xl">
                        <GiFoodTruck className="text-5xl" />
                    </Link>
                </li>
                <li className="hover:bg-[#414a4c] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <Link to="/" className="group-hover:bg-[#ec7c6a] text-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-xl transition-colors rounded-xl">
                        <BsPhone className="text-5xl" />
                    </Link>
                </li>
            </ul>
            <div className="w-full flex justify-center mb-5">
                <ul>
                    <li className="p-4">
                        <Link to="/" className="">
                            <BsInstagram className="text-4xl flex text-gray-400 hover:text-[#ec7c6a]" />
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link to="/" className="">
                            <BsFacebook className="text-4xl flex text-gray-400 hover:text-[#ec7c6a]" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;