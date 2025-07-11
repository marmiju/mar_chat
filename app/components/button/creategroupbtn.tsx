'use client'

import { FaPlus } from "react-icons/fa6";


const CreateGroupButton = () => {
    const authenticated = localStorage.getItem('userinfo') || null
        ? JSON.parse(localStorage.getItem('userinfo')!)
        : null;

    console.log(authenticated)
    return (
        <button><FaPlus/></button>
    );
};

export default CreateGroupButton;