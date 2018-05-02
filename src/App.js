import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import KotaBuilder from './containers/KotaBuilder/KotaBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Layout>
          <KotaBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
