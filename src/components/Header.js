import React from "react";

function Header() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>Welcome to My Portfolio</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
          </nav>
        </div>
      </header>
      <style jsx>{`
        header {
          background: linear-gradient(90deg, #1abc9c, #16a085);
          color: #ffffff;
          padding: 20px 0;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .header-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        header h1 {
          margin: 0;
          font-size: 2.5rem;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        }
        nav {
          margin-top: 15px;
        }
        nav a {
          color: #ffffff;
          margin: 0 15px;
          font-size: 1.2rem;
          font-weight: bold;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        nav a:hover {
          color: #f39c12;
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}

export default Header;
