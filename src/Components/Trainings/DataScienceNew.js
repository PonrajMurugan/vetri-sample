import React from 'react';
import './DataScienceNew.css';
import { 
    FaChartBar, FaDatabase, FaCogs, FaLaptopCode, FaSchool, FaBriefcase, FaQuestionCircle,
    FaLightbulb, FaTools, FaChartLine, FaClipboardList 
} from 'react-icons/fa';
import Credentials from '../credentials/credentials';

const DataScienceNew = () => {
    return (
        <div data-aos="flip-right" className="dsn-container">
            <section className="dsn-intro">
                <h1 className="dsn-title"><FaChartBar /> Data Science</h1>
                <p className="dsn-description">Data science is the study of data to extract meaningful insights and knowledge. Data scientists use scientific methods, algorithms, and programming to collect, analyze, and interpret large amounts of data.</p>
            </section>

            <section data-aos="fade-up" className="dsn-skills">
                <h2 className="dsn-section-title"><FaCogs /> Skills You Will Learn</h2>
                <div className="dsn-skills-list">
                    <div data-aos="fade-down" className="dsn-skill-item"><FaDatabase /> Data Cleaning & Preprocessing</div>
                    <div data-aos="fade-down" className="dsn-skill-item"><FaChartLine /> Data Visualization</div>
                    <div data-aos="fade-down" className="dsn-skill-item"><FaLaptopCode /> Machine Learning Algorithms</div>
                    <div data-aos="fade-down" className="dsn-skill-item"><FaLightbulb /> Problem Solving</div>
                    <div data-aos="fade-down" className="dsn-skill-item"><FaTools /> Statistical Analysis</div>
                </div>
            </section>

            <section data-aos="fade-up" className="dsn-modules">
                <h2 className="dsn-section-title"><FaLaptopCode /> Modules And Tools</h2>
                <div className="dsn-modules-list">
                    <div data-aos="fade-down" className="dsn-module-item"><FaChartLine /> Python for Data Science</div>
                    <div data-aos="fade-down" className="dsn-module-item"><FaDatabase /> SQL & NoSQL Databases</div>
                    <div data-aos="fade-down" className="dsn-module-item"><FaBriefcase /> Machine Learning Tools</div>
                    <div data-aos="fade-down" className="dsn-module-item"><FaClipboardList /> Data Wrangling</div>
                </div>
            </section>

            <section data-aos="fade-up" className="dsn-career">
                <h2 className="dsn-section-title"><FaSchool /> Career Opportunities</h2>
                <p className="dsn-career-description">As a data science graduate, you will be ready to pursue roles like Data Scientist, Data Analyst, Business Intelligence Analyst, and Machine Learning Engineer in various industries.</p>
            </section>

            <section data-aos="fade-up" className="dsn-why-choose">
                <h2 className="dsn-section-title"><FaLightbulb /> Why Choose This Course?</h2>
                <ul className="dsn-benefits-list">
                    <li><FaBriefcase /> Hands-on projects & case studies</li>
                    <li><FaChartBar /> Exposure to real-world datasets</li>
                    <li><FaSchool /> Industry-recognized certification</li>
                    <li><FaQuestionCircle /> Guidance from expert instructors</li>
                </ul>
            </section>

            <section data-aos="fade-up" className="dsn-faq">
                <h2 className="dsn-section-title"><FaQuestionCircle /> Frequently Asked Questions</h2>
                <p className="dsn-faq-description">Explore answers to questions related to course duration, prerequisites, and more.</p>
            </section>

            <section data-aos="fade-up" className="dsn-course-details">
                <h2 className="dsn-section-title"><FaClipboardList /> Course Details</h2>
                <p className="dsn-details-description">The course is 12 weeks long, covering essential data science concepts, tools, and techniques with hands-on projects.</p>
            </section>

            <section data-aos="fade-up" className="dsn-course-benefits">
                <h2 className="dsn-section-title"><FaChartBar /> Course Benefits</h2>
                <ul className="dsn-benefits-list">
                    <li><FaSchool /> Learn from industry experts</li>
                    <li><FaTools /> Gain proficiency in tools like Python, R, SQL</li>
                    <li><FaLightbulb /> Build strong problem-solving skills</li>
                </ul>
            </section>

            <Credentials />
        </div>
    );
};

export default DataScienceNew;
