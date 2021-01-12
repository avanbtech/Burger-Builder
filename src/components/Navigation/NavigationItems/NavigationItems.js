import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem active link="/">
                Test 1
            </NavigationItem >
            <NavigationItem link="/">
                Test 2
            </NavigationItem>
            <NavigationItem link="/">
                Test 3
            </NavigationItem>
        </ul>
    );
}

export default navigationItems;