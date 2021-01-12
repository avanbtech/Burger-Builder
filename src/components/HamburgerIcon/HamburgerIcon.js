import React from 'react';
import icon from '../../assets/images/hamburger_icon.png';
import styles from './HamburgerIcon.module.css';

const HamburgerIcon = (props) => {
    return (
        <div className={styles.HamburgerIcon}>
            <img src={icon} alt="hamburger icon" onClick={props.click} />
        </div>
    );
}

export default HamburgerIcon;