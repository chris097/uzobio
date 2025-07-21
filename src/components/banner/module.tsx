'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import academy1 from '../../../public/banner.jpg';
import academy2 from '../../../public/banner.jpg';
import academy3 from '../../../public/banner.jpg';
import academy4 from '../../../public/banner.jpg';
import { useRouter } from 'next/navigation';

interface IHerorSectionProps {
    course?: boolean;
    title?: string | boolean;
    description?: string | boolean;
    path?: boolean;
    visible?: boolean
}

const HeroSection = ({
    course,
    title,
    description,
    path,
    visible,
}: IHerorSectionProps) => {
    const router = useRouter();


    return (
        <div className={`bg-[#FFFBF1] h-auto ${path && visible && "lg:pt-1"} ${course ? 'lg:pt-32 md:pt-10 pt-10' : 'pt-10'} lg:pb-0 pb-10`}>
            <div className={`lg:max-w-7xl w-[90%] mx-auto lg:flex md:block block items-center pt-0 pb-14`}>
                <div className='flex-1 font-pro-display text-extremeblack'>
                    {course ? <div>
                        <h1 className='lg:text-[64px] md:text-[36px] text-[28px] font-[700] lg:leading-[76.38px] leading-[33.41px] md:leading-[42.99px]'>Uzobankz biography</h1>
                        <h1 className='lg:text-[63.57px] md:text-[32px] text-[28px] font-[700] lg:leading-[75.86px] md:leading-[38.19px] leading-[33.41px] text-[#F36B23] my-1'>
                        </h1>
                        <h1 className='lg:text-[64px] md:text-[32px] text-[28px] font-[700] lg:leading-[76.38px] md:leading-[38.19px] leading-[33.41px]'></h1>
                    </div> : <h1 className='lg:text-[56px] md:text-[36px] font-clash-display w-[87%] text-[28px] font-[500] lg:leading-[76.38px] md:leading-[42.96px] leading-[33.41px]'>{title}</h1>}
                    {course ? <p className='lg:text-[24px] md:text-[20px] font-[400] font-satoshi md:leading-[40px] leading-[19.09px] tracking-[4%] lg:w-[80%] md:w-[80%] w-[90%] lg:mt-4 mt-4 text-base'>
                        Born on February 17, 1972 in Chattanooga, Tennessee and raised in Clarksville, Arkansas, Ralph Duren May was one of four kids raised by his single mother. At the age of seventeen he won a contest to open for his idol, Sam Kinison. He later moved to Houston to develop his comedy routine, at Kinison’s suggestion.
                    </p>
                        : <p className='lg:text-[24px] md:text-[20px] font-[400] font-satoshi md:leading-[32px] leading-[19.09px] tracking-[4%] lg:w-[80%] md:w-[85%] w-[90%] lg:mt-5 mt-4 text-base text-[#262420]'>{description}</p>}
                    {course ? <button onClick={() => router.push('/bio')} className='bg-[#ea5823] text-white px-4 md:py-5 py-3 lg:mt-12 md:mt-3 mt-3 rounded-[7.95px] font-[700] md:text-[19.87px] text-sm leading-[21.71px] flex gap-3 items-center'>
                        View Bio
                        <svg className='md:w-[15px] md:h-[19px] w-[11.92px] h-[16.64px]' width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M8.40723 1.47471C8.40723 1.27713 8.32874 1.08765 8.18903 0.947941C8.04933 0.808233 7.85984 0.729748 7.66227 0.729748C7.46469 0.729748 7.27521 0.808233 7.1355 0.947941C6.99579 1.08765 6.91731 1.27713 6.91731 1.47471H8.40723ZM6.91731 1.47471L6.91731 17.3672H8.40723L8.40723 1.47471H6.91731Z" fill="white" />
                            <path d="M1.70271 11.4075L7.66239 17.3672L13.6221 11.4075" stroke="white" stroke-width="1.48992" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button> :
                        null}
                </div>
                {course ? <div className='lg:w-[40%] mt-3 h-full'>
                    <div className='flex gap-5'>
                        <div className='gap-5 flex flex-col mt-8'>
                            <div className='lg:w-[90%] md:w-[90%] lg:h-[214.55px]'><Image loading="lazy" src={academy1} className='bg-cover h-full object-cover' alt="academy_1" /></div>
                            <div className='lg:w-full md:w-full md:-mr-10 lg:h-[214.55px]'><Image loading="lazy" src={academy2} className='bg-cover h-full object-cover' alt="academy_1" /></div>
                        </div>
                        <div className='gap-5 flex flex-col'>
                            <div className='lg:w-full md:w-full lg:-ml-5 md:-ml-10 lg:h-[214.55px]'><Image loading="lazy" src={academy3} className='bg-cover h-full object-cover' alt="academy_1" /></div>
                            <div className='lg:w-[90%] md:w-[90%] lg:h-[214.55px]'><Image loading="lazy" src={academy4} className='bg-cover h-full object-cover' alt="academy_1" /></div>
                        </div>
                    </div>
                </div> : null}
            </div>
        </div>
    );
};

export default HeroSection;