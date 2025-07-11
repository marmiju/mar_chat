'use client'
import React, { useState } from 'react';
import InputBox from '../components/inputbox/InputBox';
import { LogIn, SignUp } from '../../lib/Authentication';
import { redirect } from 'next/navigation';

const page = () => {
    const [islogin, setIslogin] = useState<boolean>(true)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    // ? authentication

    const authenticated = localStorage.getItem('userinfo')

    if (authenticated) {
        redirect('/chat')
    }


    // !handle Submit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        islogin ? LogIn(formData) : SignUp(formData);
        redirect('/chat')
    }

    // ! handle chenge
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        console.log(formData)
    }

    return (
        <div className='flex flex-col max-w-[90%] mx-auto space-y-10 items-center min-h-screen border justify-center'>
            <h1 className='text-4xl'>{islogin ? 'LogIn Now' : 'SignUp'}</h1>
            <button
                onClick={() => { setIslogin(!islogin) }}
                className=' px-4 py-2 rounded inline-block text-blue-500'>{islogin ? 'create account' : 'log in '}</button>
            {/* form */}
            <form
                className='max-w-[600px] mx-auto space-y-4'
                onSubmit={handleSubmit}>
                <InputBox label='email' type='email' isRequired onChange={handleChange} name='email' value={formData.email} />
                <InputBox label='password' type='password' isRequired onChange={handleChange} name='password' value={formData.password} />
                {
                    islogin || <InputBox label='username' type='text' isRequired onChange={handleChange} name="username" value={formData.username} />
                }
                <button className='text-center border w-full py-1.5 rounded bg-black text-white cursor-pointer' type='submit'>{islogin ? 'LogIn and start' : 'Register'}</button>
            </form>
        </div>
    );
};

export default page;