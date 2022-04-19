import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ItemDetails from './components/ItemDetails';
import AboutMe from './components/AboutMe';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path=":itemId" element={<ItemDetails />} />
        {/* <ItemDetails/> */}
        {/* <Gallery/> */}
      </Routes>
    </div>
  );
}

export default App;
