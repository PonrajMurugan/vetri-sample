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
            content: "Learn the fundamentals of mobile app development, including the differences between native, hybrid, and cross-platform applications."
        },
        {
            title: "UI/UX Design Principles",
            content: "Understand the basics of designing intuitive and engaging user interfaces using tools like Figma or Adobe XD."
        },
        {
            title: "React Native",
            content: "Build cross-platform apps using React Native with reusable components and fast development cycles."
        },
        {
            title: "Flutter Framework",
            content: "Learn Flutter to create beautiful, high-performance applications for both Android and iOS from a single codebase."
        },
        {
            title: "Backend Integration",
            content: "Connect your mobile apps to backend services like Firebase, REST APIs, or GraphQL for real-time and seamless data interaction."
        },
        {
            title: "State Management",
            content: "Master state management techniques using Context API, Redux, or Provider for scalable app development."
        },
        {
            title: "Publishing and Deployment",
            content: "Learn to publish apps on Google Play Store and Apple App Store, including app submission guidelines."
        },
        {
            title: "Capstone Projects",
            content: "Develop fully functional mobile apps, such as a food delivery app or a fitness tracker, showcasing your skills."
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
            

        <div data-aos="flip-left" className="mobile-container">
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


            <div id='syllabus' className="mb-syllabus-container">
            <h2 className="mb-section-heading">Syllabus</h2>
            <ul className="mb-syllabus-list">
                {syllabus.map((item, index) => (
                    <li key={index} className="mb-syllabus-item">
                        <div className="mb-syllabus-header" onClick={() => toggleContent(index)}>
                            <span>{item.title}</span>
                            <span className="mb-toggle-icon">{activeIndex === index ? "-" : "+"}</span>
                        </div>
                        {activeIndex === index && <p className="mb-syllabus-content">{item.content}</p>}
                    </li>
                ))}
            </ul>
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
