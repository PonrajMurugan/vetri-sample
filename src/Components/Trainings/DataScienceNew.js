import React, { useState } from 'react';
import './DataScienceNew.css';
import { 
    FaChartBar, FaDatabase, FaCogs, FaLaptopCode, FaSchool, FaBriefcase, FaQuestionCircle,
    FaLightbulb, FaTools, FaChartLine, FaClipboardList, 
    FaPython,
    FaCog,
    FaRegChartBar
} from 'react-icons/fa';
import Credentials from '../credentials/credentials';

const DataScienceNew = () => {


    const [activeIndex, setActiveIndex] = useState(null);

    const syllabus = [
        {
            title: "Introduction to Data Science",
            content: [
                "Learn the fundamentals of data science.",
                "Understand the data science process.",
                "Explore how data science is applied in various industries."
            ]
        },
        {
            title: "Python for Data Science",
            content: [
                "Get hands-on with Python programming.",
                "Learn how to use libraries like Pandas, NumPy, and Matplotlib."
            ]
        },
        {
            title: "Data Collection and Preparation",
            content: [
                "Master techniques for data collection.",
                "Learn how to clean and preprocess data for analysis and modeling."
            ]
        },
        {
            title: "Exploratory Data Analysis (EDA)",
            content: [
                "Explore data using statistical methods.",
                "Uncover patterns, trends, and outliers in datasets."
            ]
        },
        {
            title: "Statistical Inference",
            content: [
                "Learn about probability and distributions.",
                "Understand hypothesis testing in data science."
            ]
        },
        {
            title: "Machine Learning Basics",
            content: [
                "Understand supervised and unsupervised learning.",
                "Learn algorithms like regression, classification, and clustering."
            ]
        },
        {
            title: "Deep Learning & Neural Networks",
            content: [
                "Dive into the world of deep learning.",
                "Understand how neural networks are used for image recognition, NLP, etc."
            ]
        },
        {
            title: "Model Evaluation and Optimization",
            content: [
                "Learn techniques for evaluating machine learning models.",
                "Optimize models for better performance."
            ]
        },
        {
            title: "Big Data and Cloud Computing",
            content: [
                "Learn about big data tools like Hadoop and Spark.",
                "Understand cloud computing platforms like AWS and Google Cloud."
            ]
        },
        {
            title: "Capstone Project",
            content: [
                "Apply your knowledge on a real-world dataset.",
                "Build a complete data science pipeline."
            ]
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


        <div data-aos="fade-up" className="dsn-container">
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
    <div data-aos="fade-down" className="dsn-skill-item"><FaPython /> Python Programming</div>
</div>

            </section>

            <div id="syllabus" className="data-science-syllabus-container">
    <h2 className="data-science-section-heading">Syllabus</h2>
    <ul className="data-science-syllabus-list">
        {syllabus.map((item, index) => (
            <li key={index} className="data-science-syllabus-item">
                <div className="data-science-syllabus-header" onClick={() => toggleContent(index)}>
                    <span className="data-science-title">{item.title}</span>
                    <span className="data-science-toggle-icon">
                        {activeIndex === index ? (
                            <i className="fa-solid fa-arrow-down"></i>  
                        ) : (
                            <i className="fa-solid fa-arrow-right"></i>  
                        )}
                    </span>
                </div>
                {activeIndex === index && (
                    <ul className="data-science-syllabus-content">
                        {item.content.map((point, i) => (
                            <li key={i} className="data-science-syllabus-point">
                                <i className="fa-solid fa-circle-dot"></i> {point}
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



            <section id='modules' data-aos="fade-up" className="dsn-modules">
                <h2 className="dsn-section-title"><FaLaptopCode /> Modules And Tools</h2>
                <div className="dsn-modules-list">
    <div data-aos="fade-down" className="dsn-module-item"><FaChartLine /> Python for Data Science</div>
    <div data-aos="fade-down" className="dsn-module-item"><FaDatabase /> SQL & NoSQL Databases</div>
    <div data-aos="fade-down" className="dsn-module-item"><FaBriefcase /> Machine Learning Tools</div>
    <div data-aos="fade-down" className="dsn-module-item"><FaClipboardList /> Data Wrangling</div>
    <div data-aos="fade-down" className="dsn-module-item"><FaCog /> Data Engineering</div> 
    <div data-aos="fade-down" className="dsn-module-item"><FaRegChartBar /> Data Visualization Techniques</div> 
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
