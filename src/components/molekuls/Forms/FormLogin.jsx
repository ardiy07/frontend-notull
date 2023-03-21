import React, { useState } from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../stores/contexts/AuthContext'
import { InputForm } from '../../atoms'

const FormLogin = () => {
    const navigate = useNavigate()
    const auth = useAuth()
    const [data, setData] = useState('')
    const [password, setPassword] = useState('')

    const OnSignIn = async (e) => {
        e.preventDefault()
        const { SignIn } = auth
        await SignIn(data, password).then(() => {
            console.log(auth)
        })
    }

    return (
        <div className='w-full z-10'>
            <NavLink to='/'>
                <span className='self-center flex justify-center mb-4 text-4xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>Notull</span>
            </NavLink>
            <div className='bg-white max-w-sm p-6 border-gray-200 rounded-lg shadow sm:p-6 md:p-10 m-auto' >
                <form className="space-y-6" onSubmit={OnSignIn}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Sign in</h5>
                    <InputForm value={data} onChange={(e) => setData(e.target.value)} label="Email or Username" name="data" type="text" id="data" placeholder="Email or Username" required />
                    <InputForm value={password} onChange={(e) => setPassword(e.target.value)} label="Password" name="password" type="password" id="password" placeholder="••••••••" required />
                    <div className="flex items-start">
                        <button onClick={() => navigate("/auth/reset-password")} className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lupa Password?</button>
                    </div>
                    <button disabled={auth.isLoading} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:shadow-md">Masuk</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                        Tidak Punya Akun? <button onClick={() => navigate('/auth/register')} className="text-blue-700 hover:underline dark:text-blue-500">Buat Akun</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormLogin