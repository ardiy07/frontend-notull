import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { MenuSidebar } from '../data'

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className={` ${open ? "w-72" : "w-20 "} shadow-lg max-md:hidden bg-cyan-800 h-screen p-5 pt-8 relative duration-300`} >
            <img src={require('../../../assets/icons/sidebar/control.png')} className={`absolute cursor-pointer -right-3 top-20 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)} alt="" />
            <div className="flex gap-x-4 items-center">
                <img alt="" src={require('../../../assets/icons/sidebar/logo.png')} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                />
                <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                    QE
                </h1>
            </div>
            <ul className="pt-6">
                {MenuSidebar.map((Menu, index) => (
                    <button key={index} onClick={() => navigate(`${Menu.path}`)} >
                        <li  className={`flex text-white rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}>
                            <img alt="" src={Menu.icon} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    </button>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar