'use client'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const LogOut = () => {
    React.useEffect(() => {
        const authenticated = typeof window !== 'undefined' && localStorage.getItem('userinfo');
        if (!authenticated) {
            redirect('/login');
        }
    }, []);

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('userinfo');
        }
    };

    return (
        <Link href={'/login'}>
        <button 
            onClick={handleLogout}
            className='text-red-400 bg-red-200 m-4 text-center cursor-pointer'>
            Log Out
        </button>
        </Link>
    );
};

export default LogOut;