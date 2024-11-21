import React from "react";

function Skills() {
  return (
    <>
      <section id="skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
        </div>
      </section>
      <style jsx>{`
        #skills {
          padding: 60px 20px;
          text-align: center;
          background: #ffffff;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          justify-items: center;
        }
        .skill-card {
          padding: 15px 20px;
          background: #f4f4f4;
          border: 2px solid #16a085;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
          color: #2c3e50;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}

export default Skills;
