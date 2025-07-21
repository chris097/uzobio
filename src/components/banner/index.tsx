import Image from 'next/image';
import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className='w-full h-[460px] flex'>
                <div className='bg-[#ea5823] w-[40%] flex justify-center items-center'>
                    <div className='border-white opacity-75 border-2 h-[192px] w-[60%] flex justify-center items-center'>
                        <h1 className='text-[70px] text-white'>BIO</h1>
                    </div>
                </div>
                <div className='flex-1'>
                    <Image
                        width='100'
                        height='100'
                        src="https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg"
                        alt=''
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner