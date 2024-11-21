import React, { useState } from 'react';
import './DataanalyticsNew.css';
import { 
    FaChartBar, FaDatabase, FaCog, FaSchool, FaChartPie, FaUsers, FaCloud, FaQuestionCircle,
    FaChartLine, FaCode, FaExchangeAlt, FaArrowUp, FaLightbulb, FaBriefcase, FaTools, FaUserCircle, FaLaptop, FaClipboardList, 
    FaBrain
} from 'react-icons/fa'; 
import Credentials from '../credentials/credentials';

import {  FaProjectDiagram, FaRobot, FaCogs, FaLayerGroup } from "react-icons/fa"; 
import { GiArtificialIntelligence, GiTimeTrap } from "react-icons/gi"; 
import { SiGooglecloud, SiTableau } from "react-icons/si"; 

const DataAnalyticsNew = () => {


    const [activeIndex, setActiveIndex] = useState(null);

    const syllabus = [
      {
        title: "Introduction to Data Analytics",
        icon: <FaDatabase />,
        content: [
          "Understand the basics of data analytics.",
          "Key concepts and terminologies.",
          "Importance of data-driven decisions."
        ]
      },
      {
        title: "Data Collection and Cleaning",
        icon: <FaCogs />,
        content: [
          "Techniques for collecting data from various sources.",
          "Cleaning data to ensure accuracy and consistency.",
          "Handling missing data and outliers."
        ]
      },
      {
        title: "Exploratory Data Analysis (EDA)",
        icon: <FaChartBar />,
        content: [
          "Master EDA techniques to uncover insights.",
          "Using visualization tools like Matplotlib and Seaborn.",
          "Identifying trends and patterns in the data."
        ]
      },
      {
        title: "Statistics for Data Analysis",
        icon: <FaLayerGroup />,
        content: [
          "Develop a strong foundation in statistical methods.",
          "Hypothesis testing and probability distributions.",
          "Statistical significance and confidence intervals."
        ]
      },
      {
        title: "Data Visualization",
        icon: <SiTableau />,
        content: [
          "Learn to create compelling visualizations.",
          "Using tools like Tableau, Power BI, and Python libraries.",
          "Effective data storytelling using visual aids."
        ]
      },
      {
        title: "Machine Learning Basics",
        icon: <FaRobot />,
        content: [
          "Understanding supervised and unsupervised learning.",
          "Algorithms like linear regression and clustering.",
          "Evaluating machine learning models."
        ]
      },
      {
        title: "Big Data Technologies",
        icon: <FaDatabase />,
        content: [
          "Introduction to Big Data tools like Hadoop and Spark.",
          "Processing large datasets.",
          "Introduction to distributed computing."
        ]
      },
      {
        title: "Capstone Project",
        icon: <FaProjectDiagram />,
        content: [
          "Work on real-world datasets.",
          "Apply your skills in a hands-on project.",
          "Examples: customer segmentation or sales forecasting."
        ]
      },
      {
        title: "Time Series Analysis",
        icon: <GiTimeTrap />,
        content: [
          "Analyzing temporal data.",
          "Modeling trends and forecasting future values.",
          "Techniques like ARIMA and exponential smoothing."
        ]
      },
      {
        title: "Deep Learning Fundamentals",
        icon: <FaRobot />,
        content: [
          "Introduction to neural networks and deep learning.",
          "Backpropagation and training deep models.",
          "Using frameworks like TensorFlow and Keras."
        ]
      },
      {
        title: "Natural Language Processing (NLP)",
        icon: <FaRobot />,
        content: [
          "Working with text data.",
          "Techniques like tokenization and sentiment analysis.",
          "Building chatbots and NLP applications."
        ]
      },
      {
        title: "Data Ethics and Privacy",
        icon: <FaCogs />,
        content: [
          "Understanding ethical considerations in data analytics.",
          "Data privacy laws and security measures.",
          "Ensuring compliance with regulations like GDPR."
        ]
      },
      {
        title: "Data-Driven Decision Making",
        icon: <FaChartBar />,
        content: [
          "Using data to drive business decisions.",
          "Improving operational efficiency with analytics.",
          "Measuring performance and making informed decisions."
        ]
      },
      {
        title: "Advanced Machine Learning",
        icon: <GiArtificialIntelligence />,
        content: [
          "Diving deeper into advanced machine learning algorithms.",
          "Techniques like random forests and support vector machines.",
          "Handling complex tasks like image recognition."
        ]
      },
      {
        title: "Cloud Computing for Data Analytics",
        icon: <SiGooglecloud />,
        content: [
          "Using cloud platforms like AWS and Google Cloud.",
          "Storing and processing large datasets in the cloud.",
          "Scaling analytics solutions for big data."
        ]
      },
      {
        title: "Data Mining and Predictive Modeling",
        icon: <FaDatabase />,
        content: [
          "Learn the fundamentals of data mining.",
          "Techniques like classification, clustering, and association rules.",
          "Building predictive models using historical data."
        ]
      },
      {
        title: "Data Warehousing and ETL",
        icon: <FaLayerGroup />,
        content: [
          "Introduction to data warehousing concepts.",
          "ETL (Extract, Transform, Load) processes.",
          "Using tools like Apache NiFi, Talend, and AWS Glue."
        ]
      },
      {
        title: "AI and Automation in Data Analytics",
        icon: <GiArtificialIntelligence />,
        content: [
          "Applying AI to automate data processes.",
          "Using machine learning models for decision-making automation.",
          "AI tools and frameworks for data science."
        ]
      }
    ];
      
    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const [selectedFAQ, setSelectedFAQ] = useState(null);

    const toggleFAQVisibility = (faqIndex) => {
      setSelectedFAQ(isFAQVisible(faqIndex) ? null : faqIndex);
    };
  
    const isFAQVisible = (faqIndex) => {
      return selectedFAQ === faqIndex;
    };

      const faqItems = [
        {
          question: "What is data process and management?",
          answer: "Data process and management involve collecting, storing, and organizing data to ensure its accuracy and accessibility for analysis and decision-making."
        },
        {
          question: "What tools are used for advanced data visualization?",
          answer: "Tools like Tableau, Power BI, and Python libraries such as Matplotlib and Seaborn are commonly used for advanced data visualization."
        },
        {
          question: "How is data-driven decision-making applied?",
          answer: "It involves analyzing data to extract insights that guide strategic decisions, ensuring they are based on evidence rather than intuition."
        },
        {
          question: "What is cloud analytics tools management?",
          answer: "It refers to using cloud-based platforms like AWS, Google Cloud, and Azure to analyze, visualize, and manage data efficiently."
        },
        {
          question: "What are the prerequisites for learning data analytics?",
          answer: "Basic knowledge of statistics, Excel, and programming (e.g., Python or R) is recommended. However, many beginner courses cover these foundations."
        }
      ];


 


    return (

        <div>
                        <nav className="fixed-navbar" style={{marginTop:"100px"}}>
                <ul>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#syllabus">Syllabus</a></li>
                    <li><a href="#modules">Modules</a></li>
                    <li><a href="#career">Career</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    {/* <li><a href="#details">Details</a></li> */}
                </ul>
            </nav>

    
        <div data-aos="fade-up" className="DaN-container">
            <header className="DaN-header">
                <h1 style={{paddingTop:"30px"}} className="DaN-header-title dan-pon"><FaChartBar /> Data Analytics Mastery</h1>
                <p className="DaN-header-description dan-raj">Dive into the world of data analytics and unlock the potential of data-driven decision making.</p>
           
                <div data-aos="fade-down">
                        <img className='pyfs-img'  style={{width:"450px",height:"40vh",borderRadius:"50px" , marginTop:"30px"}} src='https://user-images.githubusercontent.com/74038190/213760697-1dc03683-ba49-44f2-985e-95fd5ec22d3f.gif' alt='logo' />

                    </div>

            </header>

            <section id='skills' data-aos="fade-up" className="DaN-skills">
                <h2 style={{fontSize:"1.5rem"}} data-aos="fade-up" className="DaN-section-title dan-pon"><FaCog /> Skills You'll Gain</h2>
                <div data-aos="fade-up" className="DaN-skills-list dan-raj">
                <div data-aos="fade-up" className="DaN-skill-item"><i style={{color:"#f43f5e"}} className="fas fa-database"></i> Data Process & Management</div>
<div data-aos="fade-up" className="DaN-skill-item"><i style={{color:"#f43f5e"}} className="fas fa-chart-pie"></i> Advanced Data Visualization</div>
<div data-aos="fade-up" className="DaN-skill-item"><i style={{color:"#f43f5e"}} className="fas fa-users"></i> Data-Driven Decision Making</div>
<div data-aos="fade-up" className="DaN-skill-item"><i style={{color:"#f43f5e"}} className="fas fa-cloud"></i> Cloud Analytics Tools Management</div>
{/* <div className="DaN-skill-item"><i className="fas fa-code"></i> Coding in Python with faster pro devops</div> */}
<div data-aos="fade-up" className="DaN-skill-item"><i style={{color:"#f43f5e"}} className="fas fa-lightbulb"></i> Problem Solving & Critical Thinking</div>
<div data-aos="fade-up" className="DaN-skill-item"><i style={{color:"#f43f5e"}} className="fas fa-laptop"></i> Data Analytics Tools & Software</div>

                </div>
            </section>

                        <div id="syllabus" className="Data-analy-syllabus-container">
              <h2 data-aos="fade-up" className="Data-analy-section-heading dan-pon">Syllabus</h2>
              <ul data-aos="fade-up" className="Data-analy-syllabus-list dan-raj">
                {syllabus.map((item, index) => (
                  <li key={index} className="Data-analy-syllabus-item">
                    <div className="Data-analy-syllabus-header" onClick={() => toggleContent(index)}>
                      <span  data-aos="fade-up"> {item.icon} &nbsp; &nbsp;  {item.title}</span>
                      <span className="Data-analy-toggle-icon">
                        {activeIndex === index ? (
                          <i className="fa-solid fa-arrow-down"></i> 
                        ) : (
                          <i className="fa-solid fa-arrow-right"></i>  
                        )}
                      </span>
                    </div>
                    {activeIndex === index && (
                      <ul style={{listStyle:"none"}} className="Data-analy-syllabus-content">
                        {item.content.map((point, i) => (
                          <li style={{listStyle:"none"}} key={i} className="Data-analy-syllabus-point">
                            {point}
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



            <section id='modules' data-aos="fade-up" className="DaN-tools">
                <h2 style={{fontSize:"1.5rem"}} data-aos="fade-up" className="DaN-section-title dan-pon"><FaChartLine /> Modules & Tools You Will Use</h2>
                <div data-aos="fade-up" className="DaN-tools-list dan-raj">
                    <div data-aos="fade-up" className="DaN-tool-item"><FaTools style={{paddingTop:"10px"}} /> SQL & NoSQL Databases</div>
                    <div data-aos="fade-up" className="DaN-tool-item"><FaLaptop style={{paddingTop:"10px"}}/> Python for Data Analysis</div>
                    <div data-aos="fade-up" className="DaN-tool-item"><FaChartPie style={{paddingTop:"10px"}} /> Tableau & Power BI</div>
                    <div data-aos="fade-up" className="DaN-tool-item"><FaBriefcase style={{paddingTop:"10px"}} /> Google Analytics</div>
                    <div data-aos="fade-up" className="DaN-tool-item"><FaClipboardList style={{paddingTop:"10px"}} /> Excel & Spreadsheets</div>
                    <div data-aos="fade-up" className="DaN-tool-item"><FaBrain style={{paddingTop:"10px"}} /> ML with Scikit-Learn</div>
                </div>

            </section>

            <section id='career' data-aos="fade-up" className="DaN-career">
                <h2 style={{fontSize:"1.5rem"}} data-aos="fade-up" className="DaN-section-title dan-pon"><FaSchool /> Career Opportunities</h2>
                <p data-aos="fade-up" className="DaN-career-description dan-raj">As a graduate, you will be ready to pursue roles like Data Analyst, Data Scientist, and Business Intelligence Specialist in a variety of industries.</p>
            </section>

            <section data-aos="fade-up" className="DaN-why-choose">
                <h2 style={{fontSize:"1.5rem"}} data-aos="fade-up" className="DaN-section-title dan-pon"><FaArrowUp /> Why Choose This Training ?</h2>
                <ul  style={{listStyle:"none"}}  data-aos="fade-up" className="DaN-benefits-list dan-raj">
                    <li style={{listStyle:"none"}} data-aos="fade-up"><FaLightbulb /> &nbsp;  Comprehensive curriculum with hands-on projects</li>
                    <li  style={{listStyle:"none"}}  data-aos="fade-up"><FaUsers /> &nbsp; Real-world case studies and data sets</li>
                    <li  style={{listStyle:"none"}}  data-aos="fade-up"><FaBriefcase /> &nbsp; Industry-recognized certifications</li>
                    <li  style={{listStyle:"none"}}  data-aos="fade-up"><FaSchool /> &nbsp; Guidance from experienced instructors</li>
                </ul>
            </section>

        <section id="faq" data-aos="fade-up" className="DaN-faq">
      <h2
        style={{ fontSize: "1.5rem" }}
        data-aos="fade-up"
        className="DaN-section-title dan-pon"
      >
        <FaQuestionCircle /> Frequently Asked Questions
      </h2>
      {/* <p data-aos="fade-up" className="DaN-faq-description">
        Explore answers to questions related to course duration, prerequisites, and more.
      </p> */}
      <div className="DaN-faq-list">
        {faqItems.map((faq, index) => (
          <div
            key={index}
            className="DaN-faq-item"
            data-aos="fade-up"
            onClick={() => toggleFAQVisibility(index)}
            style={{
              marginBottom: "1rem",
              cursor: "pointer",
              borderBottom: "1px solid #ddd",
              paddingBottom: "0.5rem"
            }}
          >
            <h3 className='dan-raj'
              style={{
                fontSize: "1.2rem",
                color: "#333",
                marginBottom: "0.5rem"
              }}
            >
             ❓ {faq.question}
            </h3>
            {isFAQVisible(index) && (
              <p className='dan-raj' style={{ fontSize: "1rem", color: "#666" }}> ✅ {faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>

            <section data-aos="fade-up" className="DaN-course-details">
                <h2 style={{fontSize:"1.5rem"}} data-aos="fade-up" className="DaN-section-title dan-pon"><FaExchangeAlt /> Training Details</h2>
                <p data-aos="fade-up" className="DaN-details-description dan-raj">The course is 10 weeks long, covering essential data analytics concepts, tools, and techniques with a final capstone project.</p>
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
