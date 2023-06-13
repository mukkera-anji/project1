import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';
import './App.css'

function App (){
  return (
    <div className="app">
      
      <Navbar />
       <div className="container">
      <div className='side__container'>
      <Sidebar/>
      </div>
      <div className='Middle__container'>
      <Content />
      </div>
        </div>
       
     
    </div>
  );
};

export default App;
