import React, { useState } from 'react';
import './JFS.css';
import { 
    FaTools, FaLaptopCode, FaGraduationCap, FaQuestionCircle, FaBook, 
    FaStar, FaArrowRight, FaUserAlt, FaGlobe, FaRegChartBar, FaCodeBranch, 
    FaDatabase, FaServer, FaDesktop, FaClipboardCheck, FaCogs 
} from 'react-icons/fa';

import { FaJava, FaHtml5, FaCss3Alt, FaReact,  FaGithub } from 'react-icons/fa';
import { SiSpring, SiMysql, SiDjango, SiFlask, SiBootstrap } from 'react-icons/si';
import Credentials from '../credentials/credentials';

const JavaFullStack = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const syllabus = [
        {
            title: "Core Java Programming",
            content: [
                "Understand the basics of Java, including OOP principles.",
                "Learn about multithreading and exception handling.",
                "Explore Java collections like List, Set, and Map.",
                "Work with file I/O and serialization in Java.",
                "Learn about Java memory management and garbage collection."
            ],
            icon: <FaJava className="syllabus-icon" />
        },
        {
            title: "Front-End Development",
            content: [
                "Learn HTML5, CSS3, and JavaScript to design responsive web interfaces.",
                "Understand DOM manipulation and event handling in JavaScript.",
                "Use Angular or React for building dynamic applications.",
                "Learn about responsive design using Flexbox and Grid.",
                "Master CSS frameworks like Bootstrap or Materialize."
            ],
            icon: <FaHtml5 className="syllabus-icon" />
        },
        {
            title: "Spring Framework",
            content: [
                "Master Spring Boot to create enterprise-level backend applications.",
                "Learn how to develop RESTful APIs using Spring MVC.",
                "Understand microservices architecture with Spring Cloud.",
                "Implement security features in Spring using Spring Security.",
                "Work with Spring Data JPA and Hibernate ORM."
            ],
            icon: <SiSpring className="syllabus-icon" />
        },
        {
            title: "Database Management",
            content: [
                "Work with relational databases like MySQL and PostgreSQL.",
                "Learn advanced SQL queries for managing and retrieving data.",
                "Understand database normalization and optimization techniques.",
                "Implement database indexing for improved query performance.",
                "Work with stored procedures and triggers in databases."
            ],
            icon: <SiMysql className="syllabus-icon" />
        },
        {
            title: "Version Control and Collaboration",
            content: [
                "Learn Git basics: commits, branches, merges, and rebasing.",
                "Understand how to collaborate on projects using GitHub.",
                "Learn about version control strategies for team collaboration.",
                "Work with Git workflows like Git Flow and feature branching.",
                "Understand pull requests and code reviews for team collaboration."
            ],
            icon: <FaGithub className="syllabus-icon" />
        },
        {
            title: "Hibernate & JPA",
            content: [
                "Integrate Hibernate ORM for database operations.",
                "Understand the Java Persistence API (JPA) and how it works.",
                "Learn how to map Java objects to database tables.",
                "Work with entity relationships like One-to-One, One-to-Many.",
                "Optimize database queries using Hibernate Query Language (HQL)."
            ],
            icon: <FaDatabase className="syllabus-icon" />
        },
        {
            title: "Deployment and Cloud Basics",
            content: [
                "Learn how to deploy applications on AWS, Azure, or Google Cloud.",
                "Understand containerization using Docker and Kubernetes.",
                "Deploy microservices-based applications using Kubernetes.",
                "Understand serverless computing and its benefits.",
                "Learn how to monitor and scale cloud applications."
            ],
            icon: <SiFlask className="syllabus-icon" />
        },
        {
            title: "Capstone Projects",
            content: [
                "Work on real-world projects like e-commerce platforms.",
                "Develop a job portal using full-stack technologies.",
                "Create a social networking application with Java Full Stack.",
                "Build a RESTful API for an online marketplace.",
                "Learn how to integrate third-party APIs into your projects."
            ],
            icon: <SiBootstrap className="syllabus-icon" />
        }
    ];



    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
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




        <div data-aos="fade-up" className="jfs-container">

            
            <div className="jfs-header">
                <h1 className="jfs-title">Java Full Stack Development</h1>
                <p className="jfs-description">Build cutting-edge applications with a complete skill set in frontend and backend technologies! Perfect for beginners and experienced developers looking to enhance their skill set.</p>
            </div>

            <div id='skills' className="jfs-section jfs-skills">
                <h1><FaLaptopCode /> Skills You Will Learn</h1>
                <ul className="jfs-list">
                    <li><FaCodeBranch /> Java Programming</li>
                    <li><FaCogs /> Spring Framework</li>
                    <li><FaServer /> RESTful APIs</li>
                    <li><FaDesktop /> HTML, CSS, and JavaScript</li>
                    <li><FaLaptopCode /> React.js</li>
                    <li><FaDatabase /> Database Management (SQL & NoSQL)</li>
                </ul>
            </div>

            <div data-aos="fade-up" id='syllabus' className="syllabus-container">
    <h2 className="section-heading">Syllabus</h2>

    <ul className="syllabus-list">
        {syllabus.map((item, index) => (
            <li key={index} className="syllabus-item">
                <div className="syllabus-header" onClick={() => toggleContent(index)}>
                    <span className={`syllabus-icon ${item.icon}`}>{item.icon}</span>
                    <span style={{color:"navy" , fontSize:"1.3rem"}} className="syllabus-title">{item.title}</span>
                    <span className="toggle-icon">
                        <i className={`fa-solid ${activeIndex === index ? 'fa-arrow-down' : 'fa-arrow-right'}`}></i>
                    </span>
                </div>
                {activeIndex === index && (
                    <ul style={{cursor:"pointer"}} className="syllabus-content">
                        {item.content.map((point, i) => (
                            <li
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "5px",
                                    color: "#444", 
                                }}
                            >
                                &nbsp;
                                <i
                                    className="fa-solid fa-circle-dot"
                                    style={{
                                        color: activeIndex === index ? "#007BFF" : "#888", 
                                        transition: "color 0.3s ease",
                                    }}
                                ></i>
                                &nbsp; {point}
                            </li>
                        ))}
                    </ul>
                )}
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




            <div id='modules' data-aos="fade-up" className="jfs-section jfs-tools">
                <h1><FaTools /> Modules And Tools</h1>
                <p><FaCogs /> Hands-on experience with tools like Eclipse, IntelliJ, Git, Docker, and Jenkins to streamline the development process.</p>
            </div>

            <div id='career' data-aos="fade-up" className="jfs-section jfs-career">
                <h1><FaGraduationCap /> Career Opportunities</h1>
                <p><FaRegChartBar /> Graduates can explore roles such as Full Stack Developer, Backend Developer, Frontend Engineer, and Software Consultant. High demand in tech firms ensures great career growth.</p>
            </div>

            <div data-aos="fade-up" className="jfs-section jfs-benefits">
                <h1 style={{color:"navy"}}><FaStar /> Why Choose This Course</h1>
                <ul className="jfs-list">
                    <li><FaClipboardCheck /> Comprehensive curriculum covering both frontend and backend</li>
                    <li><FaStar /> Project-based learning to build a strong portfolio</li>
                    <li><FaCogs /> Industry-relevant tools and technologies</li>
                </ul>
            </div>

            <div id='faq' data-aos="fade-up" className="jfs-section jfs-faq">
                <h1><FaQuestionCircle /> Frequently Asked Questions</h1>
                <p><FaQuestionCircle /> Get answers to common questions regarding course duration, certification, and more to make an informed decision.</p>
            </div>

            <div data-aos="fade-up" className="jfs-section jfs-details">
                <h1><FaBook /> Course Details</h1>
                <p><FaClipboardCheck /> This course spans over 12 weeks, including theory, practical projects, and assessments.</p>
            </div>

            <div data-aos="fade-up" className="jfs-section jfs-course-benefits">
                <h1><FaArrowRight /> Course Benefits</h1>
                <p><FaArrowRight /> Upon completion, you will have the skills to build full-fledged web applications, understand server-client architecture, and be ready for the job market.</p>
            </div>

            <div data-aos="fade-up" className="jfs-section jfs-profile">
                <h1 style={{color:"navy"}}><FaUserAlt /> Instructor Profile</h1>
                <p><FaUserAlt /> Learn from industry experts with years of experience in Java full stack development.</p>
            </div>

            <div data-aos="fade-up" className="jfs-section jfs-global">
                <h1><FaGlobe /> Global Reach</h1>
                <p><FaGlobe /> Join a global network of developers and expand your professional opportunities worldwide.</p>
            </div>

            <div data-aos="fade-up" className="jfs-section jfs-analytics">
                <h1><FaRegChartBar /> Performance Analytics</h1>
                <p><FaRegChartBar /> Track your progress and understand your strengths and areas for improvement through detailed analytics.</p>
            </div>
            <Credentials/>
        </div>

        </div>
    );
};

export default JavaFullStack;
