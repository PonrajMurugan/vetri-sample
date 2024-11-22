import React, { useState } from 'react';
import './mernStack.css';




const MernStackNew = () => {

    const syllabusData = [
        {
          title: "Frontend Development with React",
          topics: [
            "Introduction to React",
            "React Components and Props",
            "React State Management",
            "Hooks in React",
            "Handling Events in React",
            "React Router for Navigation"
          ]
        },
        {
          title: "Backend Development with Node.js",
          topics: [
            "Introduction to Node.js",
            "Building REST APIs with Express",
            "Middleware in Node.js",
            "Connecting to Databases with MongoDB",
            "Error Handling in Node.js"
          ]
        },
        {
          title: "Database Management with MongoDB",
          topics: [
            "Introduction to MongoDB",
            "CRUD Operations in MongoDB",
            "Indexing and Query Optimization",
            "Mongoose ORM",
            "Data Validation in MongoDB"
          ]
        },
        {
          title: "API Development & Integration",
          topics: [
            "Creating RESTful APIs",
            "Using Postman for API Testing",
            "Securing APIs with JWT Authentication",
            "Error Handling in APIs",
            "Deploying APIs to Heroku"
          ]
        },
        {
          title: "Version Control with Git & GitHub",
          topics: [
            "Introduction to Git",
            "Cloning Repositories and Branching",
            "Pull Requests and Merging",
            "Using Git for Collaboration",
            "Managing Version History"
          ]
        },
        {
          title: "Deployment and Hosting",
          topics: [
            "Deploying React Apps to Netlify",
            "Deploying Node.js Apps to Heroku",
            "Connecting Frontend and Backend in Production",
            "Using Cloud Services for Hosting",
            "CI/CD for MERN Applications"
          ]
        },
        {
          title: "Advanced Topics",
          topics: [
            "WebSockets with Socket.io",
            "Building Real-Time Applications",
            "Unit Testing in Node.js",
            "Optimizing MERN Applications for Performance",
            "Handling Large-scale Applications"
          ]
        }
      ];
  
      

      const [visibleIndex, setVisibleIndex] = useState(null);

      const toggleSyllabus = (index) => {
        if (visibleIndex === index) {
          setVisibleIndex(null); // Hide if already visible
        } else {
          setVisibleIndex(index); // Show the clicked syllabus
        }
      };


    return (
        
        <div>
              <nav className="fixed-navbar" style={{marginTop:"100px"}}>
                <ul>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#syllabus">Syllabus</a></li>
                    <li><a href="#modules">Modules</a></li>
                    <li><a href="#career">Career</a></li>
                    <li><a href="#faq">FAQ</a></li>
                   
                </ul>
            </nav>
      

        <div className='container'>

            <div style={{marginTop:"150px"}} className="MernStackNew-container">
      <header  data-aos="fade-up" className="MernStackNew-header">
        <h1 className="MernStackNew-title">MERN Stack Training</h1>
        <p className="MernStackNew-description">
          Master full-stack development with MongoDB, Express, React, and Node.js. Build dynamic, responsive, and modern web applications.
        </p>
      </header>
      <div   data-aos="fade-up" className="MernStackNew-image-section">
        <img  src="https://user-images.githubusercontent.com/74038190/219923823-bf1ce878-c6b8-4faa-be07-93e6b1006521.gif" alt="MERN Stack Illustration" className="MernStackNew-image" />
      </div>
      <div id='skills'  data-aos="fade-up" className="MernStackNew-skills-section">
        <h1   data-aos="fade-up" className="MernStackNew-skills-title">Skills You Will Learn</h1>
        <ul  data-aos="fade-up" className="MernStackNew-skills-list">
        <li  data-aos="fade-up" className="MernStackNew-skill-item">
  <i className="MernStackNew-icon">&#128640;</i> React for Frontend Development
</li>
<li  data-aos="fade-up" className="MernStackNew-skill-item">
  <i className="MernStackNew-icon">&#128187;</i> Building APIs with Node.js and Express
</li>
<li  data-aos="fade-up" className="MernStackNew-skill-item">
  <i className="MernStackNew-icon">&#128248;</i> Database Management with MongoDB
</li>
<li  data-aos="fade-up" className="MernStackNew-skill-item">
  <i className="MernStackNew-icon">&#128273;</i> RESTful APIs Integration
</li>
<li  data-aos="fade-up" className="MernStackNew-skill-item">
  <i className="MernStackNew-icon">&#128736;</i> Deployment and Hosting
</li>
<li  data-aos="fade-up" className="MernStackNew-skill-item">
  <i className="MernStackNew-icon">&#128295;</i> Testing and Debugging Applications
</li>

        </ul>
      </div>
    </div>

    
    <div className="MernStackNew-Syllabus-container">
      <div className="MernStackNew-Syllabus-header">
        <h1 className="MernStackNew-Syllabus-title">
          <i className="MernStackNew-Syllabus-icon">&#128218;</i> Syllabus
        </h1>
      </div>
      <ul className="MernStackNew-Syllabus-list">
        {syllabusData.map((syllabus, index) => (
          <li key={index} className="MernStackNew-Syllabus-item">
            <h2
              className="MernStackNew-Syllabus-item-title"
              onClick={() => toggleSyllabus(index)}
            >
              {syllabus.title}
            </h2>
            <ul
              className={`MernStackNew-Syllabus-topic-list ${
                visibleIndex === index ? "visible" : "hidden"
              }`}
            >
              {syllabus.topics.map((topic, idx) => (
                <li key={idx} className="MernStackNew-Syllabus-topic">
                  <i className="MernStackNew-Syllabus-topic-icon">&#128221;</i> {topic}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="data-science-download-section">
        <h3 className="data-science-download-heading">Download Syllabus </h3>
        <a href="/path/to/your/pdf-file.pdf" download className="data-science-download-button">
            <i className="fa-solid fa-download"></i> Download 
        </a>
    </div>
    
    </div>
            
        </div>

        </div>
    );
};

export default MernStackNew;