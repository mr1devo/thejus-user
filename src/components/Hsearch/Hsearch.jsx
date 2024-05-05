import React, { useEffect, useState } from "react";
import "../psearch/Search.css";
import Navb from "../Components/Navb";
import axios from "axios";
import { motion } from "framer-motion";
import { Buffer } from 'buffer';

const Hsearch = () => {
  const [filter, setFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4005/Hoteldetails/hview")
      .then(response => {
        console.log(response.data);
        setHotel(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  const handleItemClick = (value) => {
    setSelectedItem(value);
  };

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
            {hotel
              .filter(item =>
                item.hotelname.toLowerCase().includes(filter.toLowerCase()) ||
                item.hlocation.toLowerCase().includes(filter.toLowerCase()) 
              )
              .map((value, index) => (
                <motion.div
                  key={index}
                  className="col-11 col-md-6 col-lg-3 mx-0 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card p-0 overflow-hidden h-100 shadow">
                    <img 
                      src={`data:image/jpeg;base64,${Buffer.from(value.hotelphoto.data)}`} 
                      style={{ 
                        cursor: 'pointer',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        borderRadius: '5px' 
                      }} 
                      className="card-img-top" 
                      alt={value.hotelname} 
                      onClick={() => handleItemClick(value)} 
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

      {selectedItem && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedItem(null)}>&times;</span>
            <img 
              src={`data:image/jpeg;base64,${Buffer.from(selectedItem.hotelphoto.data)}`} 
              style={{ 
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                width: '50%', 
                height: '50%', 
                objectFit: 'cover', 
                borderRadius: '5px',
                marginLeft:'25%'
              }} 
              className="modal-img" 
              alt={selectedItem.hotelname} 
            />
            <h2>{selectedItem.hotelname}</h2>
            <p>{selectedItem.hlocation}</p>
            <p>{selectedItem.htsee}</p>
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default Hsearch;
