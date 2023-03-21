import React from 'react'
import { AboutCom } from '../data'

const About = () => {
    const {image, title, description} = AboutCom;
    return (
        <section id='about'
            className='' >
            <div className='container mx-auto py-10 '>
                <div className='bg-[#f1feff] md:min-h[200px] rounded-[50px] min-h-[200px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
                    <div className='flex-1'>
                        <img src={image} alt='' />
                    </div>
                    <div className='flex-1 xl:pr-12'>
                        <h2 className='h2 font-bold text-2xl mb-10' data-aos='fade-up'>
                            {title}
                        </h2>
                        <p
                            className='max-w-[474px] mx-auto xl:mx-0'
                        >
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About