// import React, { useState } from 'react' 
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
// function StudentLogin() {
//   const navigate=useNavigate();
//   const [ id, setId] = useState('')
//   const [password, setPassword] = useState('')
//   const handleLogin = async(e) => { 
//     e.preventDefault()
//     const response = await axios.post("http://172.17.15.186:3006/login", {id: id , password : password}) 
//     if(response.status===200){
//       navigate("/StudentDashboard")
//     } 
//     else{
//         console.log("iM HERE IN ELSE")
//         alert("Please enter valid credentials")
//     }
//   } 
//   const gettingname =(e)=>{
//     setId(e.target.value)
//   } 
//   const gettingpassword =(e)=>{
//     setPassword(e.target.value)
//   }
//   return (
//     <div className='flex flex-row justify-center mt-40 '>
//       <div className="basis-2/5 ">
//     <img src="https://www.allen.ac.in/ace2324/assets/images/login.png"/>
// </div>
// <div  className="basis -3/5  flex flex-col justify-center">
//       <label className="text-m">Roll Number</label>
//         <br/>
//             <input type="text" placeholder="Enter your rollnumber" 
//             onChange={gettingname}
//             className="border border-red-400 rounded"/> 
//             <br/>
          
//             <label className="text-m">Password</label>
//             <br/>
     
//             <input type="password" placeholder="Enter your password"   onChange={gettingpassword}
//             className="border border-red-400 rounded"/>
//             <br/>
//             <br/><br/>
//             <button 
//             onClick = {handleLogin}
//             type="submit"
//              className="bg-red-400 text-white rounded px-2 mt-4 "
//              >Login
//              </button>
//     </div>
//     </div>
//   )
// }

// export default StudentLogin

import StudentDashboard from './StudentDashboard';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentLogin({handlestudentShow}) {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const validate = (e) => {
    if (id!=='' && password !== '') {
      handleLogin(e);
    } else {
      alert("Enter all details");
    }
  }


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://172.17.15.186:3006/login", { id , password });
      if (response.status === 200) {
        handlestudentShow(id);
        navigate("/StudentDashboard");
      } else {
        alert("Please enter valid credentials");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row md:items-center bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:basis-1/2">
          <img
            src="https://www.allen.ac.in/ace2324/assets/images/login.png"
            alt="Login Illustration"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="md:basis-1/2 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Roll Number</label>
              <input
                type="text"
                placeholder="Enter your roll number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
            onClick={validate}
         
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition-colors duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
