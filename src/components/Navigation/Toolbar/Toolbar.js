import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerIcon from '../../HamburgerIcon/HamburgerIcon';

const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <HamburgerIcon click={props.openHamburgerIcon} />
            <Logo />
            <nav className={styles.DesktopOnly} >
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;