import React from 'react';
import styles from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {

    const styleClass = props.open ? [styles.SideDrawer, styles.Open].join(' ') :
        [styles.SideDrawer, styles.Close].join(' ');

    return (
        <React.Fragment>
            {props.open ? <Backdrop cancel={props.closeSideNav} /> : null};
            <div className={styleClass}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
}

export default sideDrawer;