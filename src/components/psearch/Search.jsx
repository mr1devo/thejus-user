import React, { useEffect, useState } from "react";
import "./Search.css";
import Navb from "../Components/Navb";
import axios from "axios";
import { Buffer } from 'buffer';
import { motion } from "framer-motion";

const Search = () => {
  const [filter, setFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [place, setPlace] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4005/Placedetails/photoview")
      .then(response => {
        setPlace(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  const handleItemClick = (value) => {
    setSelectedItem(value);
  };

  // Filter the place array based on the filter value
  const filteredPlace = place.filter(value => {
    return (
      value.placename.toLowerCase().includes(filter.toLowerCase()) ||
      value.location.toLowerCase().includes(filter.toLowerCase()) 
    );
  });

  return (
    <div>
      <Navb /><br/><br/>
      <section>  
        <div className="row justify-content-center">
          <div className="col-12 mb-5">
            <div className="search-container">
              <input
                type="text"
                className="curved-search-input"
                placeholder="Search"
                value={filter}
                onChange={handleSearch}
              />
            </div>
          </div>

          <div className="row">
            {filteredPlace.map((value, index) => (
              <motion.div
                key={index}
                className="col-11 col-md-6 col-lg-3 mx-0 mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <img
                    src={`data:image/jpeg;base64,${Buffer.from(value.placephoto.data)}`}
                    style={{ cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }}
                    className="card-img-top"
                    alt={value.placename}
                    onClick={() => handleItemClick(value)}
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

      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedItem(null)}>&times;</span>
            <img
              src={`data:image/jpeg;base64,${Buffer.from(selectedItem.placephoto.data)}`}
              style={{ cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', width: '50%', height: '50%', objectFit: 'cover', borderRadius: '5px', marginLeft: '25%' }}
              className="modal-img"
              alt={selectedItem.placename}
            />
            <h2>{selectedItem.placename}</h2>
            <p>{selectedItem.location}</p>
            <p>{selectedItem.tsee}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Search;
