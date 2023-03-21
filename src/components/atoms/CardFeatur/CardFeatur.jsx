import React from 'react'
import { NavLink } from 'react-router-dom'

const CardFeatur = ({bgImage, image, title, description, ...rest}) => {
    return (
        <>
            <div {...rest}
                className='w-full md:max-w-[530px] md:h-[358px] h-[320] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto'>
                <div className='hidden xl:flex absolute top-0 right-0 -z-10'>
                    <img src={bgImage} alt="" />
                </div>
                <div className='max-w-[120px] xl:mr-7 xl:max-w-[232px]'>
                    <img src={image} alt="" />
                </div>
                <div className='max-w-[220px]'>
                    <h3 className='h3 mb-4 text-center'>{title}</h3>
                    <p className='font-light italic mb-4 text-center'>{description}</p>
                    <div className='flex items-center gap-x-2 group'>
                        <NavLink to="/auth/login" className='font-bold'>Coba Fitur</NavLink>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CardFeatur