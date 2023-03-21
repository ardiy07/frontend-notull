import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HeroCom } from '../data'

const Hero = () => {
    const { title, description, image } = HeroCom;
    const navigate = useNavigate();

    return (
        <>
            <section id="home" className="md:h-screen relative bg-gradient-to-l from-[#FEE6F7] to-white">
                <div className="px-6 mx-auto max-w-6xl">
                    <div className="flex flex-col-reverse justify-center items-center md:flex-row lg:items-end">
                        <div className="pt-20 md:pr-8 pb-24 text-center md:pb-12 md:w-1/2 md:text-left">
                            <h1 className="relative z-10 text-4xl font-bold md:text-5xl font-display md:leading-none">
                                {title}
                            </h1>
                            <p className="md:pt-8 pt-4 text-lg leading-relaxed text-gray-500 md:max-w-md md:text-xl">
                                {description}
                            </p>
                            <div
                                className="flex justify-center items-center md:pt-12 pt-5 space-x-6 md:justify-start">
                                <button onClick={() => navigate('/auth/register')}
                                    className="flex justify-center items-center py-4 px-8 font-bold tracking-wide leading-7 bg-[#FFB100] text-white hover:bg-[#FFE15D] rounded-xl hover:shadow-xl">
                                    Sign up To Notull
                                </button>
                                <button onClick={() => navigate('/auth/login')}
                                    className="hidden md:flex justify-center items-center py-4 px-8 font-bold tracking-wide leading-7 border-[#FFB100] border-2 text-[#FFB100] rounded-xl hover:shadow-xl hover:shadow-[#FFE15D]">
                                    Sign in To Notull
                                </button>

                            </div>
                        </div>
                        <div className="flex items-center -mb-10 justify-center w-1/2 border-b border-gray-400">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero