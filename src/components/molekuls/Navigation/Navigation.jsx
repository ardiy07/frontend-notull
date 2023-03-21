import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { NavMenu } from '../data'

const Navigation = () => {
    const [openBurger, setOpenBurger] = useState(false);
    const [backNav, setBackNav] = useState(false);
    const [active, setActive] = useState('#home');
    const navigate = useNavigate();

    const bgNav = () => {
        if (window.scrollY >= 50) {
            setBackNav(true);
        } else {
            setBackNav(false);
        }
    }
    window.addEventListener('scroll', bgNav);

    return (
        <header className={`${backNav ? 'bg-[#FEE6F7] sticky top-0 z-50 shadow-md' : 'bg-gradient-to-l from-[#FEE6F7] to-white'}`}>
            <nav className='px-2 py-2.5 sm:px-4'>
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <NavLink to="/" className="flex items-center">
                        <span className="self-center text-3xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Notull</span>
                    </NavLink>
                    <div className="flex md:order-2 ">
                        <button onClick={() => navigate('/auth/login')} className='bg-[#FFB100] text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 hover:bg-[#FFE15D] hover:shadow-md'>Get Started</button>
                        <button onClick={() => setOpenBurger(!openBurger)} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                    <div className={`${openBurger ? 'block' : 'hidden'} w-full items-center justify-between md:order-1 md:flex md:w-auto`} id="navbar-cta">
                        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:text-sm md:font-medium md:dark:bg-gray-900 text-center justify-center">
                            {NavMenu.map((menu, i) => (
                                <li key={i} >
                                    <a href={menu.path} onClick={() => setActive(`${menu.path}`)} className={`block rounded py-2 pl-3 pr-4 ${active === menu.path ? 'md:text-[#FFB100] md:bg-transparent md:p-0 font-semibold bg-[#FFE15D] text-white' : ' md:p-0 md:hover:bg-transparent md:hover:text-[#FFE15D]'}`}>{menu.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation