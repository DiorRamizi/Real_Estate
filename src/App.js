import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Properties from "./components/pages/Properties";
import PropertyDetails from "./components/pages/PropertyDetails";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/properties' element={<Properties />} />
                    <Route path='/properties/:id' element={<PropertyDetails />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
