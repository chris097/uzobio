import Facebook from '@/svg/Facebook';
import Instagram from '@/svg/Instagram';
import Linkedin from '@/svg/Linkedin';
import Twitter from '@/svg/Twitter';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#121212] h-[270px] border-b-4 border-[#ea5823] pt-9'>
            <div className='max-w-6xl mx-auto h-full text-white flex justify-between'>
                <div>
                    <p className='text-white text-2xl font-bold'>Uzobankz</p>
                    <p className='text-sm text-[#707070] leading-6 w-1/2'>Born on February 17, 1972 in Chattanooga, Tennessee and raised in Clarksville, Arkansas, Ralph Duren May was one of four kids raised by his single mother. At the age of seventeen he won a contest to open for his idol, Sam Kinison. He later moved to Houston to develop his comedy routine, at Kinison’s suggestion.</p>
                    <div className="mt-4 flex items-center gap-6">
                        <Link
                            className="bg-[#232323] rounded-full "
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitter />
                        </Link>
                        <Link
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin />
                        </Link>
                        {/* <Link href='https://discord.gg/ppUKfwEMrz' target='_blank' rel='noopener noreferrer'><Discord /></Link> */}
                        <Link
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram />
                        </Link>
                        <Link
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Facebook />
                        </Link>
                    </div>
                    <p className='text-sm text-[#707070] leading-6 text-center mt-2'>Copyright © 2025. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;