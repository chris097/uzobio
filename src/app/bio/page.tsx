import BioStore from '@/components/custom/bio';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

const Bio = () => {
    const box_container = "lg:w-[162.64px] lg:h-[162.64px] w-[94px] h-[94px]";
    const box_col_4 = "lg:w-[160.91px] w-[94px] h-[94px] lg:h-[162.64px]";
    const img_container =
        "w-full h-full object-cover rounded-[16px] md:rounded-[27.68px] bg-cover bg-no-repeat";
    return (
        <>
            <Head>
                <title>Joe Summer</title>
                <meta name="description" content="bio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="noindex, nofollow" />
                <link
                    href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,700,400,600,300,500&display=swap"
                    rel="stylesheet"
                ></link>
                {/* <link rel="icon" href="/logo-yabacon.png" /> */}
            </Head>
            <>
                <main className="relative overflow-x-hidden">
                    <Header />
                    <div className="w-[90%] max-w-[1440px] mx-auto md:pt-16 pb-10 pt-12">
                        <BioStore title="Uzobanks bio">
                            <div className="md:flex gap-5 mt-10 md:px-5 xl:w-[1260px] w-full justify-center mx-auto">
                                <div className="flex-1">
                                    {/* section 1 */}
                                    <div className="flex md:gap-5 gap-3 lg:h-[525.98px] sm:h-[304px] h-auto">
                                        <div>
                                            <div className="flex md:gap-5 gap-3">
                                                <div className={`${box_container}`}>
                                                    <Image
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                        width='100'
                                                        height='100'
                                                        loading="lazy"
                                                        className={`${img_container}`}
                                                        src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                        alt="album 1"
                                                    />
                                                </div>
                                                <div className={`${box_container}`}>
                                                    <Image
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                        width='100'
                                                        height='100'
                                                        loading="lazy"
                                                        className={`${img_container}`}
                                                        src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                        alt="album 1"
                                                    />
                                                </div>
                                            </div>
                                            <div className="md:w-full flex justify-center items-center md:mt-5 mt-3 lg:h-[340.85px] w-[202px] h-[197px]">
                                                <Image
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                    width='100'
                                                    height='100'
                                                    loading="lazy"
                                                    className={`${img_container}`}
                                                    src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    alt="album 1"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:hidden block">
                                            <div className="sm:w-[130px] w-full h-[140px]">
                                                <Image
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                    width='100'
                                                    height='100'
                                                    loading="lazy"
                                                    className="lg:w-full md:w-[312px] h-full object-center rounded-[16px] md:rounded-[27.68px] bg-center"
                                                    src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    alt="album 1"
                                                />
                                            </div>
                                            <div className="sm:w-[130px] w-full mt-3 h-[150px]">
                                                <Image
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                    width='100'
                                                    height='100'
                                                    loading="lazy"
                                                    className="w-full h-full object-cover rounded-[16px] md:rounded-[27.68px] bg-cover"
                                                    src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    alt="album 1"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full h-full sm:flex justify-center hidden items-center">
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="lg:w-full md:w-[312px] h-full object-fill rounded-[27.68px] bg-center"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt="album 1"
                                            />
                                        </div>
                                    </div>
                                    {/* section 2 */}
                                    <div className="flex md:gap-5 gap-3 md:mt-5 mt-3">
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt="album 1"
                                            />
                                        </div>
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt="album 1"
                                            />
                                        </div>
                                        <div className="lg:w-[160.91px] sm:w-[94px] w-[125px] h-[94px] lg:h-[162.64px]">
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover md:rounded-[27.68px] rounded-[16px] bg-cover bg-no-repeat"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt="album 1"
                                            />
                                        </div>
                                        <div className={`${box_col_4} sm:block hidden`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover bg-no-repeat"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt="album 1"
                                            />
                                        </div>
                                        <div className={`${box_col_4} sm:block hidden`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover bg-no-repeat"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt="album 1"
                                            />
                                        </div>
                                    </div>
                                    {/* section 3 */}
                                    <div className="flex md:gap-5 gap-3 w-full">
                                        <div className="md:mt-5 mt-3">
                                            <div className="lg:w-[160.91px] md:w-[94px] md:h-[94px] lg:h-[162.64px]">
                                                <Image
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                    width='100'
                                                    height='100'
                                                    loading="lazy"
                                                    className={`${img_container}`}
                                                    src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    alt="album 1"
                                                />
                                            </div>
                                            <div className="lg:w-[160.91px] md:w-[94px] md:h-[94px] lg:h-[162.64px] mt-5">
                                                <Image
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                    width='100'
                                                    height='100'
                                                    loading="lazy"
                                                    className={`${img_container}`}
                                                    src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                />
                                            </div>
                                        </div>
                                        <div className="lg:w-full md:w-[202px] md:h-[201px] md:mt-5 mt-3 lg:h-[347.77px] flex justify-center items-center">
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className="lg:w-full md:w-[202px] md:h-[201px] sm:block hidden mt-5 lg:h-[347.77px]">
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover bg-no-repeat"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                    </div>
                                    {/* section 4 */}
                                    <div className="flex md:gap-5 gap-3 md:mt-5 mt-3">
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className="lg:w-[160.91px] sm:w-[94px] w-[125px] h-[94px] lg:h-[162.64px]">
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4} sm:block hidden`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4} sm:block hidden`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover bg-no-repeat"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                    </div>
                                    {/* section 5 */}
                                    <div className="flex md:gap-5 gap-3 md:mt-5 mt-3">
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className="lg:w-[160.91px] sm:w-[94px] w-[125px] h-[94px] lg:h-[162.64px]">
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4} sm:block hidden`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[16px] md:rounded-[27.68px]  bg-cover bg-no-repeat"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4} sm:block hidden`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                    </div>
                                    {/* section 6 */}
                                    <div className="flex md:gap-5 gap-3">
                                        <div className="flex sm:flex-col flex-col-reverse">
                                            <div className="lg:w-full w-[202px] h-[201px] md:mt-5 mt-3 lg:h-[347.77px] flex justify-center items-center">
                                                <Image
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                    width='100'
                                                    height='100'
                                                    loading="lazy"
                                                    className={`${img_container}`}
                                                    src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                />
                                            </div>
                                            <div className="flex md:gap-5 gap-3 md:mt-5 mt-3">
                                                <div className={`${box_col_4}`}>
                                                    <Image
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                        width='100'
                                                        height='100'
                                                        loading="lazy"
                                                        className={`${img_container}`}
                                                        src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                        alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    />
                                                </div>
                                                <div className={`${box_col_4}`}>
                                                    <Image
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                        width='100'
                                                        height='100'
                                                        loading="lazy"
                                                        className={`${img_container}`}
                                                        src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                        alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:block sm:flex gap-3">
                                            <div className="sm:flex md:flex-row sm:flex-col hidden flex-row md:gap-5 gap-3 ml-1 mt-5">
                                                <div className={`${box_col_4}`}>
                                                    <Image
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                        width='100'
                                                        height='100'
                                                        loading="lazy"
                                                        className={`${img_container}`}
                                                        src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                        alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    />
                                                </div>
                                                <div className={`${box_col_4}`}>
                                                    <Image
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                        width='100'
                                                        height='100'
                                                        loading="lazy"
                                                        className={`${img_container}`}
                                                        src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                        alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    />
                                                </div>
                                                <div className={`${box_col_4}`}>
                                                    <Image
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                        width='100'
                                                        height='100'
                                                        loading="lazy"
                                                        className={`${img_container}`}
                                                        src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                        alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex md:gap-5 gap-3">
                                                <div className="w-full mt-5 lg:h-[347.77px] hidden md:h-[214px] md:flex justify-center items-center">
                                                    <Image
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                        width='100'
                                                        height='100'
                                                        loading="lazy"
                                                        className="w-full h-full object-cover rounded-[27.68px] bg-cover bg-no-repeat"
                                                        src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                        alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    />
                                                </div>
                                                <div className="md:mt-5 mt-3">
                                                    <div className="lg:w-[160.91px] md:w-[94px] w-full md:h-[94px] h-[148px] lg:h-[162.64px]">
                                                        <Image
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                            }}
                                                            width='100'
                                                            height='100'
                                                            loading="lazy"
                                                            className={`${img_container}`}
                                                            src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                            alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                        />
                                                    </div>
                                                    <div className="lg:w-[160.91px] md:w-[94px] sm:w-[161.91px] w-full md:h-[94px] md:mt-5 mt-3 h-[148px] lg:h-[162.64px]">
                                                        <Image
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                            }}
                                                            width='100'
                                                            height='100'
                                                            loading="lazy"
                                                            className={`${img_container}`}
                                                            src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                            alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* mobile */}
                                <div className="md:hidden block">
                                    <div className="flex md:gap-5 gap-3 md:mt-5 mt-3">
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className="lg:w-[160.91px] sm:w-[94px] w-[125px] h-[94px] lg:h-[162.64px]">
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4} sm:block hidden`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4} sm:block hidden`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                    </div>
                                    <div className="flex md:gap-5 gap-3 w-full">
                                        <div className="md:mt-5 mt-3">
                                            <div className="lg:w-[160.91px] md:w-[94px] md:h-[94px] lg:h-[162.64px]">
                                                <Image
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                    width='100'
                                                    height='100'
                                                    loading="lazy"
                                                    className={`${img_container}`}
                                                    src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg' alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                />
                                            </div>
                                            <div className="lg:w-[160.91px] md:w-[94px] md:h-[94px] lg:h-[162.64px] mt-5">
                                                <Image
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                    width='100'
                                                    height='100'
                                                    loading="lazy"
                                                    className={`${img_container}`}
                                                    src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                    alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                />
                                            </div>
                                        </div>
                                        <div className="lg:w-full md:w-[202px] md:h-[201px] md:mt-5 mt-3 lg:h-[347.77px] flex justify-center items-center">
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className="lg:w-full md:w-[202px] md:h-[201px] sm:block hidden mt-5 lg:h-[347.77px]">
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                    </div>
                                    <div className="flex md:gap-5 gap-3 md:mt-5 mt-3">
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className="lg:w-[160.91px] sm:w-[94px] w-[125px] h-[94px] lg:h-[162.64px]">
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4} sm:block hidden`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4} sm:block hidden`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className={`${img_container}`}
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[348px] md:block hidden">
                                    <div className="lg:w-full md:w-[203px] lg:h-[340.85px] md:h-[197px] flex justify-center items-center">
                                        <Image
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                            width='100'
                                            height='100'
                                            loading="lazy"
                                            className="w-full h-full object-cover rounded-[27.68px] bg-cover bg-no-repeat"
                                            src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                        />
                                    </div>
                                    <div className="lg:w-full lg:h-[533.29px] md:w-[203px] md:h-[314px] mt-5">
                                        <Image
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                            width='100'
                                            height='100'
                                            loading="lazy"
                                            className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                            src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                        />
                                    </div>
                                    <div className="flex gap-5 mt-5">
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-5 mt-5">
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-5 mt-5">
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-5 mt-5">
                                        <div className={`${box_col_4} border rounded-[27.68px]`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4} border rounded-[27.68px]`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-5 mt-5">
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-5 mt-5">
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                            />
                                        </div>
                                        <div className={`${box_col_4}`}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                                width='100'
                                                height='100'
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-[27.68px] bg-cover"
                                                src='https://static.wixstatic.com/media/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg/v1/fill/w_1728,h_920,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/28bcc0_9585489c66074a51858f6cff40df9b80~mv2_d_2400_1987_s_2.jpg'
                                                alt="album 1"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BioStore>
                    </div>

                    <Footer />
                </main>
            </>
        </>
    );
};

export default Bio;