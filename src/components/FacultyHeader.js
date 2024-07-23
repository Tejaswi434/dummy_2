import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import FacultyRegistration from './Facultyregistartion';
import Testquestions from './Testquestions';
import { useContext } from 'react';
import { ToggleContext } from '../App';
function FacultyHeader() {
  const[appear,setAppear]=useState(true)
  const [show,setShow]= useContext(ToggleContext)
    const navigate = useNavigate();
    const handleLogout =(e)=>{ 
      // alert("successfully logout")
      setShow(0)
    
      }
  return (
    <div>
  <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold"></Link>
        <div className="space-x-4">
            
          <Link to="/studentRegister" className="hover:bg-gray-700 px-3 py-2 rounded">Add New Student</Link>
          <Link to="/create-test" className="hover:bg-gray-700 px-3 py-2 rounded">Create New Test</Link>
          {/* <Link to="/validate-test" className="hover:bg-gray-700 px-3 py-2 rounded">Test Reports</Link> */}
          {/* <Link to="/generate-score" className="hover:bg-gray-700 px-3 py-2 rounded">Generate Score</Link> */}
          {/* <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded" onClick={handleLogout}>Logout</Link> */}
        
        <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default FacultyHeader