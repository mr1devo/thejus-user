import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './Mapsearch.css';  // Import the CSS file
import Hdata from '../Hsearch/Hdata'; // Import the Hdata component to get hotel data
import Rdata from '../Rsearch/Rdata'; // Import the Rdata component to get restaurant data
import Data from '../psearch/Data'; // Import the Data component to get place data
import MapView from './MapView';

const Mapsearch = ({ onSearch }) => {
  const [activeSearch, setActiveSearch] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [onPlace, onPlaceSelected] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const searchContainerRef = useRef(null);

  const hotelData = Hdata(); // Fetch hotel data from Hdata component
  const restraData = Rdata(); // Fetch restaurant data from Rdata component
  const placesData = Data(); // Fetch place data from Data component

  const handleSearch = (e) => {
    const inputTerm = e.target.value.toLowerCase();

    if (inputTerm === '') {
      setActiveSearch([]);
      setSearchTerm('');
      setShowSuggestions(false);
      return false;
    }

    // Filter hotel data based on search term
    const filteredHotels = hotelData.filter(hotel => 
      hotel.place.toLowerCase().includes(inputTerm) ||
      hotel.title.toLowerCase().includes(inputTerm)
    );

    // Filter restaurant data based on search term
    const filteredRestaurants = restraData.filter(restaurant => 
      restaurant.place.toLowerCase().includes(inputTerm) ||
      restaurant.title.toLowerCase().includes(inputTerm)
    );

    // Filter place data based on search term
    const filteredPlaces = placesData.filter(place => 
      place.place.toLowerCase().includes(inputTerm) ||
      place.title.toLowerCase().includes(inputTerm)
    );
    
    // Merge the filtered data into a single array
    const mergedData = [...filteredHotels, ...filteredRestaurants, ...filteredPlaces];

    setActiveSearch(mergedData);
    setSearchTerm(inputTerm);
    setShowSuggestions(true);
  };

  const handleWordClick = (item) => {
    setSearchTerm(item.title);
    setShowSuggestions(false);
    onPlaceSelected(item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    
    <form className='search-bar'>
      <div className="search-container" ref={searchContainerRef}>
      
        <div className="input-container">
          <AiOutlineSearch className="search-icon" />
          <input
            type="search"
            placeholder="Places to go, hotels, restaurants,..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {showSuggestions && activeSearch.length > 0 && (
        <div className="search-results">
          {activeSearch.map((item, index) => (
            <div key={index} onClick={() => handleWordClick(item)} className="search-item">
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      )}

      {showSuggestions && activeSearch.length === 0 && searchTerm !== '' && (
        <div className="search-results">
          <span>No results found</span>
        </div>
      )}
    </form>
  );
};

export default Mapsearch;
