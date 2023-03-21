import React from 'react'
import { CardFeatur } from '../../atoms'
import { Features } from '../data'

const Featurs = () => {
    return (
        <>
            <section id='featurs' className='bg-gradient-b from-white to-[#f1feff]'>
                <div className='container mx-auto my-10'>
                    <div className='text-center'>
                        <h4 className='h2 mb-6 xl:mb-3 font-bold md:text-2xl' >
                            Featurs
                        </h4>
                        <p className='lead max-w-[584px] mx-auto mb-5 xl:mb-20' >
                            Notull memiliki beberapa featurs yang dapat anda akses
                        </p>
                    </div>
                    <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
                        {Features.map((featur, index) => (
                            <CardFeatur key={index} bgImage={featur.bgImage} image={featur.image} title={featur.title} description={featur.description}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featurs