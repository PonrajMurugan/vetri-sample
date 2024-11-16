import React, { useState, useEffect } from 'react';
import './PYFS.css';
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaGithub, FaUserTie, FaLaptopCode, FaServer, FaGlobeAmericas, FaTools, FaQuestionCircle } from 'react-icons/fa';
import { SiDjango, SiMysql, SiFlask, SiBootstrap } from 'react-icons/si';
import Footer from '../Footer/footer';

const Pyfs = () => {
    const skills = [
        { icon: <FaPython />, name: 'Python' },
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3Alt />, name: 'CSS3' },
        { icon: <FaJsSquare />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'ReactJS' },
        { icon: <SiDjango />, name: 'Django' },
        { icon: <SiFlask />, name: 'Flask' },
        { icon: <SiMysql />, name: 'MySQL' },
        { icon: <FaDatabase />, name: 'Database' },
        { icon: <SiBootstrap />, name: 'Bootstrap' },
        { icon: <FaGithub />, name: 'GitHub' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 2000);
        return () => clearInterval(interval); 
    }, []);

    return (
        <div>
        <div className="course-container">
            <header className="course-header">
                <h1 className='course-after'>Python Full Stack Development</h1>
                <p>
                    Build cutting-edge applications with a complete skill set in frontend and backend technologies!
                    Perfect for beginners and experienced developers looking to enhance their skill set.
                </p>
            </header>

            <div className="course-content">
                <section className="course-overview">
                    {/* <h2>Course Overview</h2>
                    <p>
                        Dive into the world of web development with Python. This course offers an in-depth understanding of essential technologies,
                        empowering you to build scalable and dynamic web applications. Whether you're new or experienced, our curriculum is designed to elevate your skills!
                    </p> */}
                </section>

                <section className="course-skills">
                    <h2 className="module-heading">Skills You Will Learn</h2>
                    <div className="carousel-container">
                        <div className="carousel-content" style={{ transform: `translateX(-${(currentIndex % (skills.length - 4)) * 100 / 5}%)` }}>
                            {skills.map((skill, index) => (
                                <div className="skill" key={index}>
                                    <div className="skill-icon">{skill.icon}</div>
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <h2 className="module-heading">Modules & Tools</h2>
                <section className="course-modules">
                    <div className="module">
                        <h3><FaPython /> Python Programming</h3>
                        <p>Learn Python, the most versatile and beginner-friendly programming language, to write efficient and maintainable code.</p>
                    </div>
                    <div className="module">
                        <h3><SiDjango /> Django Framework</h3>
                        <p>Master Django to develop robust backend systems with clean architecture and built-in security features.</p>
                    </div>
                    <div className="module">
                        <h3><SiFlask /> Flask Framework</h3>
                        <p>Understand Flask for lightweight and fast application development with flexibility for extensions.</p>
                    </div>
                    <div className="module">
                        <h3><FaHtml5 /> HTML5 & <FaCss3Alt /> CSS3</h3>
                        <p>Design responsive and accessible websites using HTML5 for structure and CSS3 for styling.</p>
                    </div>
                    <div className="module">
                        <h3><FaJsSquare /> JavaScript</h3>
                        <p>Enhance user interactivity with advanced JavaScript techniques, including ES6 features.</p>
                    </div>
                    <div className="module">
                        <h3><FaReact /> ReactJS</h3>
                        <p>Build dynamic, single-page applications with ReactJS, leveraging component-based architecture and hooks.</p>
                    </div>
                    <div className="module">
                        <h3><FaDatabase /> Database (MySQL)</h3>
                        <p>Learn to design and manage relational databases using MySQL for efficient data storage and retrieval.</p>
                    </div>
                    <div className="module">
                        <h3><SiBootstrap /> Bootstrap</h3>
                        <p>Create mobile-first, responsive designs effortlessly with Bootstrap’s utility classes and components.</p>
                    </div>
                    <div className="module">
                        <h3><FaGithub /> GitHub</h3>
                        <p>Master version control and collaborate on projects using Git and GitHub repositories.</p>
                    </div>
                </section>

                <section class="career-opportunities">
    <h2 class="section-title">Career Opportunities</h2>
    <div class="career-container">
        <div class="career-item">
            <div class="career-icon">
                <i class="fas fa-laptop-code"></i>
            </div>
            <div class="career-info">
                <h3>Frontend Developer</h3>
                <p>Join our dynamic team to create modern, user-friendly interfaces using cutting-edge technologies.</p>
            </div>
        </div>
        <div class="career-item">
            <div class="career-icon">
                <i class="fas fa-cogs"></i>
            </div>
            <div class="career-info">
                <h3>Backend Developer</h3>
                <p>Build robust server-side solutions, optimize performance, and work with databases.</p>
            </div>
        </div>
        <div class="career-item">
            <div class="career-icon">
                <i class="fas fa-chart-line"></i>
            </div>
            <div class="career-info">
                <h3>Data Analyst</h3>
                <p>Analyze trends, create reports, and provide insights to guide our product decisions.</p>
            </div>
        </div>
        {/* <div class="career-item">
            <div class="career-icon">
                <i class="fas fa-users"></i>
            </div>
            <div class="career-info">
                <h3>Human Resources</h3>
                <p>Manage employee relations, recruitment, and create a thriving work environment.</p>
            </div>
        </div> */}
    </div>
    {/* <a href="#" class="career-cta">Explore More Opportunities</a> */}
</section>

                <section className="course-benefits">
                    <h2>Why Choose This Course?</h2>
                    <ul>
                        <li>Comprehensive curriculum covering frontend and backend development.</li>
                        <li>Hands-on projects to build a robust portfolio.</li>
                        <li>Dedicated mentors for guidance and career support.</li>
                        <li>Flexible learning options with online and offline availability.</li>
                        <li>Industry-recognized certification upon completion.</li>
                    </ul>
                </section>

                <section className="course-faq">
    <h2>Frequently Asked Questions</h2>
    <div className="faq-item">
        <div className="faq-icon">
            <FaQuestionCircle />
        </div>
        <div>
            <h3>Who is this course for?</h3>
            <p>This course is ideal for aspiring developers, IT professionals, or anyone looking to start or advance their career in web development.</p>
        </div>
    </div>
    <div className="faq-item">
        <div className="faq-icon">
            <FaQuestionCircle />
        </div>
        <div>
            <h3>Do I need prior experience?</h3>
            <p>No prior coding experience is required! The course starts with beginner-friendly concepts and progresses to advanced topics.</p>
        </div>
    </div>
</section>


<div class="course-info-wrapper">
    <section class="course-details">
        <h2 class="section-title">Course Details</h2>
        <div class="details-wrapper">
            <div class="details-item">
                <i class="fas fa-calendar-alt"></i>
                <strong class="details-label">Duration:</strong>
                <p class="details-text">6 months (Full-Time / Part-time)</p>
            </div>
            <div class="details-item">
                <i class="fas fa-laptop"></i>
                <strong class="details-label">Mode:</strong>
                <p class="details-text">Online/Offline</p>
            </div>
            <div class="details-item">
                <i class="fas fa-certificate"></i>
                <strong class="details-label">Certification:</strong>
                <p class="details-text">Industry-recognized certificate</p>
            </div>
            <div class="details-item">
                <i class="fas fa-project-diagram"></i>
                <strong class="details-label">Capstone Projects:</strong>
                <p class="details-text">Build real-world projects</p>
            </div>
        </div>
    </section>

    <section class="course-benefits">
        <h2 class="section-title">Course Benefits</h2>
        <div class="benefits-wrapper">
            <div class="benefit-item">
                <i class="fas fa-trophy"></i>
                <strong class="benefit-label">Expert Trainers</strong>
                <p class="benefit-text">Learn from industry experts with years of experience.</p>
            </div>
            <div class="benefit-item">
                <i class="fas fa-users"></i>
                <strong class="benefit-label">Peer Learning</strong>
                <p class="benefit-text">Collaborate and grow with a supportive peer community.</p>
            </div>
            <div class="benefit-item">
                <i class="fas fa-briefcase"></i>
                <strong class="benefit-label">Job Assistance</strong>
                <p class="benefit-text">Access job placement support upon course completion.</p>
            </div>
            <div class="benefit-item">
                <i class="fas fa-book-open"></i>
                <strong class="benefit-label">Comprehensive Resources</strong>
                <p class="benefit-text">Access to a wide range of learning materials and tools.</p>
            </div>
        </div>
    </section>
</div>



            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Pyfs;
