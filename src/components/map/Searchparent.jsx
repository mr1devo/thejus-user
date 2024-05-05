import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Hdata from '../Hsearch/Hdata'; // Import the Hdata component to get hotel data
import Data from '../psearch/Data'; // Import the Data component to get place data
import Rdata from '../Rsearch/Rdata'; // Import the Rdata component to get restaurant data
import MapView from './MapView'; // Import the MapView component

const Searchparent = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [notFoundMessage, setNotFoundMessage] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = (location) => {
    setSearchResult(location);
  };

  const handleNotFound = () => {
    setNotFoundMessage('Location not found');
  };

  const handleLocationSelected = (location) => {
    setSelectedLocation(location);
  };

  // Fetch data for places, restaurants, and hotels
  const placesData = Data();
  const restaurantsData = Rdata();

  // Combine all data sources for search
  const searchData = [...Hdata(), ...placesData, ...restaurantsData];

  return (
    <div>
      <Searchbar searchData={searchData} onSearch={handleSearch} onNotFound={handleNotFound} onLocationSelected={handleLocationSelected} />
      {searchResult && (
        <div>
          <h2>Search Result</h2>
          <p>Location: {searchResult}</p>
          
        </div>
      )}
      {notFoundMessage && <p>{notFoundMessage}</p>}
      {selectedLocation && (
        <MapView selectedLocation={selectedLocation} />
      )}
    </div>
  );
};

export default Searchparent;
