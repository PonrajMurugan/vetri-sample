import React from 'react';
import ClockIcon from '@mui/icons-material/AccessTime'; 
import SchoolIcon from '@mui/icons-material/School'; 
import ComputerIcon from '@mui/icons-material/Computer'; 
import node from '../Images/Node BACKEND DEVELOPER ROAD MAP-MODULE 2.b060b2ddbad5994236ea.png';

const Node = () => {
    return (
        <div data-aos="flip-left" className='mern-container'>
        <div>
            <h1>Backend Developer (Node)</h1>
            <p>Node.js is a JavaScript runtime environment that's used to develop server-side and networking applications. It's a popular choice for developers because of its robust ecosystem and rich library support</p>
        </div>

        <div className='mern-flexbox'>
            <div className='mern-flexbox-item'>
                <ClockIcon className='mern-icon' style={{ fontSize: '60px' }} /> 
                <h1>IT Training Duration</h1>
                <p>3 Months</p>
            </div>

            <div className='mern-flexbox-item'>
                <SchoolIcon className='mern-icon' style={{ fontSize: '60px' }} /> 
                <h1>IT Training Eligibility</h1>
                <p>Any degree 2021-2024 Passed Out Students</p>
            </div>

            <div className='mern-flexbox-item'>
                <ComputerIcon className='mern-icon' style={{ fontSize: '60px' }} />
                <h1>IT Training Modes</h1>
                <p>Online/ Classroom</p>
            </div>
        </div>

        <div className='mern-image-container'>
            <img src={node} alt='MERN Stack Roadmap' />
        </div>
    </div>
    );
};

export default Node;