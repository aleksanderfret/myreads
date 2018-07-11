import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MyReads from './containers/MyReads';
import SearchBook from './components/SearchBook/SearchBook';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={ () => (
          <Layout>
            <MyReads />
          </Layout>
        )}/>
        <Route path='/search' render={ ({history}) => (
          <SearchBook />
        )}/>
      </div>
    );
  }
}

export default App;
