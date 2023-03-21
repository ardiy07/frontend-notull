import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../stores/contexts/AuthContext';
import { InputForm } from '../../atoms'

const FormRegiter = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');
    const role_id = 2;
    const auth = useAuth();

    const OnSignUp = async(e) => {
        e.preventDefault();
        const { SignUp } = auth;

        await SignUp(name, username, email, role_id, password, confPass);
        console.log(auth)
    }

    return (
        <div className='w-full z-10'>
            <NavLink to="/">
                <span className='self-center flex justify-center mb-4 text-4xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>Notull</span>
            </NavLink>
            <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto">
                <form className="space-y-6" onSubmit={OnSignUp}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Register</h5>
                    {/* <AlertDanger msg={msg} consMsg={msgErr ? 'block' : 'hidden'} />
                <AlertSukses msg={msg} consMsg={msgSuk ? 'block' : 'hidden'} /> */}
                    <InputForm label="Nama Lengkap" name="name" type="text" id="name" placeholder="nama lengkap" value={name} onChange={(e) => setName(e.target.value) }/>
                    <InputForm label="Username" name="username" type="text" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value) }/>
                    <InputForm label="Email" name="email" type="email" id="email" placeholder="email@gmail.com" value={email} onChange={(e) => setEmail(e.target.value) }/>
                    <InputForm label="Password" name="password" type="password" id="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value) }/>
                    <InputForm label="Confirmasi Password" name="confpass" type="password" id="confPass" placeholder="••••••••" value={confPass} onChange={(e) => setConfPass(e.target.value) }/>
                    <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Daftar</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                        Sudah Punya Akun?  <button onClick={() => navigate('/auth/login')} className="text-blue-700 hover:underline dark:text-blue-500">Masuk ke Akun</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormRegiter