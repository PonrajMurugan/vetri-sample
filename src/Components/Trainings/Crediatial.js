import React from 'react';
import './credential.css';
import certificate from '../Images/certificate.00c0bf2d87b1ad3921e4.png';

const Crediatialss = () => {
    return (
        <div>

<div data-aos="fade-up"  className="credentials-container">
            <div className="credentials-header">
                <h1>VTS <span>Credentials</span></h1>
                <p>VTS provides you a training completion certificate with an online verification code.</p>
                <p>Once training is complete at VTS, you will receive a guaranteed internship with our own IT organisation.</p>
                <p className="highlighted-text">Vetri IT Systems <span style={{color:"navy"}}>Private Limited.</span></p>
                <img src={certificate} alt='VTS Certificate' className="certificate-img" />
                <h6>VTS <span style={{color:"orange"}}>Certificate</span> </h6>
            </div>
            </div>
            
        </div>
    );
};

export default Crediatialss;