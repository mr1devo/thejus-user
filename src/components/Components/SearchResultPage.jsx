import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from "axios";
import { Buffer } from 'buffer';
import Navb from './Navb'; // Update the path to your Navb component
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './Searchbar.css';

const SearchResultPage = () => {
  const { searchTerm } = useParams();
  const [searchInputValue, setSearchInputValue] = useState(searchTerm);
  const [filter, setFilter] = useState(searchTerm);
  const [selectedItem, setSelectedItem] = useState(null);
  const [places, setPlaces] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(false); // Initially set to false

  useEffect(() => {
    setSearchInputValue(searchTerm);

    // Fetch place data
    axios.get("http://localhost:4005/Placedetails/photoview")
      .then(response => {
        setPlaces(response.data);
      })
      .catch(err => console.log(err));

    // Fetch hotel data
    axios.get("http://localhost:4005/Hoteldetails/hview")
      .then(response => {
        setHotels(response.data);
      })
      .catch(err => console.log(err));

    // Fetch restaurant data
    axios.get("http://localhost:4005/Restradetails/resview")
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(err => console.log(err));
  }, [searchTerm]);

  useEffect(() => {
    handleSearch();
  }, [filter]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInputValue(value);
    setFilter(value);
  };

  const handleSearch = () => {
    if (filter.trim() !== '') {
      navigate(`/search-results/${encodeURIComponent(filter)}`);
    }
  };

  const handleItemClick = (value) => {
    setSelectedItem(value);
  };

  useEffect(() => {
    setShowSearchBar(true); // When the component mounts, set showSearchBar to true for animation
  }, []);

  return (
    <div>
      <Navb /> <br />
      {/* Add motion to the search container */}
      <motion.div
        animate={{
          y: [79, 0], // Animate from y=79 to y=0
          scale: 1,
          rotate: 0,
        }}
      >
        <form className={`search-container ${showSearchBar ? 'show' : ''}`} onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
          <div className="input-container">
            <AiOutlineSearch className="search-icon" />
            <input
              type="search"
              placeholder="Search Places to go, hotels, restaurants,..."
              className="search-input"
              value={searchInputValue}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </motion.div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedItem(null)}>&times;</span>
            {selectedItem.type === 'place' && (
              <>
                <img
                  src={`data:image/jpeg;base64,${Buffer.from(selectedItem.placephoto.data)}`}
                  style={{ cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', width: '50%', height: '50%', objectFit: 'cover', borderRadius: '5px', marginLeft: '25%' }}
                  className="modal-img"
                  alt={selectedItem.placename}
                />
                <h2>{selectedItem.placename}</h2>
                <p>{selectedItem.location}</p>
                <p>{selectedItem.desc}</p>
              </>
            )}
            {selectedItem.type === 'hotel' && (
              <>
                <img
                  src={`data:image/jpeg;base64,${Buffer.from(selectedItem.hotelphoto.data)}`}
                  style={{ cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', width: '50%', height: '50%', objectFit: 'cover', borderRadius: '5px', marginLeft: '25%' }}
                  className="modal-img"
                  alt={selectedItem.hotelname}
                />
                <h2>{selectedItem.hotelname}</h2>
                <p>{selectedItem.hlocation}</p>
                <p>{selectedItem.hdesc}</p>
              </>
            )}
            {selectedItem.type === 'restaurant' && (
              <>
                <img
                  src={`data:image/jpeg;base64,${Buffer.from(selectedItem.restraphoto.data)}`}
                  style={{ cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', width: '50%', height: '50%', objectFit: 'cover', borderRadius: '5px', marginLeft: '25%' }}
                  className="modal-img"
                  alt={selectedItem.restraname}
                />
                <h2>{selectedItem.restraname}</h2>
                <p>{selectedItem.rlocation}</p>
                <p>{selectedItem.rdesc}</p>
              </>
            )}
          </div>
        </div>
      )}

      <section>
        <motion.h1
          className='Sub'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <br />
          PLACES
        </motion.h1>
        <div className="row justify-content-center">
          <div className="col-12 mb-5"></div>
          <div className="row">
            {/* Display filtered places */}
            {places.filter(place =>
              place.placename.toLowerCase().includes(filter.toLowerCase()) ||
              place.location.toLowerCase().includes(filter.toLowerCase()) ||
              place.desc.toLowerCase().includes(filter.toLowerCase())
            ).map((value, index) => (
              <motion.div
                key={index}
                className="col-11 col-md-6 col-lg-3 mx-0 mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <img
                    src={`data:image/jpeg;base64,${Buffer.from(value.placephoto.data)}`}
                    style={{ cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }}
                    className="card-img-top"
                    alt={value.placename}
                    onClick={() => handleItemClick({ ...value, type: 'place' })}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.placename}</h5>
                    <p className="card-text">{value.location}</p>
                    <p className="card-text">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <motion.h1
          className='Sub'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <br />HOTELS
        </motion.h1>
        <div className="row justify-content-center">
          <div className="col-12 mb-5"></div>
          <div className="row">
            {/* Display filtered hotels */}
            {hotels.filter(hotel =>
              hotel.hotelname.toLowerCase().includes(filter.toLowerCase()) ||
              hotel.hlocation.toLowerCase().includes(filter.toLowerCase()) ||
              hotel.hdesc.toLowerCase().includes(filter.toLowerCase())
            ).map((value, index) => (
              <motion.div
                key={index}
                className="col-11 col-md-6 col-lg-3 mx-0 mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <img
                    src={`data:image/jpeg;base64,${Buffer.from(value.hotelphoto.data)}`}
                    style={{ cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }}
                    className="card-img-top"
                    alt={value.hotelname}
                    onClick={() => handleItemClick({ ...value, type: 'hotel' })}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.hotelname}</h5>
                    <p className="card-text">{value.hlocation}</p>
                    <p className="card-text">{value.hdesc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <motion.h1
          className='Sub'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <br />RESTAURANTS
        </motion.h1>
        <div className="row justify-content-center">
          <div className="col-12 mb-5"></div>
          <div className="row">
            {/* Display filtered restaurants */}
            {restaurants.filter(restaurant =>
              restaurant.restraname.toLowerCase().includes(filter.toLowerCase()) ||
              restaurant.rlocation.toLowerCase().includes(filter.toLowerCase()) ||
              restaurant.rdesc.toLowerCase().includes(filter.toLowerCase())
            ).map((value, index) => (
              <motion.div
                key={index}
                className="col-11 col-md-6 col-lg-3 mx-0 mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <img
                    src={`data:image/jpeg;base64,${Buffer.from(value.restraphoto.data)}`}
                    style={{ cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }}
                    className="card-img-top"
                    alt={value.restraname}
                    onClick={() => handleItemClick({ ...value, type: 'restaurant' })}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.restraname}</h5>
                    <p className="card-text">{value.rlocation}</p>
                    <p className="card-text">{value.rdesc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchResultPage;
