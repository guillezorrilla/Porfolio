import React from 'react';
import SideBar from './components/SideBar'
import Home from './components/Home'
import './App.scss';
import About from './components/About';

function App() {
  return (
    <div className="container-fluid App">
    <button className="sidebar-button"><i className='fa fa-chevron-right' /></button>
      <SideBar />
      <div>
      <Home />
      <About />
      </div>
    </div>
  );
}

export default App;
