import React from 'react';
import './JFS.css';
import { 
    FaTools, FaLaptopCode, FaGraduationCap, FaQuestionCircle, FaBook, 
    FaStar, FaArrowRight, FaUserAlt, FaGlobe, FaRegChartBar, FaCodeBranch, 
    FaDatabase, FaServer, FaDesktop, FaClipboardCheck, FaCogs 
} from 'react-icons/fa';
import Credentials from '../credentials/credentials';

const JavaFullStack = () => {
    return (
        <div data-aos="flip-right" className="jfs-container">
            <div className="jfs-header">
                <h1 className="jfs-title">Java Full Stack Development</h1>
                <p className="jfs-description">Build cutting-edge applications with a complete skill set in frontend and backend technologies! Perfect for beginners and experienced developers looking to enhance their skill set.</p>
            </div>

            <div className="jfs-section jfs-skills">
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

            <div data-aos="fade-up" className="jfs-section jfs-tools">
                <h1><FaTools /> Modules And Tools</h1>
                <p><FaCogs /> Hands-on experience with tools like Eclipse, IntelliJ, Git, Docker, and Jenkins to streamline the development process.</p>
            </div>

            <div data-aos="fade-up" className="jfs-section jfs-career">
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

            <div data-aos="fade-up" className="jfs-section jfs-faq">
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
    );
};

export default JavaFullStack;
