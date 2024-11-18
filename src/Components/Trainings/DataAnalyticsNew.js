import React, { useState } from 'react';
import './DataanalyticsNew.css';
import { 
    FaChartBar, FaDatabase, FaCog, FaSchool, FaChartPie, FaUsers, FaCloud, FaQuestionCircle,
    FaChartLine, FaCode, FaExchangeAlt, FaArrowUp, FaLightbulb, FaBriefcase, FaTools, FaUserCircle, FaLaptop, FaClipboardList 
} from 'react-icons/fa'; 
import Credentials from '../credentials/credentials';

const DataAnalyticsNew = () => {


    const [activeIndex, setActiveIndex] = useState(null);

    const syllabus = [
        {
            title: "Introduction to Data Analytics",
            content: "Understand the basics of data analytics, including key concepts, terminologies, and the importance of data-driven decisions."
        },
        {
            title: "Data Collection and Cleaning",
            content: "Learn techniques for collecting data from various sources and cleaning it to ensure accuracy and consistency."
        },
        {
            title: "Exploratory Data Analysis (EDA)",
            content: "Master EDA techniques to uncover insights, trends, and patterns using visualization tools like Matplotlib and Seaborn."
        },
        {
            title: "Statistics for Data Analysis",
            content: "Develop a strong foundation in statistical methods, hypothesis testing, and probability distributions."
        },
        {
            title: "Data Visualization",
            content: "Learn to create compelling visualizations with tools like Tableau, Power BI, or Python libraries such as Plotly."
        },
        {
            title: "Machine Learning Basics",
            content: "Understand the basics of supervised and unsupervised learning, including algorithms like linear regression and clustering."
        },
        {
            title: "Big Data Technologies",
            content: "Gain exposure to Big Data tools like Hadoop, Spark, and their applications in processing large datasets."
        },
        {
            title: "Capstone Project",
            content: "Work on real-world datasets to apply your skills in a hands-on project, such as customer segmentation or sales forecasting."
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
                    <li><a href="#syllabus">syllabus</a></li>
                    <li><a href="#modules">Modules</a></li>
                    <li><a href="#career">Career</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    {/* <li><a href="#details">Details</a></li> */}
                </ul>
            </nav>

    
        <div data-aos="flip-left" className="DaN-container">
            <header className="DaN-header">
                <h1 style={{paddingTop:"30px"}} className="DaN-header-title"><FaChartBar /> Data Analytics Mastery</h1>
                <p className="DaN-header-description">Dive into the world of data analytics and unlock the potential of data-driven decision making.</p>
            </header>

            <section id='skills' data-aos="fade-up" className="DaN-skills">
                <h2 className="DaN-section-title"><FaCog /> Skills You'll Gain</h2>
                <div className="DaN-skills-list">
                    <div className="DaN-skill-item"><FaDatabase /> Data Processing & Management</div>
                    <div className="DaN-skill-item"><FaChartPie /> Advanced Data Visualization</div>
                    <div className="DaN-skill-item"><FaUsers /> Data-Driven Decision Making</div>
                    <div className="DaN-skill-item"><FaCloud /> Cloud Analytics Tools</div>
                    <div className="DaN-skill-item"><FaCode /> Coding in Python & R</div>
                    <div className="DaN-skill-item"><FaLightbulb /> Problem Solving & Critical Thinking</div>
                    <div className="DaN-skill-item"><FaLaptop /> Data Analytics Tools & Software</div>
                </div>
            </section>

            <div id='syllabus' className="da-syllabus-container">
            <h2 className="da-section-heading">Syllabus</h2>
            <ul className="da-syllabus-list">
                {syllabus.map((item, index) => (
                    <li key={index} className="da-syllabus-item">
                        <div className="da-syllabus-header" onClick={() => toggleContent(index)}>
                            <span>{item.title}</span>
                            <span className="da-toggle-icon">{activeIndex === index ? "-" : "+"}</span>
                        </div>
                        {activeIndex === index && <p className="da-syllabus-content">{item.content}</p>}
                    </li>
                ))}
            </ul>
        </div>

            <section id='modules' data-aos="fade-up" className="DaN-tools">
                <h2 className="DaN-section-title"><FaChartLine /> Modules & Tools You Will Use</h2>
                <div className="DaN-tools-list">
                    <div className="DaN-tool-item"><FaTools /> SQL & NoSQL Databases</div>
                    <div className="DaN-tool-item"><FaLaptop /> Python for Data Analysis</div>
                    <div className="DaN-tool-item"><FaChartPie /> Tableau & Power BI</div>
                    <div className="DaN-tool-item"><FaBriefcase /> Google Analytics</div>
                    <div className="DaN-tool-item"><FaClipboardList /> Excel & Spreadsheets</div>
                </div>
            </section>

            <section id='career' data-aos="fade-up" className="DaN-career">
                <h2 className="DaN-section-title"><FaSchool /> Career Opportunities</h2>
                <p className="DaN-career-description">As a graduate, you will be ready to pursue roles like Data Analyst, Data Scientist, and Business Intelligence Specialist in a variety of industries.</p>
            </section>

            <section data-aos="fade-up" className="DaN-why-choose">
                <h2 className="DaN-section-title"><FaArrowUp /> Why Choose This Course?</h2>
                <ul className="DaN-benefits-list">
                    <li><FaLightbulb /> Comprehensive curriculum with hands-on projects</li>
                    <li><FaUsers /> Real-world case studies and data sets</li>
                    <li><FaBriefcase /> Industry-recognized certifications</li>
                    <li><FaSchool /> Guidance from experienced instructors</li>
                </ul>
            </section>

            <section id='faq' data-aos="fade-up" className="DaN-faq">
                <h2 className="DaN-section-title"><FaQuestionCircle /> Frequently Asked Questions</h2>
                <p className="DaN-faq-description">Explore answers to questions related to course duration, prerequisites, and more.</p>
            </section>

            <section data-aos="fade-up" className="DaN-course-details">
                <h2 className="DaN-section-title"><FaExchangeAlt /> Course Details</h2>
                <p className="DaN-details-description">The course is 10 weeks long, covering essential data analytics concepts, tools, and techniques with a final capstone project.</p>
            </section>

            <footer data-aos="fade-up" className="DaN-footer">
                <p>Get ready to shape the future with data!</p>
            </footer>

            <Credentials/>
        </div>

        </div>
    );
};

export default DataAnalyticsNew;
