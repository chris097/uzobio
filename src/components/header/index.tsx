import Link from 'next/link';
import React from 'react'

const Header = () => {
    return (
        <div className='bg-[#0a0a0a] h-[112px]'>
            <header className="text-white flex justify-between items-center max-w-7xl mx-auto h-full">
                <h1 className="text-2xl font-bold">Uzobankz</h1>
                <nav>
                    <ul className="flex space-x-8">
                        <li><Link href="/" className="hover:underline text-lg">HOME</Link></li>
                        <li><Link href="/bio" className="hover:underline text-lg">BIO</Link></li>
                        <li><Link href="/contact" className="hover:underline text-lg">CONTACT</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;