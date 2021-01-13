import React, { Component } from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideNav: false
    }

    toggleSideNav = () => {
        const toggle = !this.state.showSideNav;
        this.setState({ showSideNav: toggle })
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar openHamburgerIcon={this.toggleSideNav} />
                <SideDrawer closeSideNav={this.toggleSideNav} open={this.state.showSideNav} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;