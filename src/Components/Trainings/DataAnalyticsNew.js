import React from 'react';
import './DataanalyticsNew.css';
import { 
    FaChartBar, FaDatabase, FaCog, FaSchool, FaChartPie, FaUsers, FaCloud, FaQuestionCircle,
    FaChartLine, FaCode, FaExchangeAlt, FaArrowUp, FaLightbulb, FaBriefcase, FaTools, FaUserCircle, FaLaptop, FaClipboardList 
} from 'react-icons/fa'; 
import Credentials from '../credentials/credentials';

const DataAnalyticsNew = () => {
    return (
        <div data-aos="flip-left" className="DaN-container">
            <header className="DaN-header">
                <h1 className="DaN-header-title"><FaChartBar /> Data Analytics Mastery</h1>
                <p className="DaN-header-description">Dive into the world of data analytics and unlock the potential of data-driven decision making.</p>
            </header>

            <section data-aos="fade-up" className="DaN-skills">
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

            <section data-aos="fade-up" className="DaN-tools">
                <h2 className="DaN-section-title"><FaChartLine /> Tools You Will Use</h2>
                <div className="DaN-tools-list">
                    <div className="DaN-tool-item"><FaTools /> SQL & NoSQL Databases</div>
                    <div className="DaN-tool-item"><FaLaptop /> Python for Data Analysis</div>
                    <div className="DaN-tool-item"><FaChartPie /> Tableau & Power BI</div>
                    <div className="DaN-tool-item"><FaBriefcase /> Google Analytics</div>
                    <div className="DaN-tool-item"><FaClipboardList /> Excel & Spreadsheets</div>
                </div>
            </section>

            <section data-aos="fade-up" className="DaN-career">
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

            <section data-aos="fade-up" className="DaN-faq">
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
    );
};

export default DataAnalyticsNew;
