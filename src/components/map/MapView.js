import React, { useEffect, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
import Navb from '../Components/Navb';
import './map.css';
import { Container } from '@mui/material';
import { Buffer } from 'buffer';
import Mapsearch from './Mapsearch';

const MapView = () => {
  const [data, setData] = useState([]);
  const [rdata, setRdata] = useState([]);
  const [hdata, setHdata] = useState([]);
  const [selected, setSelected] = useState(null);
  const [rselected, setRselected] = useState(null);
  const [hselected, setHselected] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4005/Placedetails/photoview')
      .then(response => {
        setData(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:4005/Restradetails/resview')
      .then(response => {
        setRdata(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:4005/Hoteldetails/hview')
      .then(response => {
        setHdata(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2ltbW1wbGUiLCJhIjoiY2wxeG1hd24xMDEzYzNrbWs5emFkdm16ZiJ9.q9s0sSKQFFaT9fyrC-7--g';

  // Function to handle marker click
  const handleMarkerClick = (item, type) => {
    // Close any previously opened containers
    setSelected(null);
    setRselected(null);
    setHselected(null);
    
    // Open the clicked marker's container based on type
    switch (type) {
      case 'data':
        setSelected(item);
        break;
      case 'rdata':
        setRselected(item);
        break;
      case 'hdata':
        setHselected(item);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'absolute' }}>
      <Navb />
      <Mapsearch />
      {selected &&
        <div style={{ color: 'black', zIndex: '9999', position: 'absolute', marginTop: 'auto', borderRadius: '20px', height: '30vh', width: '30vw' }}>
          <Container component="main" maxWidth="xs" className='hifu'>
            <span className="close" onClick={() => setSelected(null)}>&times;</span>
            <div className='da'>
              <img src={`data:image/jpeg;base64,${Buffer.from(selected.placephoto.data)}`} alt='Error' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: '100%', height: 'auto', display: 'cover', borderRadius: '15px' }} />
            </div>
            <br />
            <h4>Name : {selected.placename}</h4>
            <h4>Description : {selected.desc}</h4>
            <h4>Place : {selected.location}</h4>
          </Container>
        </div>}
      {rselected &&
        <div style={{ color: 'black', zIndex: '9999', position: 'absolute', marginTop: 'auto', borderRadius: '20px', height: '30vh', width: '30vw' }}>
          <Container component="main" maxWidth="xs" className='hifu'>
            <span className="close" onClick={() => setRselected(null)}>&times;</span>
            <div className='da'>
              <img src={`data:image/jpeg;base64,${Buffer.from(rselected.restraphoto.data)}`} alt='Error' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
            </div>
            <br />
            <h4>Name : {rselected.restraname}</h4>
            <h4>Description : {rselected.rdesc}</h4>
            <h4>Place : {rselected.rlocation}</h4>
          </Container>
        </div>}
      {hselected &&
        <div style={{ color: 'black', zIndex: '9999', position: 'absolute', marginTop: 'auto', borderRadius: '20px', height: '30vh', width: '30vw' }}>
          <Container component="main" maxWidth="xs" className='hifu'>
            <span className="close" onClick={() => setHselected(null)}>&times;</span>
            <div className='da'>
              <img src={`data:image/jpeg;base64,${Buffer.from(hselected.hotelphoto.data)}`} alt='Error' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
            </div>
            <br />
            <h4>Name : {hselected.hotelname}</h4>
            <h4>Description : {hselected.hdesc}</h4>
            <h4>Place : {hselected.hlocation}</h4>
          </Container>
        </div>}
      <Map
        initialViewState={{
          latitude: 10.5276, // Latitude of Thrissur, Kerala
          longitude: 76.2144, // Longitude of Thrissur, Kerala
          zoom: 15, // Adjust zoom level as needed
          bearing: 0,
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle={'mapbox://styles/mapbox/navigation-day-v1'}
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {/* Markers for data */}
        {data.map((item, index) => (
          <Marker
            key={index}
            latitude={parseFloat(item.latitude)}
            longitude={parseFloat(item.longitude)}
            onHover={(event) => console.log('Hovered:', item)}
            onClick={() => handleMarkerClick(item, 'data')}
          >
            <div style={{ color: 'red', fontSize: 24, zIndex: 999 }}>
              <span role="img" aria-label="marker">🏕️</span>
            </div>
          </Marker>
        ))}
        {/* Markers for rdata */}
        {rdata.map((item, index) => (
          <Marker
            key={index}
            latitude={parseFloat(item.rlatitude)}
            longitude={parseFloat(item.rlongitude)}
            onHover={(event) => console.log('Hovered:', item)}
            onClick={() => handleMarkerClick(item, 'rdata')}
          >
            <div style={{ color: 'red', fontSize: 24, zIndex: 999 }}>
              <span role="img" aria-label="marker">🍛</span>
            </div>
          </Marker>
        ))}
        {/* Markers for hdata */}
        {hdata.map((item, index) => (
          <Marker
            key={index}
            latitude={parseFloat(item.hlatitude)}
            longitude={parseFloat(item.hlongitude)}
            onHover={(event) => console.log('Hovered:', item)}
            onClick={() => handleMarkerClick(item, 'hdata')}
          >
            <div style={{ color: 'red', fontSize: 24, zIndex: 999 }}>
              <span role="img" aria-label="marker">🛏️</span>
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default MapView;
