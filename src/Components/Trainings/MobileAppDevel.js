import React, { useState } from 'react';
import './MobileAppDevel.css';
import { 
    FaMobileAlt, FaTools, FaUserGraduate, FaCheckCircle, FaQuestionCircle, FaBook, 
    FaStar, FaRocket, FaApple, FaAndroid, FaCode, FaLaptopCode, FaDatabase, 
    FaCloud, FaSyncAlt, FaBug, FaCogs, FaProjectDiagram, FaJsSquare, FaHtml5, FaCss3Alt,
    FaGitAlt, FaGithub, FaPalette, FaServer, FaShieldAlt
} from 'react-icons/fa';
import Credentials from '../credentials/credentials';

const MobileAppDevel = () => {


    const [activeIndex, setActiveIndex] = useState(null);

    const syllabus = [
        {
            title: "Introduction to Mobile App Development",
            content: [
                "Learn the fundamentals of mobile app development.",
                "Understand the differences between native, hybrid, and cross-platform applications.",
                "Explore the mobile development ecosystem and tools."
            ]
        },
        {
            title: "UI/UX Design Principles",
            content: [
                "Understand the basics of designing intuitive and engaging user interfaces.",
                "Learn to use tools like Figma or Adobe XD for prototyping and design.",
                "Explore color theory, typography, and user-centered design."
            ]
        },
        {
            title: "React Native",
            content: [
                "Build cross-platform apps using React Native.",
                "Learn about reusable components and fast development cycles.",
                "Understand navigation, styling, and device APIs in React Native."
            ]
        },
        {
            title: "Flutter Framework",
            content: [
                "Learn Flutter to create beautiful, high-performance applications.",
                "Understand the differences between Flutter and other frameworks like React Native.",
                "Create mobile apps for both Android and iOS from a single codebase."
            ]
        },
        {
            title: "Backend Integration",
            content: [
                "Connect mobile apps to backend services like Firebase.",
                "Learn how to use REST APIs or GraphQL for real-time data interaction.",
                "Understand user authentication and data storage in mobile apps."
            ]
        },
        {
            title: "State Management",
            content: [
                "Master state management techniques using Context API, Redux, or Provider.",
                "Learn about managing app state in large-scale applications.",
                "Explore data flow and performance optimization in React Native and Flutter."
            ]
        },
        {
            title: "Publishing and Deployment",
            content: [
                "Learn how to publish apps on the Google Play Store and Apple App Store.",
                "Understand app submission guidelines for both platforms.",
                "Get familiar with app versioning, beta testing, and updates."
            ]
        },
        {
            title: "Capstone Projects",
            content: [
                "Develop fully functional mobile apps, such as a food delivery app or a fitness tracker.",
                "Showcase your skills with real-world project development.",
                "Focus on the full app lifecycle, from idea conception to deployment."
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
            

        <div data-aos="fade-up" className="mobile-container">
            <div className="mobile-header">
                <h1 style={{marginTop:"58px"}}  className="mobile-header-title"><FaMobileAlt /> Mobile App Development</h1>
                <p className="mobile-header-description">Build cutting-edge applications with a complete skill set in Mobile App Development technologies! Perfect for beginners and experienced developers looking to enhance their skill set.</p>
            </div>

            <div id='skills' data-aos="fade-up" className="mobile-section mobile-skills">
                <h1 className="mobile-section-title"><FaCode /> Skills You Will Learn</h1>
                <ul className="mobile-list">
                    <li className="mobile-list-item"><FaLaptopCode /> React Native and Flutter development</li>
                    <li className="mobile-list-item"><FaApple /> iOS (Swift) and <FaAndroid /> Android (Kotlin) programming</li>
                    <li className="mobile-list-item"><FaSyncAlt /> Cross-platform compatibility</li>
                    <li className="mobile-list-item"><FaCogs /> Mobile UI/UX design principles</li>
                    <li className="mobile-list-item"><FaDatabase /> Backend integration with Firebase and REST APIs</li>
                    <li className="mobile-list-item"><FaRocket /> Performance optimization for mobile apps</li>
                    <li className="mobile-list-item"><FaJsSquare /> JavaScript for mobile apps</li>
                    <li className="mobile-list-item"><FaHtml5 /> HTML5 Basics for mobile</li>
                    <li className="mobile-list-item"><FaCss3Alt /> CSS3 for mobile styling</li>
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


            <div id='modules' data-aos="fade-up" className="mobile-section mobile-tools">
                <h1 className="mobile-section-title"><FaTools /> Modules And Tools</h1>
                <p className="mobile-section-description">Hands-on experience with tools like Android Studio, Xcode, Git, Visual Studio Code, and Postman to streamline the development process and ensure quality builds.</p>
                <ul className="mobile-list">
                    <li className="mobile-list-item"><FaGitAlt /> Git version control</li>
                    <li className="mobile-list-item"><FaGithub /> GitHub collaboration</li>
                    <li className="mobile-list-item"><FaCloud /> Cloud Services Integration</li>
                    <li className="mobile-list-item"><FaServer /> Server Management</li>
                    <li className="mobile-list-item"><FaShieldAlt /> Security for Mobile Apps</li>
                </ul>
            </div>

            <div id='career' data-aos="fade-up" className="mobile-section mobile-career">
                <h1 className="mobile-section-title"><FaUserGraduate /> Career Opportunities</h1>
                <p className="mobile-section-description">Graduates can explore roles such as Mobile App Developer, React Native Engineer, iOS Developer, and Android Developer. The demand for skilled mobile app developers is growing rapidly, making this a lucrative career path.</p>
            </div>

            <div data-aos="fade-up" className="mobile-section mobile-benefits">
                <h1 className="mobile-section-title"><FaStar /> Why Choose This Course</h1>
                <ul className="mobile-list">
                    <li className="mobile-list-item"><FaProjectDiagram /> Comprehensive curriculum covering major mobile development frameworks</li>
                    <li className="mobile-list-item"><FaCheckCircle /> Project-based learning to build a strong portfolio</li>
                    <li className="mobile-list-item"><FaTools /> Industry-relevant tools and technologies</li>
                    <li className="mobile-list-item"><FaUserGraduate /> Guidance from experienced instructors</li>
                </ul>
            </div>

            <div id='faq' data-aos="fade-up" className="mobile-section mobile-faq">
                <h1 className="mobile-section-title"><FaQuestionCircle /> Frequently Asked Questions</h1>
                <p className="mobile-section-description">Find answers to common questions regarding course duration, certifications, prerequisites, and more to help you make an informed decision.</p>
            </div>

            <div data-aos="fade-up" className="mobile-section mobile-details">
                <h1 className="mobile-section-title"><FaBook /> Course Details</h1>
                <p className="mobile-section-description">This course spans over 16 weeks, including theoretical lessons, practical projects, real-world case studies, and assessments to ensure deep learning and retention.</p>
            </div>

            <div data-aos="fade-up" className="mobile-section mobile-benefits-summary">
                <h1 className="mobile-section-title"><FaCheckCircle /> Course Benefits</h1>
                <p className="mobile-section-description">Upon completion, you will have the skills to build complete, high-performance mobile applications, understand mobile architecture, and be ready for the competitive job market.</p>
            </div>
            <Credentials/>
        </div>

        </div>

    );
};

export default MobileAppDevel;
