// App.js
import React, { useState, useEffect } from 'react';
import Navbar from '../src/Components/NavBar/Navbar';
import Sidebar from '../src/Components/SideBar/SideBar';
import MovieCard from './Pages/MovieCard/MovieCard';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import TvPreview from './Pages/TvPreview/TvPreview';



const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <MovieCard />
      {/* <MovieDetails /> */}
      {/* <TvPreview /> */}
      <div className="content">
      <Sidebar />
       
      </div>
    </div>
  );
};

export default App;
