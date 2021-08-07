import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [textSidebar, setTextSidebar] = useState(false);
    const [bars, setBars] = useState(true);
    const [close, setClose] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
        setTextSidebar(!textSidebar);
        setBars(!bars);
        setClose(!close);
    };
    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className='nav-btn'>
                <Link to='#' className= { bars ? 'bars bars-active' : 'hidden'}>
                    <FaIcons.FaBars 
                    onClick={
                        showSidebar 
                    }
                    />
                </Link>
                <Link to='#' className={ close ? 'close' : 'hidden'}>
                    <MdIcons.MdClose 
                    onClick={
                        showSidebar 
                    }
                    />
                </Link>
            </div>
        <nav className= { sidebar ? 'box-nav active' : 'box-nav inactive'} >
            <div className= 'navbar'>
                { NavbarData.map((item, index) => {
                    return (
                        <div className= 'nav-items'>
                            <Link key={index} to={item.path}>
                                {item.icon}
                                <span className= { textSidebar ?  'navbar-text fade-in' : 'hidden fade-out'}>{item.title}</span>
                            </Link>
                        </div>
                    );
                })}
            </div>
            {/* <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars' onClick= {showSidebar}>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    { NavbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}

                </ul>
            </nav> */}
        </nav>
    </IconContext.Provider>
    )
}

export default Navbar
