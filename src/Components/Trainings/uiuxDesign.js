import React, { useState } from 'react';
import { FaBeer, FaTools, FaLaptop, FaPenFancy, FaLightbulb, FaRegQuestionCircle, FaTrophy } from 'react-icons/fa';
import './uiuxDesign.css';



const syllabusData = [
    {
        title: "Introduction to UI/UX",
        topics: [
            "Understanding UX Principles",
            "UI vs UX: Key Differences",
            "User-Centered Design Approach"
        ]
    },
    {
        title: "Research and Analysis",
        topics: [
            "Conducting User Interviews",
            "Creating Personas",
            "Competitor Analysis"
        ]
    },
    {
        title: "Wireframing & Prototyping",
        topics: [
            "Introduction to Wireframing Tools",
            "Creating Low-Fidelity Wireframes",
            "Building Interactive Prototypes"
        ]
    },
    {
        title: "Design Systems",
        topics: [
            "Understanding Design Systems",
            "Color Theory and Typography",
            "Accessibility in Design"
        ]
    },
    {
        title: "Design Tools Mastery",
        topics: [
            "Getting Started with Figma",
            "Advanced Features of Adobe XD",
            "Collaborative Design with InVision"
        ]
    },
    {
        title: "Final Project",
        topics: [
            "Creating a Complete Design Case Study",
            "Presenting Your Work",
            "Portfolio Development"
        ]
    }
];

const UiuxDesign = () => {
    const [activeModule, setActiveModule] = useState(null);

    const toggleModule = (index) => {
        if (activeModule === index) {
            setActiveModule(null);
        } else {
            setActiveModule(index);
        }
    };

    return (

        <div >
            <nav className="fixed-navbar" style={{marginTop:"100px"}}>
                <ul>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#syllabus">Syllabus</a></li>
                    <li><a href="#modules">Modules & Career</a></li>
                    {/* <li><a href="#career">Career</a></li> */}
                    <li><a href="#faq">FAQ</a></li>
                   
                </ul>
            </nav>
      
        <div data-aos="fade-up" style={{marginTop:"160px"}} className="uiux-container container">

        <div 
    className="uiux-hero" 
    style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-around", 
        padding: "20px", 
        gap: "20px" 
    }}
>
    <div>
        <h1 style={{ fontSize: "1.9rem" }}>
            <i className="fas fa-book"></i> UI/UX Design Training
        </h1>
        <p>
            <i className="fas fa-paint-brush"></i> Master the art of crafting beautiful and user-friendly interfaces!
        </p>
    </div>
    {/* <img 
        src="https://camo.githubusercontent.com/66066b22abacaf358032bb15ab64fe18654e8d00e2ed4d07747d89eccb6596ae/68747470733a2f2f63646e622e61727473746174696f6e2e636f6d2f702f6173736574732f696d616765732f696d616765732f3032382f3939312f3939392f6f726967696e616c2f616e6e612d68617672796c79756b682d2e6769663f31353936313235313132" 
        alt="UI/UX Design" 
        style={{ 
            width: "150px", 
            height: "150px", 
            borderRadius: "10px", 
            objectFit: "cover" 
        }} 
    /> */}

<div data-aos="fade-down">
                        <img className='pyfs-img'  style={{width:"450px",height:"40vh",borderRadius:"50px" , marginTop:"30px"}} src='https://user-images.githubusercontent.com/74038190/212750672-2f3f2b50-c84f-4ed8-a60a-849ae69ff9df.gif' alt='logo' />

                    </div>

</div>






            <div data-aos="fade-up" id='skills' className="uiux-section uiux-skills">
                <h1 style={{fontSize:"2rem" , paddingTop:"20px" , paddingBottom:"20px" ,}}><i className="fas fa-pen-fancy"></i> Skills You Will Learn</h1>
                <div style={{cursor:"pointer"}}  className="uiux-skills-list">
                    <div data-aos="fade-up" className="skill-item"><FaLaptop /> User Research and Personas</div>
                    <div data-aos="fade-up" className="skill-item"><FaTools /> Wireframing and Prototyping</div>
                    <div data-aos="fade-up" className="skill-item"><FaLightbulb /> Design Systems and Accessibility</div>
                    <div data-aos="fade-up" className="skill-item"><FaPenFancy /> Mastering Design Tools</div>
                    <div data-aos="fade-up" className="skill-item"><FaTrophy /> Creating Interactive Designs</div>
                    <div data-aos="fade-up" className="skill-item"><FaRegQuestionCircle /> Usability Testing</div> {/* New skill */}
                </div>

            </div>

            <div data-aos="fade-up" id='syllabus' className="uiux-section uiux-syllabus">
                <h1 style={{fontSize:"2rem" , paddingTop:"20px" , paddingBottom:"20px" ,}}>  <i className="far fa-question-circle"></i> Syllabus</h1>
                <p className='ppppp'>Explore our comprehensive curriculum designed to make you industry-ready:</p>
                {syllabusData.map((module, index) => (
                    <div key={index} className="syllabus-module">
                        <h2  data-aos="fade-up" style={{fontSize:"1.2rem"}} onClick={() => toggleModule(index)} className="syllabus-title ppppp">
                        <i class="fa-solid fa-paper-plane"></i>  {module.title}
                            <span className={`syllabus-arrow ${activeModule === index ? 'open' : ''}`}><i class="fa-regular fa-circle-down"></i></span>
                        </h2>
                        <ul  className={`syllabus-topics ${activeModule === index ? 'open' : ''}`}>
                            {module.topics.map((topic, idx) => (
                                <li className='ppppp'  key={idx}>✅ {topic}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div data-aos="fade-up" className="data-science-download-section">
                        <h3 className="data-science-download-heading">Download Syllabus </h3>
                        <a href="/path/to/your/pdf-file.pdf" download className="data-science-download-button">
                            <i className="fa-solid fa-download"></i> Download 
                        </a>
                    </div>

            </div>

            <div data-aos="fade-up"  style={{ fontFamily: 'Arial, sans-serif' }}>
            <div style={{
                padding: '20px',
                // backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backgroundColor:"#1f2937",
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)',
                marginBottom: '30px',
                color: '#fff'
            }}>
                <h1 id='modules' className='mmmmm' style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', 
                    fontSize: '2rem',
                    color: '#00ffff',
                    marginBottom: '20px',
                    textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff'
                }}>
                    <FaTools style={{ marginRight: '10px' }} /> Modules and Tools
                </h1>
                <div data-aos="fade-up" className='ppppp' style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                }}>
                    <div data-aos="fade-up" style={{
                        backgroundColor: '#111',
                        padding: '20px',
                        borderRadius: '10px',
                        color: '#fff',
                        textAlign: 'center',
                        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        textShadow: '0 0 10px #00ffff'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00ffff';
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.5)';
                            e.target.style.color = "black";
                            
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#111';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
                            e.target.style.color="white";
                            
                        }}
                    >
                        🎨 Figma
                    </div>
                    <div data-aos="fade-up" style={{
                        backgroundColor: '#111',
                        padding: '20px',
                        borderRadius: '10px',
                        color: '#fff',
                        textAlign: 'center',
                        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        textShadow: '0 0 10px #00ffff'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00ffff';
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.5)';
                            e.target.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#111';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
                            e.target.style.color = "white";
                        }}
                    >
                        🎨 Adobe XD
                    </div>
                    <div data-aos="fade-up" style={{
                        backgroundColor: '#111',
                        padding: '20px',
                        borderRadius: '10px',
                        color: '#fff',
                        textAlign: 'center',
                        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        textShadow: '0 0 10px #00ffff'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00ffff';
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.5)';
                            e.target.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#111';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
                            e.target.style.color = "white";
                        }}
                    >
                        🎨 Sketch
                    </div>
                    <div data-aos="fade-up" style={{
                        backgroundColor: '#111',
                        padding: '20px',
                        borderRadius: '10px',
                        color: '#fff',
                        textAlign: 'center',
                        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        textShadow: '0 0 10px #00ffff'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00ffff';
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.5)';
                            e.target.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#111';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
                            e.target.style.color = "white";
                        }}
                    >
                        🎨 InVision
                    </div>
                    <div data-aos="fade-up" style={{
                        backgroundColor: '#111',
                        padding: '20px',
                        borderRadius: '10px',
                        color: '#fff',
                        textAlign: 'center',
                        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        textShadow: '0 0 10px #00ffff'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00ffff';
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.5)';
                            e.target.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#111';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
                            e.target.style.color = "white";
                        }}
                    >
                        🎨 Photoshop
                    </div>
                </div>
            </div>

            <div data-aos="fade-up"  style={{
                padding: '20px',
                // backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backgroundColor:"#1f2937",
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)',
                marginBottom: '30px',
                color: '#fff'
            }}>
                <h1 className='mmmmm' style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: '#00ffff',
                    marginBottom: '20px',
                    textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff'
                }}>
                    <FaTrophy style={{ marginRight: '10px' }} /> Career Opportunities
                </h1>
                <div data-aos="fade-up" className='ppppp'   style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px'
                   
                }}>
                    <div data-aos="fade-up" style={{
                        backgroundColor: '#111',
                        padding: '20px',
                        borderRadius: '10px',
                        color: '#fff',
                        textAlign: 'center',
                        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        textShadow: '0 0 10px #00ffff'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00ffff';
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.5)';
                            e.target.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#111';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
                            e.target.style.color = "white";
                        }}
                    >
                        🎯 UI Designer
                    </div>
                    <div data-aos="fade-up" style={{
                        backgroundColor: '#111',
                        padding: '20px',
                        borderRadius: '10px',
                        color: '#fff',
                        textAlign: 'center',
                        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        textShadow: '0 0 10px #00ffff'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00ffff';
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.5)';
                            e.target.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#111';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
                            e.target.style.color = "white";
                        }}
                    >
                        🎯 UX Researcher
                    </div>
                    <div data-aos="fade-up" style={{
                        backgroundColor: '#111',
                        padding: '20px',
                        borderRadius: '10px',
                        color: '#fff',
                        textAlign: 'center',
                        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        textShadow: '0 0 10px #00ffff'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00ffff';
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.5)';
                            e.target.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#111';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
                            e.target.style.color = "white";
                        }}
                    >
                        🎯 Product Designer
                    </div>
                    <div data-aos="fade-up" style={{
                        backgroundColor: '#111',
                        padding: '20px',
                        borderRadius: '10px',
                        color: '#fff',
                        textAlign: 'center',
                        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        textShadow: '0 0 10px #00ffff'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00ffff';
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.5)';
                            e.target.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#111';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
                            e.target.style.color = "white";
                        }}
                    >
                        🎯 Service Designer
                    </div>
                    <div data-aos="fade-up" style={{
                        backgroundColor: '#111',
                        padding: '20px',
                        borderRadius: '10px',
                        color: '#fff',
                        textAlign: 'center',
                        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        textShadow: '0 0 10px #00ffff'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00ffff';
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.5)';
                            e.target.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#111';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
                            e.target.style.color = "white";
                        }}
                    >
                        🎯 Visual Designer
                    </div>
                </div>
            </div>
        </div>
            <div data-aos="fade-up" id='faq' className="uiux-section uiux-why">
                <h1 style={{fontSize:"2rem" , paddingTop:"20px" , paddingBottom:"20px" ,}} >    <i className="fas fa-lightbulb"></i> Why Choose This Training</h1>
                <p className='ppppp' data-aos="fade-up" > <i class="fa-solid fa-user-shield"></i> We offer industry-relevant training with real-world projects!</p>
            </div>
            <div data-aos="fade-up" style={{ display: "flex", justifyContent: "space-between", gap: "20px", padding: "20px" }}>
    <div data-aos="fade-up" className="uiux-section uiux-faq" style={{ flex: "1", backgroundColor: "#f4f4f4", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ fontSize: "2rem", paddingTop: "20px", paddingBottom: "20px" }}> <i className="far fa-question-circle"></i> Frequently Asked Questions</h1>
        <ul className='ppppp'>
            <li data-aos="fade-up">❓ Do I need prior experience in design?</li>
            <li data-aos="fade-up">✅ No, you dont need any experience.</li>

            <li data-aos="fade-up">❓ Is this course beginner-friendly?</li>
            <li data-aos="fade-up">✅ Yes, this course was beginner friendly.</li>

            {/* <li data-aos="fade-up">❓ What software/tools will be required?</li> */}
            {/* <li data-aos="fade-up">✅ No you dont need any experience.</li> */}

            <li data-aos="fade-up">❓ Are there any certifications?</li> 
            <li data-aos="fade-up">✅ Yes, you will get an verified certificate.</li>


           

        </ul>
    </div>

    <div className="uiux-section uiux-benefits" style={{ flex: "1", backgroundColor: "#f4f4f4", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ fontSize: "2rem", paddingTop: "20px", paddingBottom: "20px" }}>   <i className="fas fa-trophy"></i>Training Benefits</h1>
        <ul className='ppppp'>
        <li data-aos="fade-up">🚀 Hands-on projects</li>
    <li data-aos="fade-up">🚀 Learn from industry experts</li>
    <li data-aos="fade-up">🚀 Portfolio development</li>
    <li data-aos="fade-up">🚀 Career guidance</li>
    <li data-aos="fade-up">🚀 Networking opportunities</li>
    <li data-aos="fade-up">🚀 Job placement assistance</li>

        </ul>
    </div>
</div>

        </div>
        </div>
    );
};

export default UiuxDesign;
