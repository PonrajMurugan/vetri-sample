import React from 'react';
import pythonImage from './download.jpeg';
import './pythonFullstack.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import confetti from "canvas-confetti";

const Python = () => {

    const confettiBtn = () => {
        confetti({
            particleCount:250,
            spread:150,
        })
    }
    return (
        <div  data-aos="fade-up" className="python-page">
            <div className="python-carousel">
                <img src={pythonImage} alt="Python Course" />
            </div>

            <div className="course-row">
                <div className="course-description">
    <h1 className="course-title">Python Full Stack Development</h1>
    <div className="course-info">
        <div className="python-logo-section">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
                alt="Python Logo"
                className="python-logo"
            />
        </div>
        <div className="course-text">
            <p>
                The Python Fullstack course covers both frontend and backend development,
                including Python backend development with frameworks like Django, and frontend technologies like HTML, CSS, and JavaScript. The course also integrates React 
                for building dynamic user interfaces.
            </p>
            <p>
                By the end of this course, you'll have the skills to create full-stack web applications using Python, Django, and React.
            </p>
        </div>
    </div>

    <div className="tech-icons">
        <div className="tech-icon">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" 
                alt="HTML5 Logo" 
                className="icon-image" 
            />
            <span>HTML</span>
        </div>
        <div className="tech-icon">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" 
                alt="CSS3 Logo" 
                className="icon-image" 
            />
            <span>CSS</span>
        </div>
        <div className="tech-icon">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                alt="React Logo" 
                className="icon-image" 
            />
            <span>React</span>
        </div>
        <div className="tech-icon">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
                alt="JavaScript Logo" 
                className="icon-image" 
            />
            <span>JavaScript</span>
        </div>
        {/* <div className="tech-icon">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0e/MySQL_textlogo.svg" 
                alt="MySQL Logo" 
                className="icon-image" 
            />
            <span>MySQL</span>
        </div> */}
        <div className="tech-icon">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" 
                alt="Django Logo" 
                className="icon-image" 
            />
            <span>Django</span>
        </div>
        {/* <div className="tech-icon">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Full_Stack_Developer_Icon.png" 
                alt="Full Stack Logo" 
                className="icon-image" 
            />
            <span>Full Stack</span>
        </div> */}
    </div>
</div>


                <div className="course-image-container">
                    <img 
                        src="https://trendnologies.com/wp-content/uploads/2024/09/6310dc-1024x1024.jpg" 
                        alt="Course Image" 
                        className="course-image"
                    />
                </div>
            </div>
            <div style={{textAlign:'center'}}>
            <Button 
                variant="contained" 
                endIcon={<SendIcon />} 
                style={{
                    backgroundColor: 'orange',
                    color: '#ffffff',
                    borderRadius: '20px',
                    padding: '10px 20px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onClick={confettiBtn}
            >
                        Click for More Details
            </Button>

            </div>
            
        </div>
    );
};

export default Python;
