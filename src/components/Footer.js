import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <p>&copy; 2024 Jonald Filemon Kaparang. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://github.com/Jonald2004/CVjonald.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://github.com/Jonald2004/CVjonald.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background: linear-gradient(90deg, #2c3e50, #34495e);
          color: #ffffff;
          padding: 20px 0;
          text-align: center;
        }
        footer .social-links {
          margin-top: 10px;
        }
        footer a {
          margin: 0 10px;
          color: #1abc9c;
          font-size: 1.2rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        footer a:hover {
          color: #f39c12;
        }
      `}</style>
    </>
  );
}

export default Footer;
