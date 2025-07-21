import React, { ReactElement } from 'react';

interface IEventAlbum {
    children: ReactElement
    title: string
}

const BioStore: React.FC<IEventAlbum> = ({ children, title }) => {

    return (
        <div className="xl:w-[1260px] mx-auto">
            {/* <button
                className="text-sm text-[#667185] flex items-center gap-3 mb-5"
                type="button"
                onClick={() => router.back()}
            >
                <span className="border border-slate-200 p-1 rounded">
                    <FaArrowLeft className="text-gray-700" />
                </span>
                Go Back
            </button> */}
            <div className="flex items-center gap-2 md:text-[36px] font-medium font-clash-grotesk leading-[40px]">
                <div className="bg-[#ea5823] md:w-[70px] w-[36px] h-1 rounded-full" />
                <h1>{title}</h1>
            </div>
            {children}
            {/* <WeConnect /> */}
        </div>
    );
};

export default BioStore;