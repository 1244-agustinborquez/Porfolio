import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome/>,
        cName: 'nav-text'
    },
    {
        title: 'About Me',
        path: '/about',
        icon: <AiIcons.AiOutlineSmile/>,
        cName: 'nav-text'
    },
    {
        title: 'My Resume',
        path: '/education',
        icon: <FaIcons.FaRegEdit/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/work',
        icon: <FaIcons.FaRegFolder/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact Me',
        path: '/Contact',
        icon: <AiIcons.AiOutlineContacts/>,
        cName: 'nav-text'
    },
]