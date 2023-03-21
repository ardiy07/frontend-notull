import React from 'react'
import { FormLogin } from '../../components'
import { FormCom } from '../data'

const Login = () => {
  const {image1, image2} = FormCom;
  return (
    <div className='h-screen overflow-hidden bg-gradient-to-b from-[#FEE6F7] to-white'>
      <div className='h-screen overflow-y-scroll'>
        <div className='flex flex-col justify-center items-center my-10'>
          <FormLogin />
        </div>
      </div>
      <div className='absolut -mt-96 hidden md:flex'>
        <div className='flex justify-start'>
          <img src={image1} alt="" />
        </div>
        <div className='flex justify-end w-screen'>
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login