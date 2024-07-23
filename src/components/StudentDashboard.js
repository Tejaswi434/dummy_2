import React from 'react';
import { useNavigate } from 'react-router-dom';  
import { Link } from 'react-router-dom';
import StudentHeader from './StudentHeader';
function StudentDashboard({children}) {
    // return (
    //     <h1>Student dashboard</h1>
    // )

    const navigate = useNavigate()
    const handleTakeTest = () => {
        // Handle Take Test button click
        navigate('/take-test');
    };

    const handleScores = () => {
        // Handle Scores button click
        navigate('/scores');
    };

    const handleLogout = () => {
        // Handle Logout button click
        // e.g., clear authentication token, redirect to login page
        navigate('/login');
    };

    return ( 
        <div>
       <StudentHeader />
       <div className='flex flex-row flex-wrap'>{children}</div>
       </div>
        
        // <div className="home-page">
        //     <h1>Welcome to the Student Home Page</h1>
        //     <button onClick={handleTakeTest}>Take Test</button>
        //     <button onClick={handleScores}>Scores</button>
        //     <button onClick={handleLogout}>Logout</button>
        // </div>
    );
}

export default StudentDashboard;