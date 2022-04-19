import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ItemDetails from './components/ItemDetails';
import AboutMe from './components/AboutMe';



function App() {
  return (
    <div className="App">
     <Header/>
     {/* <AboutMe/> */}
     {/* <ItemDetails/> */}
     <Gallery/>
    </div>
  );
}

export default App;
