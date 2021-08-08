import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const NavbarData = [
    {
        title: 'Home',
        path : '/',
        icon : <FaIcons.FaHome/>
    },
    {
        title: 'Chats',
        path : '/chat',
        icon : <IoIcons.IoMdChatboxes/>
    },
    {
        title: 'Connection',
        path : '/connect',
        icon : <BsIcons.BsPeopleFill/>
    }
];
