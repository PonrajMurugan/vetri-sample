import React, { useState, useEffect } from 'react';
import './PYFS.css';
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaGithub, FaUserTie, FaLaptopCode, FaServer, FaGlobeAmericas, FaTools, FaQuestionCircle } from 'react-icons/fa';
import { SiDjango, SiMysql, SiFlask, SiBootstrap } from 'react-icons/si';
import Footer from '../Footer/footer';
import Credentials from '../credentials/credentials';
import placement from '../Images/placement.21dcb253c0b644623b0c.gif';


const Pyfs = () => {


const skills = [
    { icon: <FaPython />, name: 'Python', color: '#3776AB' }, 
    { icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' }, 
    { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' }, 
    { icon: <FaJsSquare />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaReact />, name: 'ReactJS', color: '#61DBFB' }, 
    { icon: <SiDjango />, name: 'Django', color: '#092E20' }, 
    { icon: <SiFlask />, name: 'Flask', color: '#000000' },
    { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' }, 
    { icon: <FaDatabase />, name: 'Database', color: '#DD4B39' }, 
    { icon: <SiBootstrap />, name: 'Bootstrap', color: '#563D7C' }, 
    { icon: <FaGithub />, name: 'GitHub', color: '#181717' }, 
  ];

    const [activeIndex, setActiveIndex] = useState(null);

    const syllabus = [
        {
            title: "Programming Fundamentals",
            content: [
                "Introduction to Python syntax and programming principles.",
                "Variables, data types, and operators.",
                "Control structures: loops and conditional statements.",
                "Functions and modular programming.",
                "Error handling and debugging techniques."
            ],
             iconClass: "icon-python",
            icon: <FaPython />
        },
        {
            title: "Object-Oriented Programming (OOP)",
            content: [
                "Understanding classes and objects in Python.",
                "Principles of OOP: encapsulation, inheritance, and polymorphism.",
                "Writing reusable and maintainable code.",
                "Advanced OOP concepts like method overriding and multiple inheritance."
            ],
            icon: <FaLaptopCode />,
            iconClass: "icon-oop"
        },
        {
            title: "Data Structures and Algorithms",
            content: [
                "Arrays, linked lists, stacks, and queues.",
                "Sorting algorithms (bubble sort, quicksort, mergesort).",
                "Searching algorithms (linear search, binary search).",
                "Hashing, recursion, and tree data structures."
            ],
            icon: <FaTools />,
            iconClass: "icon-dsa"
        },
        {
            title: "Front-End Development",
            content: [
                "HTML5: semantic elements, forms, and multimedia integration.",
                "CSS3: flexbox, grid, animations, and responsive design.",
                "JavaScript: DOM manipulation, event handling, and AJAX.",
                "Bootstrap: building mobile-first, responsive designs."
            ],
            icon: <FaHtml5 />,
            iconClass: "icon-html"
        },
        {
            title: "Advanced JavaScript & ES6+",
            content: [
                "ES6 features: let/const, template literals, and destructuring.",
                "Arrow functions, promises, and async/await.",
                "Modules and imports/exports.",
                "Event delegation and advanced DOM manipulation."
            ],
            icon: <FaJsSquare />,
            iconClass: "icon-js"
        },
        {
            title: "ReactJS Development",
            content: [
                "Introduction to ReactJS and component-based architecture.",
                "JSX syntax and working with props and state.",
                "Lifecycle methods and functional components.",
                "Hooks: useState, useEffect, and custom hooks.",
                "Context API and Redux for state management."
            ],
            icon: <FaReact />,
             iconClass: "icon-react"
            
        },
        {
            title: "Backend Development with Flask",
            content: [
                "Setting up Flask and understanding its core structure.",
                "Routing, request handling, and templates (Jinja2).",
                "Building RESTful APIs with Flask.",
                "Middleware and securing applications."
            ],
            icon: <SiFlask />,
             iconClass: "icon-flask"
        },
        {
            title: "Backend Development with Django",
            content: [
                "Introduction to Django and its MVC architecture.",
                "URL routing and views.",
                "Working with models and Django ORM.",
                "Django templates and form handling.",
                "Building REST APIs with Django Rest Framework (DRF)."
            ],
            icon: <SiDjango />,
             iconClass: "icon-django"
        },
        {
            title: "Database Management with MySQL",
            content: [
                "Database design principles and normalization.",
                "Writing SQL queries: SELECT, INSERT, UPDATE, DELETE.",
                "Joins, subqueries, and transactions.",
                "Integrating MySQL with Flask and Django applications."
            ],
            icon: <FaDatabase />,
                iconClass: "icon-mysql"
        },
        {
            title: "RESTful API Development",
            content: [
                "Understanding REST architecture.",
                "Designing endpoints and handling HTTP methods.",
                "Authentication and authorization using JWT.",
                "Testing APIs with tools like Postman."
            ],
            icon: <FaGlobeAmericas />,
              iconClass: "icon-restapi"
        },
        {
            title: "Version Control with Git and GitHub",
            content: [
                "Git basics: cloning, branching, merging, and resolving conflicts.",
                "Using GitHub for code collaboration.",
                "Understanding pull requests and code reviews.",
                "Best practices for version control in team projects."
            ],
            icon: <FaGithub />,
             iconClass: "icon-git"
        },
        {
            title: "Deployment and CI/CD",
            content: [
                "Hosting applications on cloud platforms (AWS, Heroku, etc.).",
                "Using Docker for containerization.",
                "Setting up CI/CD pipelines with GitHub Actions.",
                "Monitoring and maintaining deployed applications."
            ],
            icon: <FaServer />,
              iconClass: "icon-cicd"
        },
        {
            title: "Capstone Projects",
            content: [
                "Build a full-stack e-commerce website.",
                "Develop a blog platform with user authentication.",
                "Create a data visualization dashboard.",
                "Deploy applications to a live server and showcase your portfolio."
            ],
            icon: <FaUserTie />,
             iconClass: "icon-capstone"
        }
    ];
    
    

    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const [currentIndex, setCurrentIndex] = useState(0);





    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 2000);
        return () => clearInterval(interval); 
    }, []);

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

            <div data-aos="fade-up" className="course-container">
                <header className="course-header">
                <div className=''>
                    <h1 style={{marginTop:"130px",color:"#1d4ed8"}} className='course-after'>Python Full Stack Development</h1>
                    <p>
                        Build cutting-edge applications with a complete skill set in frontend and backend technologies!
                        Perfect for beginners and experienced developers looking to enhance their skill set.
                    </p>
                    </div>

                    <div>
                        <img  style={{width:"250px" , marginTop:"100px"}} src={placement} alt='logo' />

                    </div>
                </header>

                <div data-aos="fade-up" className="course-content">
                    <section className="course-overview">
                        {/* <h2>Course Overview</h2>
                        <p>
                            Dive into the world of web development with Python. This course offers an in-depth understanding of essential technologies,
                            empowering you to build scalable and dynamic web applications. Whether you're new or experienced, our curriculum is designed to elevate your skills!
                        </p> */}
                    </section>

                    <section data-aos="fade-up" id="skills" className="course-skills">
                        <h2 data-aos="fade-up" className="module-heading" style={{color:"#1d4ed8"}}>Skills You Will Learn</h2>
                        <div data-aos="fade-up" className="carousel-container">
                            <div className="carousel-content" style={{ transform: `translateX(-${(currentIndex % (skills.length - 4)) * 100 / 5}%)` }}>
                                {skills.map((skill, index) => (
                                    <div  style={{ color: skill.color }} className="skill" key={index}>
                                        <div className="skill-icon">{skill.icon}</div>
                                        <p>{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <div  data-aos="fade-up" id='syllabus' className="syllabus-container">
            <h2 className="section-heading" style={{color:"#1d4ed8"}}>Syllabus</h2>

            <ul data-aos="fade-up" className="syllabus-list">
    {syllabus.map((item, index) => (
        <li key={index} className="syllabus-item">
            <div data-aos="fade-up" className="syllabus-header" onClick={() => toggleContent(index)}>
                <span className={`syllabus-icon ${item.iconClass}`}>{item.icon}</span>
                <span style={{color:"black" , fontSize:"1.3rem"}} className="syllabus-title">{item.title}</span>
                <span className="toggle-icon">
                    <i className="fa-solid fa-arrow-right"></i>
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
                                color: "black", 
                                fontSize:"1.2rem",
                                marginTop:"15pz",
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

<div data-aos="fade-up" className="data-science-download-section">
        <h3 className="data-science-download-heading">Download Syllabus </h3>
        <a href="/path/to/your/pdf-file.pdf" download className="data-science-download-button">
            <i className="fa-solid fa-download"></i> Download
        </a>
    </div>




            
        </div>

                    <h2 id="modules" style={{color:"#1d4ed8"}} className="module-heading">Modules & Tools</h2>
                    <section data-aos="fade-up" className="course-modules">
                        <div data-aos="fade-up" className="module">
                            <h3><FaPython /> Python Programming</h3>
                            <p>Learn Python, the most versatile and beginner-friendly programming language, to write efficient and maintainable code.</p>
                        </div>
                        <div data-aos="fade-up" className="module">
                            <h3><SiDjango /> Django Framework</h3>
                            <p>Master Django to develop robust backend systems with clean architecture and built-in security features.</p>
                        </div>
                        <div data-aos="fade-up" className="module">
                            <h3><SiFlask /> Flask Framework</h3>
                            <p>Understand Flask for lightweight and fast application development with flexibility for extensions.</p>
                        </div>
                        <div data-aos="fade-up" className="module">
                            <h3><FaHtml5 /> HTML5 & <FaCss3Alt /> CSS3</h3>
                            <p>Design responsive and accessible websites using HTML5 for structure and CSS3 for styling.</p>
                        </div>
                        <div data-aos="fade-up" className="module">
                            <h3><FaJsSquare /> JavaScript</h3>
                            <p>Enhance user interactivity with advanced JavaScript techniques, including ES6 features.</p>
                        </div>
                        <div data-aos="fade-up" className="module">
                            <h3><FaReact /> ReactJS</h3>
                            <p>Build dynamic, single-page applications with ReactJS, leveraging component-based architecture and hooks.</p>
                        </div>
                        <div  data-aos="fade-up" className="module">
                            <h3><FaDatabase /> Database (MySQL)</h3>
                            <p>Learn to design and manage relational databases using MySQL for efficient data storage and retrieval.</p>
                        </div>
                        <div data-aos="fade-up" className="module">
                            <h3><SiBootstrap /> Bootstrap</h3>
                            <p>Create mobile-first, responsive designs effortlessly with Bootstrap’s utility classes and components.</p>
                        </div>
                        <div data-aos="fade-up" className="module">
                            <h3><FaGithub /> GitHub</h3>
                            <p>Master version control and collaborate on projects using Git and GitHub repositories.</p>
                        </div>
                    </section>

                    <section id="career" data-aos="fade-up" className="career-opportunities">
                        <h2 style={{color:"#1d4ed8"}} className="section-title">Career Opportunities</h2>
                        <div className="career-container">
                            <div data-aos="fade-up" className="career-item">
                                <div  className="career-icon">
                                    <i className="fas fa-laptop-code"></i>
                                </div>
                                <div data-aos="fade-up" className="career-info">
                                    <h3>Frontend Developer</h3>
                                    <p>Join our dynamic team to create modern, user-friendly interfaces using cutting-edge technologies.</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="career-item">
                                <div className="career-icon">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <div data-aos="fade-up" className="career-info">
                                    <h3>Backend Developer</h3>
                                    <p>Build robust server-side, optimize performance, and work with databases.</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="career-item">
                                <div className="career-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <div data-aos="fade-up" className="career-info">
                                    <h3>Full Stack Developer</h3>
                                    <p>Analyze trends, create modern, optimize performance, Works both server and client sides.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section data-aos="fade-up" className="course-benefits">
                        <h2 style={{color:"#1d4ed8"}} data-aos="fade-up">Why Choose This Course?</h2>
                        <ul data-aos="fade-up">
                            <li className='lll'>Comprehensive curriculum covering frontend and backend development.</li>
                            <li className='lll'>Hands-on projects to build a robust portfolio.</li>
                            <li className='lll'>Dedicated mentors for guidance and career support.</li>
                            <li className='lll'>Flexible learning options with online and offline availability.</li>
                            <li className='lll'>Industry-recognized certification upon completion.</li>
                        </ul>
                    </section>

                    <section id="faq" data-aos="fade-up" className="course-faq">
                        <h2 style={{color:"#1d4ed8"}}>Frequently Asked Questions</h2>
                        <div data-aos="fade-up" className="faq-item">
                            <div className="faq-icon">
                                <FaQuestionCircle />
                            </div>
                            <div data-aos="fade-up">
                                <h3 className='ppp'>Who is this course for?</h3>
                                <p>This course is ideal for aspiring developers, IT professionals, or anyone looking to start or advance their career in web development.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="faq-item">
                            <div className="faq-icon">
                                <FaQuestionCircle />
                            </div>
                            <div data-aos="fade-up">
                                <h3 className='ppp'>Do I need prior experience?</h3>
                                <p>No prior coding experience is required! The course starts with beginner-friendly concepts and progresses to advanced topics.</p>
                            </div>
                        </div>
                    </section>

                    <div data-aos="fade-up" className="course-info-wrapper">
                        <section data-aos="fade-up" className="course-details">
                            <h2 style={{color:"#1d4ed8"}} className="section-title">Course Details</h2>
                            <div className="details-wrapper">
                                <div className="details-item">
                                    <i className="fas fa-calendar-alt"></i>
                                    <strong className="details-label">Duration:</strong>
                                    <p className="details-text">6 months (Full-Time / Part-time)</p>
                                </div>
                                <div className="details-item">
                                    <i className="fas fa-laptop"></i>
                                    <strong className="details-label">Mode:</strong>
                                    <p className="details-text">Online/Offline</p>
                                </div>
                                <div className="details-item">
                                    <i className="fas fa-certificate"></i>
                                    <strong className="details-label">Certification:</strong>
                                    <p className="details-text">Industry-recognized certificate</p>
                                </div>
                                <div className="details-item">
                                    <i className="fas fa-project-diagram"></i>
                                    <strong className="details-label">Capstone Projects:</strong>
                                    <p className="details-text">Build real-world projects</p>
                                </div>
                            </div>
                        </section>

                        <section data-aos="fade-up" className="course-benefits">
                            <h2 style={{color:"#1d4ed8"}} className="section-title">Course Benefits</h2>
                            <div className="benefits-wrapper">
                                <div data-aos="fade-up" className="benefit-item">
                                    <i className="fas fa-trophy"></i>
                                    <strong className="benefit-label">Expert Trainers</strong>
                                    <p className="benefit-text">Learn from industry experts with years of experience.</p>
                                </div>
                                <div data-aos="fade-up" className="benefit-item">
                                    <i className="fas fa-users"></i>
                                    <strong className="benefit-label">Peer Learning</strong>
                                    <p className="benefit-text">Collaborate and grow with a supportive peer community.</p>
                                </div>
                                <div data-aos="fade-up" className="benefit-item">
                                    <i className="fas fa-briefcase"></i>
                                    <strong className="benefit-label">Job Assistance</strong>
                                    <p className="benefit-text">Access job placement support upon course completion.</p>
                                </div>
                                <div data-aos="fade-up" className="benefit-item">
                                    <i className="fas fa-book-open"></i>
                                    <strong className="benefit-label">Comprehensive Resources</strong>
                                    <p className="benefit-text">Access to a wide range of learning materials and tools.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
            <Credentials/>
        </div>
    );
};

export default Pyfs;
