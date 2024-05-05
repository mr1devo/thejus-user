import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './work.css';

const Works = () => {
  return (
    <div className='work'>
      <br/>
      <div className="image-gallery">

        <motion.div // Add motion to the card container
          initial={{ opacity: 0, y: 50 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties to animate to
          transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }} // Transition duration and delay
          className="custom-card"
        >
          <a href='/Search'>
            <img src="https://images.unsplash.com/photo-1489447068241-b3490214e879?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="places" />
          </a>
          <div className="custom-card-content">
            <h2 className="custom-card-title">Places</h2>
            <p className="custom-card-description">Discover enchanting destinations, from historic landmarks to picturesque landscapes, with FOUND IT!. Explore hidden treasures and iconic landmarks, each offering a unique blend of culture and natural beauty. Let us guide you to unforgettable places where every corner tells a story waiting to be explored.</p>
          </div>
        </motion.div>

        <motion.div // Add motion to the card container
          initial={{ opacity: 0, y: 50 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties to animate to
          transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 120 }} // Transition duration and delay
          className="custom-card"
        >
          <a href="/Rsearch">
            <img src="https://housing.com/news/wp-content/uploads/2023/08/Best-5-star-restaurants-in-Hyderabad-07.png" alt="restaurants" />
          </a>
          <div className="custom-card-content">
            <h2 className="custom-card-title">Restaurants</h2>
            <p className="custom-card-description">Explore culinary delights from around the globe with our restaurant recommendations. From cozy cafes to Michelin-starred fine dining, indulge in a world of flavors that will tantalize your taste buds. Let us guide you to unforgettable dining experiences where every dish is a celebration of flavor and creativity.</p>
          </div>
        </motion.div>

        <motion.div // Add motion to the card container
          initial={{ opacity: 0, y: 50 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties to animate to
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 120 }} // Transition duration and delay
          className="custom-card"
        >
          <a href="/Hsearch">
            <img src="https://www.newworldhotels.com/wp-content/uploads/2014/05/Mobile-NWHBR-Exterior.jpg" alt="hotels" />
          </a>
          <div className="custom-card-content">
            <h2 className="custom-card-title">Hotels</h2>
            <p className="custom-card-description">Discover unparalleled comfort and luxury with our handpicked selection of hotels. From boutique hideaways to opulent resorts, each accommodation promises exceptional service and unforgettable experiences. Let us guide you to your perfect home away from home, where relaxation and indulgence await.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Works;
