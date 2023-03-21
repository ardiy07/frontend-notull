import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { InputForm } from '../../atoms'

const FormSetPassword = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full z-10'>
            <NavLink to="#">
                <span className='self-center flex justify-center mb-4 text-4xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>Notull</span>
            </NavLink>
            <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto">
                <form className="space-y-6">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Reset Password</h5>
                    {/* <AlertDanger msg={msg} consMsg={msgErr ? 'block' : 'hidden'} />
                <AlertSukses msg={msg} consMsg={msgSuk ? 'block' : 'hidden'} /> */}
                    <InputForm label="Password" name="password" type="password" id="password" placeholder="••••••••" />
                    <InputForm label="Confirmasi Password" name="confpass" type="password" id="confPass" placeholder="••••••••" />
                    <button className="w-full hover:shadow-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset Password</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                        <button onClick={() => navigate('/auth/login')} className="text-blue-700 hover:underline dark:text-blue-500">Masuk ke Akun</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormSetPassword