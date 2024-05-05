import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Home/Homepage';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import Home from './components/Components/Home';
import Footer from './components/Components/Footer';
import Works from './components/Components/Works';
import Search from './components/psearch/Search';
import Hsearch from './components/Hsearch/Hsearch';
import Rsearch from './components/Rsearch/Rsearch';
import MapView from './components/map/MapView';
import Nav2 from './components/Components/Nav2';

import Searchbar from './components/Components/Searchbar'; // Import the Searchbar component
import SearchResultPage from './components/Components/SearchResultPage'; // Import the SearchResultPage component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/Nav" element={<Nav2 />} />
          <Route path="/work" element={<Works />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Hsearch" element={<Hsearch />} />
          <Route path="/Rsearch" element={<Rsearch />} />
          <Route path="/map" element={<MapView />} />

          {/* Add the search routes */}
          <Route path="/" element={<Searchbar />} />
          <Route path="/search-results/:searchTerm" element={<SearchResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
