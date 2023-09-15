import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import MainView from './components/MainView';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MainView />
      </div>
      <Footer />
    </div>
  );
};

export default App;
