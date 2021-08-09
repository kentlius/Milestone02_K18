import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import styles from './Navbar.module.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [textSidebar, setTextSidebar] = useState(false);
    const [bars, setBars] = useState(true);
    const [close, setClose] = useState(false);
    const [barClicked, setBarClicked] = useState(false);
    const [closeClicked, setCloseClicked] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);

    const sidebarStatus = sidebar ? `${styles.boxNav} ${styles.active}` : `${styles.boxNav}`;
    const textSidebarStatus = textSidebar ?  `${styles.navbarText} ${styles.fadeIn}` : `${styles.fadeOut} ${styles.hidden}`;
    const firstLoadStatus = firstLoad ? `` : `${styles.tutup}`;

    const initialBar = bars ? styles.bars : styles.hidden;
    const initialClose = close ? styles.close : styles.hidden;

    const barOutAnimation = barClicked ? styles.barOut : '';
    const barInAnimation = closeClicked ? styles.barIn : '';
    const showSidebar = () => {
        setSidebar(!sidebar);
        setTextSidebar(!textSidebar);
        setBars(!bars);
        setClose(!close);
    };

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className={styles.navBtn}>
                <Link to='#' className= { `${barOutAnimation} ${initialBar} ${barInAnimation}` }>
                    <FaIcons.FaBars 
                    onClick={ () =>{
                            setFirstLoad(true);
                            setBarClicked(true);
                            setCloseClicked(false);
                            showSidebar();
                        }
                    }
                    />
                </Link>
                <Link to='#' className={ `${initialClose}` }>
                    <MdIcons.MdClose 
                    onClick={ () => {
                            setFirstLoad(false);
                            setBarClicked(false);
                            setCloseClicked(true);
                            showSidebar();
                        }
                    }
                    />
                </Link>
            </div>
        <nav className= { `${sidebarStatus} ${firstLoadStatus}`} >
            <div className= {styles.navbar}>
                { NavbarData.map((item, index) => {
                    return (
                        <div className= {`${styles.navItems}`}>
                            <Link key={index} to={item.path}>
                                {item.icon}
                                <span className= { textSidebarStatus }>{item.title}</span>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </nav>
    </IconContext.Provider>
    )
}

export default Navbar
