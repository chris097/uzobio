import React from 'react'

const Header = () => {
    return (
        <div className='bg-[#0a0a0a] h-[112px]'>
            <header className="text-white flex justify-between items-center max-w-7xl mx-auto h-full">
                <h1 className="text-2xl font-bold">Uzobankz</h1>
                <nav>
                    <ul className="flex space-x-8">
                        <li><a href="/" className="hover:underline text-lg">HOME</a></li>
                        <li><a href="/bio" className="hover:underline text-lg">BIO</a></li>
                        <li><a href="/contact" className="hover:underline text-lg">CONTACT</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;