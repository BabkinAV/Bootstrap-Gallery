import React from 'react';
import Header from './components/layout/Header';
import Gallery from './components/layout/Gallery';
import ItemDetails from './components/layout/ItemDetails';
import AboutMe from './components/layout/AboutMe';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path=":itemId" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
