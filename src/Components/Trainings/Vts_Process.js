import React, { useState } from 'react';
import './Vts_Process.css';
import {
    FaCheckCircle,
    FaLaptopCode,
    FaClipboardList,
    FaFileAlt,
    FaUserGraduate,
    FaChalkboardTeacher,
    FaCalendarAlt,
    FaSuitcase,
    FaHandshake,
    FaBuilding
} from "react-icons/fa";

const VtsProcess = () => {
    const [activeStep, setActiveStep] = useState(null);

    const steps = [
        { step: "Step 1", title: "Vetri Technology Solutions", icon: <FaBuilding />, details: "Learn about our organization, mission, and goals to empower your career." },
        { step: "Step 2", title: "Eligibility Criteria", icon: <FaClipboardList />, details: "Understand the basic requirements for eligibility to join our programs." },
        { step: "Step 3", title: "VTS IT Training", icon: <FaLaptopCode />, details: "Comprehensive training programs to prepare you for industry challenges." },
        { step: "Step 4", title: "Interview Q & A", icon: <FaFileAlt />, details: "Get access to commonly asked interview questions and expert answers." },
        { step: "Step 5", title: "Resume Preparation", icon: <FaUserGraduate />, details: "Build a professional resume tailored to your target job roles." },
        { step: "Step 6", title: "Aptitude Test", icon: <FaChalkboardTeacher />, details: "Test your analytical and logical reasoning skills with practice tests." },
        { step: "Step 7", title: "Mock Interview", icon: <FaHandshake />, details: "Simulate real interviews to boost your confidence and improve performance." },
        { step: "Step 8", title: "Scheduling Interview", icon: <FaCalendarAlt />, details: "Organize your interviews efficiently with our scheduling support." },
        { step: "Step 9", title: "Job Placements", icon: <FaSuitcase />, details: "Secure your dream job with our placement assistance services." },
        { step: "Step 10", title: "Vetri IT Systems", icon: <FaCheckCircle />, details: "Join our network of professionals and stay updated with the latest trends." },
    ];

    const handleCardClick = (index) => {
        setActiveStep(index === activeStep ? null : index);
    };

    return (
        <div className="vts-container">
            <div style={{marginTop:"100px"}} className="header">
                <h1>VIS Job Offer Life Cycle</h1>
                <p>Your path to success starts here!</p>
            </div>
            <div className="steps-grid">
                {steps.map((step, index) => (
                    <div
                        className={`step-card ${activeStep === index ? "active" : ""}`}
                        key={index}
                        onClick={() => handleCardClick(index)}
                    >
                        <div className="icon">{step.icon}</div>
                        <h5>{step.step}</h5>
                        <p>{step.title}</p>
                        {activeStep === index && (
                            <div className="details">
                                <p>{step.details}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VtsProcess;
