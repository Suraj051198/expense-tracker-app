import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-3">Expense Tracker</h5>
            <p className="mb-1">Created by Suraj Sonawane</p>
            <p className="mb-1">Contact: +91 9860055304</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <h5 className="mb-3">Connect With Me</h5>
            <div className="d-flex justify-content-center justify-content-md-end">
              <a href="https://www.linkedin.com/in/sonawane-suraj/" 
                className="me-3 text-white" 
                target="_blank" 
                rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/Suraj051198" 
                className="me-3 text-white" 
                target="_blank" 
                rel="noopener noreferrer">
                <i className="bi bi-github"></i> GitHub
              </a>
              <a href="https://suraj05-portfolio.netlify.app/" 
                className="text-white" 
                target="_blank" 
                rel="noopener noreferrer">
                <i className="bi bi-briefcase"></i> Portfolio
              </a>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <p className="mb-0">© {new Date().getFullYear()} Expense Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 