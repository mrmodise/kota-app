import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class Layout extends Component {

    constructor() {
        super();
        this.state =  {
            showSideDrawer: true
        };
    }

    closeSideDrawer = () => {
        this.setState({showSideDrawer: false});
    };

    openSideDrawer = () => {
       this.setState({showSideDrawer: !this.state.showSideDrawer});
    };

    render() {
        return (
            <Aux>
                <Toolbar toggle={this.openSideDrawer}/>1
                <SideDrawer open={this.state.showSideDrawer} closed={this.closeSideDrawer}/>
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

// Layout.propTypes = {};

export default Layout;