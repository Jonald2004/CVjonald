import React from "react";

function About() {
  return (
    <>
      <section id="about">
        <h2>About Me</h2>
        <div className="about-container">
          <img src="img/jonald.jpg" alt="Profile" className="profile-photo" />
          <p>
            Hello! My name is <strong>Jonald Filemon Kaparang</strong>, a
            passionate student in Informatics. I specialize in front-end
            development, visual programming, robotics, and artificial
            intelligence. I am dedicated to solving real-world problems through
            technology.
          </p>
        </div>
      </section>
      <style jsx>{`
        #about {
          padding: 60px 20px;
          background: #f8f9fa;
          text-align: center;
        }
        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .profile-photo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid #1abc9c;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        p {
          max-width: 700px;
          margin: 0 auto;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #34495e;
        }
      `}</style>
    </>
  );
}

export default About;
