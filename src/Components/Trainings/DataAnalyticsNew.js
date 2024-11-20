import React, { useState } from 'react';
import './DataanalyticsNew.css';
import { 
    FaChartBar, FaDatabase, FaCog, FaSchool, FaChartPie, FaUsers, FaCloud, FaQuestionCircle,
    FaChartLine, FaCode, FaExchangeAlt, FaArrowUp, FaLightbulb, FaBriefcase, FaTools, FaUserCircle, FaLaptop, FaClipboardList, 
    FaBrain
} from 'react-icons/fa'; 
import Credentials from '../credentials/credentials';

const DataAnalyticsNew = () => {


    const [activeIndex, setActiveIndex] = useState(null);

    const syllabus = [
        {
          title: "Introduction to Data Analytics",
          content: [
            "Understand the basics of data analytics.",
            "Key concepts and terminologies.",
            "Importance of data-driven decisions."
          ]
        },
        {
          title: "Data Collection and Cleaning",
          content: [
            "Techniques for collecting data from various sources.",
            "Cleaning data to ensure accuracy and consistency.",
            "Handling missing data and outliers."
          ]
        },
        {
          title: "Exploratory Data Analysis (EDA)",
          content: [
            "Master EDA techniques to uncover insights.",
            "Using visualization tools like Matplotlib and Seaborn.",
            "Identifying trends and patterns in the data."
          ]
        },
        {
          title: "Statistics for Data Analysis",
          content: [
            "Develop a strong foundation in statistical methods.",
            "Hypothesis testing and probability distributions.",
            "Statistical significance and confidence intervals."
          ]
        },
        {
          title: "Data Visualization",
          content: [
            "Learn to create compelling visualizations.",
            "Using tools like Tableau, Power BI, and Python libraries.",
            "Effective data storytelling using visual aids."
          ]
        },
        {
          title: "Machine Learning Basics",
          content: [
            "Understanding supervised and unsupervised learning.",
            "Algorithms like linear regression and clustering.",
            "Evaluating machine learning models."
          ]
        },
        {
          title: "Big Data Technologies",
          content: [
            "Introduction to Big Data tools like Hadoop and Spark.",
            "Processing large datasets.",
            "Introduction to distributed computing."
          ]
        },
        {
          title: "Capstone Project",
          content: [
            "Work on real-world datasets.",
            "Apply your skills in a hands-on project.",
            "Examples: customer segmentation or sales forecasting."
          ]
        },
        {
          title: "Time Series Analysis",
          content: [
            "Analyzing temporal data.",
            "Modeling trends and forecasting future values.",
            "Techniques like ARIMA and exponential smoothing."
          ]
        },
        {
          title: "Deep Learning Fundamentals",
          content: [
            "Introduction to neural networks and deep learning.",
            "Backpropagation and training deep models.",
            "Using frameworks like TensorFlow and Keras."
          ]
        },
        {
          title: "Natural Language Processing (NLP)",
          content: [
            "Working with text data.",
            "Techniques like tokenization and sentiment analysis.",
            "Building chatbots and NLP applications."
          ]
        },
        {
          title: "Data Ethics and Privacy",
          content: [
            "Understanding ethical considerations in data analytics.",
            "Data privacy laws and security measures.",
            "Ensuring compliance with regulations like GDPR."
          ]
        },
        {
          title: "Data-Driven Decision Making",
          content: [
            "Using data to drive business decisions.",
            "Improving operational efficiency with analytics.",
            "Measuring performance and making informed decisions."
          ]
        },
        {
          title: "Advanced Machine Learning",
          content: [
            "Diving deeper into advanced machine learning algorithms.",
            "Techniques like random forests and support vector machines.",
            "Handling complex tasks like image recognition."
          ]
        },
        {
          title: "Cloud Computing for Data Analytics",
          content: [
            "Using cloud platforms like AWS and Google Cloud.",
            "Storing and processing large datasets in the cloud.",
            "Scaling analytics solutions for big data."
          ]
        },
        {
          title: "Data Mining and Predictive Modeling",
          content: [
            "Learn the fundamentals of data mining.",
            "Techniques like classification, clustering, and association rules.",
            "Building predictive models using historical data."
          ]
        },
        {
          title: "Data Warehousing and ETL",
          content: [
            "Introduction to data warehousing concepts.",
            "ETL (Extract, Transform, Load) processes.",
            "Using tools like Apache NiFi, Talend, and AWS Glue."
          ]
        },
        {
          title: "AI and Automation in Data Analytics",
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
                <h1 style={{paddingTop:"30px"}} className="DaN-header-title"><FaChartBar /> Data Analytics Mastery</h1>
                <p className="DaN-header-description">Dive into the world of data analytics and unlock the potential of data-driven decision making.</p>
            </header>

            <section id='skills' data-aos="fade-up" className="DaN-skills">
                <h2 className="DaN-section-title"><FaCog /> Skills You'll Gain</h2>
                <div className="DaN-skills-list">
                    <div className="DaN-skill-item"><FaDatabase /> Data Processing & Management</div>
                    <div className="DaN-skill-item"><FaChartPie /> Advanced Data Visualization</div>
                    <div className="DaN-skill-item"><FaUsers /> Data-Driven Decision Making</div>
                    <div className="DaN-skill-item"><FaCloud /> Cloud Analytics Tools Management</div>
                    {/* <div className="DaN-skill-item"><FaCode /> Coding in Python with faster pro devops</div> */}
                    <div className="DaN-skill-item"><FaLightbulb /> Problem Solving & Critical Thinking</div>
                    <div className="DaN-skill-item"><FaLaptop /> Data Analytics Tools & Software</div>
                </div>
            </section>

            <div id="syllabus" className="Data-analy-syllabus-container">
  <h2 className="Data-analy-section-heading">Syllabus</h2>
  <ul className="Data-analy-syllabus-list">
    {syllabus.map((item, index) => (
      <li key={index} className="Data-analy-syllabus-item">
        <div className="Data-analy-syllabus-header" onClick={() => toggleContent(index)}>
          <span>{item.title}</span>
          <span className="Data-analy-toggle-icon">
            {activeIndex === index ? (
              <i className="fa-solid fa-arrow-down"></i> 
            ) : (
              <i className="fa-solid fa-arrow-right"></i>  
            )}
          </span>
        </div>
        {activeIndex === index && (
          <ul className="Data-analy-syllabus-content">
            {item.content.map((point, i) => (
              <li key={i} className="Data-analy-syllabus-point">
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
                <h2 className="DaN-section-title"><FaChartLine /> Modules & Tools You Will Use</h2>
                <div className="DaN-tools-list">
    <div className="DaN-tool-item"><FaTools /> SQL & NoSQL Databases</div>
    <div className="DaN-tool-item"><FaLaptop /> Python for Data Analysis</div>
    <div className="DaN-tool-item"><FaChartPie /> Tableau & Power BI</div>
    <div className="DaN-tool-item"><FaBriefcase /> Google Analytics</div>
    <div className="DaN-tool-item"><FaClipboardList /> Excel & Spreadsheets</div>
    <div className="DaN-tool-item"><FaBrain /> Machine Learning with Scikit-Learn</div>
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
