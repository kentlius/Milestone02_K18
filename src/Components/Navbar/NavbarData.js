import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const NavbarData = [
    {
        title: 'Home',
        path : '/',
        icon : <FaIcons.FaHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Chats',
        path : '/chat',
        icon : <IoIcons.IoMdChatboxes/>,
        cName: 'nav-text'
    },
    {
        title: 'Connection',
        path : '/connect',
        icon : <BsIcons.BsPeopleFill/>,
        cName: 'nav-text'
    }
];
