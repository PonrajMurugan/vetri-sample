import React, { useState } from 'react';
import './DataScienceNew.css';
import { 
    FaChartBar, FaDatabase, FaCogs, FaLaptopCode, FaSchool, FaBriefcase, FaQuestionCircle,
    FaLightbulb, FaTools, FaChartLine, FaClipboardList 
} from 'react-icons/fa';
import Credentials from '../credentials/credentials';

const DataScienceNew = () => {


    const [activeIndex, setActiveIndex] = useState(null);

    const syllabus = [
        {
            title: "Introduction to Data Science",
            content: "Learn the fundamentals of data science, including key concepts, the data science process, and how data science is applied in various industries."
        },
        {
            title: "Python for Data Science",
            content: "Get hands-on with Python programming, one of the most popular languages in data science. Learn how to use libraries like Pandas, NumPy, and Matplotlib."
        },
        {
            title: "Data Collection and Preparation",
            content: "Master techniques for data collection, cleaning, and preprocessing to ensure your data is ready for analysis and modeling."
        },
        {
            title: "Exploratory Data Analysis (EDA)",
            content: "Explore and analyze data using statistical methods and visualizations to uncover patterns, trends, and outliers."
        },
        {
            title: "Statistical Inference",
            content: "Learn statistical concepts such as probability, distributions, hypothesis testing, and how they apply to data science problems."
        },
        {
            title: "Machine Learning Basics",
            content: "Understand the basic concepts of machine learning, including supervised and unsupervised learning, and algorithms like regression, classification, and clustering."
        },
        {
            title: "Deep Learning & Neural Networks",
            content: "Dive into the world of deep learning and understand how neural networks are used to solve complex problems in image recognition, natural language processing, and more."
        },
        {
            title: "Model Evaluation and Optimization",
            content: "Learn to evaluate machine learning models, optimize them, and ensure they are generalizable and performant."
        },
        {
            title: "Big Data and Cloud Computing",
            content: "Understand how to work with big data technologies like Hadoop and Spark, and how to leverage cloud computing platforms like AWS and Google Cloud."
        },
        {
            title: "Capstone Project",
            content: "Apply your knowledge on a real-world dataset to build a complete data science pipeline, from data collection to model deployment."
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
                   
                </ul>
            </nav>


        <div data-aos="flip-right" className="dsn-container">
            <section className="dsn-intro">
                <h1 className="dsn-title"><FaChartBar /> Data Science</h1>
                <p className="dsn-description">Data science is the study of data to extract meaningful insights and knowledge. Data scientists use scientific methods, algorithms, and programming to collect, analyze, and interpret large amounts of data.</p>
            </section>

            <section id='skills' data-aos="fade-up" className="dsn-skills">
                <h2 className="dsn-section-title"><FaCogs /> Skills You Will Learn</h2>
                <div className="dsn-skills-list">
                    <div data-aos="fade-down" className="dsn-skill-item"><FaDatabase /> Data Cleaning & Preprocessing</div>
                    <div data-aos="fade-down" className="dsn-skill-item"><FaChartLine /> Data Visualization</div>
                    <div data-aos="fade-down" className="dsn-skill-item"><FaLaptopCode /> Machine Learning Algorithms</div>
                    <div data-aos="fade-down" className="dsn-skill-item"><FaLightbulb /> Problem Solving</div>
                    <div data-aos="fade-down" className="dsn-skill-item"><FaTools /> Statistical Analysis</div>
                </div>
            </section>

            <div id='syllabus' className="ds-syllabus-container">
            <h2 className="ds-section-heading">Syllabus</h2>
            <ul className="ds-syllabus-list">
                {syllabus.map((item, index) => (
                    <li key={index} className="ds-syllabus-item">
                        <div className="ds-syllabus-header" onClick={() => toggleContent(index)}>
                            <span>{item.title}</span>
                            <span className="ds-toggle-icon">{activeIndex === index ? "-" : "+"}</span>
                        </div>
                        {activeIndex === index && <p className="ds-syllabus-content">{item.content}</p>}
                    </li>
                ))}
            </ul>
        </div>

            <section id='modules' data-aos="fade-up" className="dsn-modules">
                <h2 className="dsn-section-title"><FaLaptopCode /> Modules And Tools</h2>
                <div className="dsn-modules-list">
                    <div data-aos="fade-down" className="dsn-module-item"><FaChartLine /> Python for Data Science</div>
                    <div data-aos="fade-down" className="dsn-module-item"><FaDatabase /> SQL & NoSQL Databases</div>
                    <div data-aos="fade-down" className="dsn-module-item"><FaBriefcase /> Machine Learning Tools</div>
                    <div data-aos="fade-down" className="dsn-module-item"><FaClipboardList /> Data Wrangling</div>
                </div>
            </section>

            <section id='career' data-aos="fade-up" className="dsn-career">
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

            <section id='faq' data-aos="fade-up" className="dsn-faq">
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

                    
        </div>

    );
};

export default DataScienceNew;
