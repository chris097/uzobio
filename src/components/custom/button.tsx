import React from 'react';

interface IButtonProps {
    name: string;
    long?: boolean;
    extraClassname?: string;
    handleButton?: () => void;
    isDisabled?: boolean;
    type?: 'button' | 'submit';
    icon?: React.ReactNode
}


const Button = ({
    name,
    icon,
    long = false,
    extraClassname,
    handleButton,
    isDisabled = false,
    type = "button"
}: IButtonProps) => {
    return (
        <button type={type} disabled={isDisabled} onClick={handleButton} className={`bg-[#ea5823] disabled:opacity-65 disabled:cursor-not-allowed hover:opacity-85 font-[600] lg:text-base text-sm whitespace-nowrap items-center flex justify-center cursor-pointer leading-[24px] font-inter text-black shadow-[#1018280D] gap-5 text-center rounded-[48px] ${long ? "w-full" : 'lg:w-[201px] w-[143px]'} lg:h-[56px] h-12 ${extraClassname}`}>
            {icon && <div>{icon}</div>}
            <div>{name}</div>
        </button>
    );
};

export default Button;