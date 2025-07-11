import React from 'react';
import { FaDAndD, FaPlus } from 'react-icons/fa';
import CreateGroupIcon from '../button/creategroupbtn';
import CreateGroupButton from '../button/creategroupbtn';
import LogOut from '../button/LogOut';

const Sidebar = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
           <CreateGroupButton key={'create group'}/>
        <LogOut/>
        </div>
    );
};

export default Sidebar;