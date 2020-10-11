import React from 'react';
import './component/FontAwesome';

import './App.css';
import TopBar from './container/TopBar/TopBar';
import NavMenu from './container/NavMenu/NavMenu';
import Banner from './container/Banner/Banner';
import HomePageContent from './container/HomePageContent/HomePageContent';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <NavMenu></NavMenu>
      <Banner></Banner>
      <HomePageContent></HomePageContent>
    </div>
  );
}

export default App;
