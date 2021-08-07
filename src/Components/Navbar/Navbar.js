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
    const showSidebar = () => {
        setSidebar(!sidebar);
        setTextSidebar(!textSidebar);
        setBars(!bars);
        setClose(!close);
    };

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className={styles.navBtn}>
                <Link to='#' className= { bars ? styles.bars : styles.hidden }>
                    <FaIcons.FaBars 
                    onClick={
                        showSidebar
                    }
                    />
                </Link>
                <Link to='#' className={ close ? styles.close : styles.hidden}>
                    <MdIcons.MdClose 
                    onClick={
                        showSidebar
                    }
                    />
                </Link>
            </div>
        <nav className= { sidebar ? `${styles.boxNav} ${styles.active}` : `${styles.boxNav} ${styles.inactive}`} >
            <div className= {styles.navbar}>
                { NavbarData.map((item, index) => {
                    return (
                        <div className= {styles.navItems}>
                            <Link key={index} to={item.path}>
                                {item.icon}
                                <span className= { textSidebar ?  `${styles.navbarText} ${styles.fadeIn}` : `${styles.hidden} ${styles.fadeOut}`}>{item.title}</span>
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
