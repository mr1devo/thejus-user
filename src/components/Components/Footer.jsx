import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
       <div className="footer">
        <div className="top">
          <div>
            <h1 style={{color:'white'}}>FOUND IT!</h1>
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
  );
}

export default Footer;
