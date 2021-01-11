import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = (props) => {
    return (
        <div onClick={props.cancel} className={styles.Backdrop}></div>
    );
}

export default backdrop;