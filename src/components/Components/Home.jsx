import React from 'react';
import { motion, useScroll } from 'framer-motion'; // Import motion from Framer Motion
import './Style.css';
import './fonts.css';
import Works from './Works';
import Nav2 from './Nav2';
import Searchbar from './Searchbar';



const Home = () => {
    const { scrollYProgress } = useScroll();
    
    return (
        <div className="Home" style={{ backgroundColor: '#ffffff' }}>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />

            <Nav2 />
            <div className="second">
                <br />
                <br />
                {/* Apply motion animation to the h1 element */}
                <motion.h1 className="gradient-text" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>Where to ?</motion.h1><br/><br/><div align='center'>
                <Searchbar/></div><br /><br />
                <Works /><br /><br />
                <h1 className="gradient-text">
                    <br />
                    FOUND IT!
                </h1>
                <div className="second-page">
                    <div className="second-text">
                        <p>
                            Welcome to FOUND IT!, your ultimate destination for discovering the world's most captivating places, luxurious hotels, and mouthwatering restaurants!
                            At FOUND IT!, we understand the thrill of exploration and the joy of discovering new destinations. Whether you're a seasoned traveler seeking hidden gems or embarking on your first adventure, we're here to guide you every step of the way.
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="image1">
                        <img
                            alt=""
                            src="https://media.istockphoto.com/id/1246366598/photo/a-scenic-view-of-boats-under-a-blue-sky-in-backwaters-situated-in-allepey-town-located-in.jpg?s=612x612&w=0&k=20&c=YBv_3nP-6YjvN9JRhaNsBmq8ke4azCgvGLS5h3r9jSk="
                        />
                        <img
                            alt=""
                            src="https://media-cdn.tripadvisor.com/media/photo-s/1d/52/15/2b/tropical-botanical-gardens.jpg"
                        />
                    </div>
                </div>
            </div>
            <div className='Home'>
                <div className="second" id="about" >
                    <br />
                    <h1 className="gradient-text">Tourist Places</h1>
                    <div className="second-page">
                        <div className="second-text">
                            <h3>About Us</h3>
                            <p>
                                Uncover the world's most iconic tourist destinations with our comprehensive guides. From ancient wonders to modern marvels, our curated selection showcases the essence of each location, offering rich cultural experiences and breathtaking landscapes. Let us inspire your wanderlust and guide you to the must-see sights and hidden gems that make every journey unforgettable.
                            </p>
                        </div>
                        <div className="image1">
                            <img
                                alt=""
                                src="https://www.theleafmunnar.com/wp-content/uploads/2021/07/leaf-munnar-infinity-pool.jpg" />
                            <img
                                alt=""
                                src="https://eastindiantraveller.files.wordpress.com/2020/11/bamboo-athirapally.jpg" />
                        </div>
                    </div>
                </div>

            </div>
            <br /><br /><br />
            <div>
                <div className="footer">
                    <div className="top" id="footer" >
                        <div>
                            <h1 style={{ color: 'white' }}>FOUND IT!</h1>
                            <p> We Help You Find Places </p>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzA4MTU4NjQ0LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D/">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="https://www.instagram.com/prithvi_lal_/">
                                <i className="fab fa-instagram-square"></i>
                            </a>
                            <a href="https://in.linkedin.com//">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/?lang=en/">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href="https://www.behance.net//">
                                <i className="fab fa-behance-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="bottom">
                        <div>
                            <h4>Project</h4>
                            <a href="/">Changelog</a>
                            <a href="/">Status</a>
                            <a href="/">License</a>
                            <a href="/">All Versions</a>
                        </div>
                        <div>
                            <h4>Community</h4>
                            <a href="/">Changelog</a>
                            <a href="/">Status</a>
                            <a href="/">License</a>
                            <a href="/">All Versions</a>
                        </div>
                        <div>
                            <h4>Help</h4>
                            <a href="/">Support</a>
                            <a href="/">Troubleshooting</a>
                            <a href="/">Contact Us</a>
                        </div>
                        <div>
                            <h4>Others</h4>
                            <a href="/">Terms of Service</a>
                            <a href="/">Privacy Policy</a>
                            <a href="/">License</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Home;
