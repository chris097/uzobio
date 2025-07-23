import Facebook from '@/svg/Facebook';
import Instagram from '@/svg/Instagram';
import Linkedin from '@/svg/Linkedin';
import Twitter from '@/svg/Twitter';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#121212] border-b-4 border-[#ea5823] pt-9 pb-6">
            <div className="max-w-6xl mx-auto px-4 text-white flex flex-col md:flex-row justify-between gap-8">
                <div className="w-full md:w-1/2">
                    <p className="text-2xl font-bold mb-2">Joe Summer</p>
                    <p className="text-sm text-[#707070] leading-6">
                        Born on February 17, 1972 in Chattanooga, Tennessee and raised in Clarksville, Arkansas, Ralph Duren May was one of four kids raised by his single mother. At the age of seventeen he won a contest to open for his idol, Sam Kinison. He later moved to Houston to develop his comedy routine, at Kinison’s suggestion.
                    </p>

                    <div className="mt-4 flex items-center gap-4 flex-wrap">
                        <Link
                            className="bg-[#232323] p-2 rounded-full"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitter />
                        </Link>
                        <Link
                            className="p-2 rounded-full"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin />
                        </Link>
                        <Link
                            className="p-2 rounded-full"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram />
                        </Link>
                        <Link
                            className="p-2 rounded-full"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Facebook />
                        </Link>
                    </div>

                    <p className="text-sm text-[#707070] text-center md:text-left mt-4">
                        © 2025. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;