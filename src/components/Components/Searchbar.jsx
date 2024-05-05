import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Searchbar.css';  // Import the CSS file

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSearch, setActiveSearch] = useState([]);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      // Navigate to SearchResultPage with search term
      navigate(`/search-results/${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleInputChange = (e) => {
    const inputTerm = e.target.value.toLowerCase();
    setSearchTerm(inputTerm);
    // Update activeSearch based on input term
    // Your logic for suggestions here
  };

  const handleWordClick = (item) => {
    setSearchTerm(item.title);
    setShowSuggestions(false);
    // Handle click action
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
    <form className="search-container" onSubmit={handleSearch}>
      <div className="input-container">
        <AiOutlineSearch className="search-icon" />
        <input
          type="search"
          placeholder="Places to go, hotels, restaurants,..."
          className="search-input"
          value={searchTerm}
          onChange={handleInputChange}
        />
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

export default Searchbar;
