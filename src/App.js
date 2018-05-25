import React, {Component} from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import KotaBuilder from './containers/KotaBuilder/KotaBuilder';
import {Route, Switch} from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path={"/"} exact component={KotaBuilder}/>
                        <Route path={"/checkout"} component={Checkout}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
