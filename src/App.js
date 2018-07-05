import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import MyReads from './containers/MyReads';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <MyReads />
        </Layout>
      </div>
    );
  }
}

export default App;
