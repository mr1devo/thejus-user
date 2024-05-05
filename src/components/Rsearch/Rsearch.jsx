import React, { useEffect, useState } from "react";
import "../psearch/Search.css";
import Navb from "../Components/Navb";
import axios from "axios";
import { Buffer } from 'buffer';
import { motion } from "framer-motion";

const Rsearch = () => {
  const [filter, setFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [restra, setRestra] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4005/Restradetails/resview")
      .then(response => {
        console.log(response.data);
        setRestra(response.data);
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
            {restra
              .filter(item =>
                item.restraname.toLowerCase().includes(filter.toLowerCase()) ||
                item.rlocation.toLowerCase().includes(filter.toLowerCase()) 
              )
              .map((value, index) => (
                <motion.div
                  key={index}
                  className="col-11 col-md-6 col-lg-3 mx-0 mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card p-0 overflow-hidden h-100 shadow">
                    <img 
                      src={`data:image/jpeg;base64,${Buffer.from(value.restraphoto.data)}`} 
                      style={{ 
                        cursor: 'pointer',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        borderRadius: '5px' 
                      }} 
                      className="card-img-top" 
                      alt={value.restraname} 
                      onClick={() => handleItemClick(value)} 
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

      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedItem(null)}>&times;</span>
            <img 
              src={`data:image/jpeg;base64,${Buffer.from(selectedItem.restraphoto.data)}`} 
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
              alt={selectedItem.restraname} 
            />
            <h2>{selectedItem.restraname}</h2>
            <p>{selectedItem.rlocation}</p>
            <p>{selectedItem.rtsee}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Rsearch;
