import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
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
       this.setState({showSideDrawer: true});
    };

    render() {
        return (
            <Aux>
                <Toolbar toggle={this.openSideDrawer}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.closeSideDrawer}/>
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

// Layout.propTypes = {};

export default Layout;