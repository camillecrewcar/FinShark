import React from 'react'; // Add this import
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
        <Navbar />
        <Outlet></Outlet>
    </>
  );
}

export default App;
