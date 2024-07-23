import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function FacultyRegistration() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [id, setId] = useState("");

  const selectingLogin = () => {
    setTrigger(true);
  }

  const triggering = () => {
    setTrigger(false);
  }

  const validate = (e) => {
    if (name !== '' && password !== '' && department !== '' && id !== '') {
      submitting(e);
    } else {
      alert("Enter all details");
    }
  }

  const submitting = async (e) => {
    
    e.preventDefault();
    const response = await axios.post("http://172.17.15.186:3006/register", {
      id: id,
      userName: name,
      password: password,
      Department: department
    });
    if (response.status === 200) {
      navigate("/login");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-center font-bold text-red-500 text-3xl ">Faculty Registration</h1>
      <div className="flex flex-col md:flex-row justify-center items-center  mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:basis-2/5">
          <img src="https://www.vidyalayaschoolsoftware.com/webassets/images/school_software_1.png" alt="School software" className="w-full h-full object-cover" />
        </div>
        <div className="md:basis-3/5 p-8 md:p-12">
          <div className="flex flex-col">
            <label className="text-lg mb-2">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
            <label className="text-lg mt-4 mb-2">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
            <label className="text-lg mt-4 mb-2">Department</label>
            <input
              onChange={(e) => setDepartment(e.target.value)}
              value={department}
              type="text"
              placeholder="Enter your department"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
            <label className="text-lg mt-4 mb-2">FacultyId</label>
            <input
              onChange={(e) => setId(e.target.value)}
              value={id}
              type="text"
              placeholder="Enter your id"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md py-2 mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition-colors duration-300"
              onClick={validate}
            >
              Register
            </button>
            <div
            onMouseOut={triggering}
            onMouseOver={selectingLogin} >
            <button
              
              className="text-sm hover:bg-blue-200 w-40 rounded-md mt-4 py-2 transition-colors duration-300"
            >
              Already have an account?
            </button>
           
            {trigger &&
              <div className="mt-2">
                <Link to="/login"><p className="text-blue-500 hover:underline">Faculty</p></Link>
                <Link to="/studentlogin"><p className="text-blue-500 hover:underline">Student</p></Link>
              </div> 
              
            } 
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyRegistration;




// import React,{useState} from 'react'
// import {Link,useNavigate} from "react-router-dom" 
// import axios from 'axios'
// function Facultyregistartion() { 
//     const navigate = useNavigate();
//     const [ login, setLogin] = useState(false)
//     const [trigger, setTrigger] = useState(false)
//     const [name,setName]=useState("")
//     const [password,setPassword]=useState("")
//     const [department,setDepartment]=useState("")
//     const [id,setId]=useState("") 
//     const selectingLogin =()=>{
//       setTrigger(true)

//     }
//     const triggering =()=>{
//       setTrigger(false)
//     }
//     const validate = (e)=>{
//       if(name !== '' && password!=='' && department!=='' && id!== ''){
//         submitting(e)
//       }
//       else{
//         alert("Enter all details");
//       }
//     }
//     const submitting=async (e)=>{
//   e.preventDefault() 
// //validate();
//  const response = await axios.post("http://172.17.15.186:3006/register",
//   {id: id, 
//   userName : name,
//   password : password,
//    Department:department})
//    if(response.status===200){
//     navigate("/login")
//    }
//  }
    

//     const gettingName=(e)=>{
//         setName(e.target.value)
//     }
//     const gettingPassword=(e)=>{
//         setPassword(e.target.value)
//     }
//     const gettingDepartment=(e)=>{
//         setDepartment(e.target.value)
//     } 
//     const gettingId=(e)=>{
//         setId(e.target.value)
//     }
//   return ( 
//     <div><h1
//     className="text-center  font-bold  text-red-500 text-3xl">Faculty Registration</h1>
//     <div className="flex flex-row justify-center mt-40">

// <div className="basis-2/5 ">
//     <img src="https://www.vidyalayaschoolsoftware.com/webassets/images/school_software_1.png"/>
// </div>
//         <div className="basis -3/5 ml-20 mt-10 flex flex-col justify-center">
//         <label className="text-m">Name</label>
//         <br/>
//             <input onChange={gettingName} value={name}
//             type="text" placeholder="Enter your name" className="border border-red-400 rounded"/> 
//             <br/>
//             <br/>
//             <br></br>
//             <label className="text-m">Password</label>
//             <br/>
     
//             <input  onChange={gettingPassword} value={password}
//             type="password" placeholder="Enter your password"  className="border border-red-400 rounded"/>
//             <br/>
//             <br/><br/>
//             <label className="text-m">Department</label> 
//             <br/>
//             <input value={department}
//             onChange={gettingDepartment}type="text" placeholder="Enter your department"  className="border border-red-400 rounded"/>
//             <br/>
//             <br/> 
//             <br/> 

//             <label className="text-m">FacultyId</label> 
//             <br/>
//             <input value={id}
//             onChange={gettingId}type="text" placeholder="Enter your id "  className="border border-red-400 rounded"/>
//             <br/>
//             <br/> 
//             <br/> 

//             <button type="submit" 
//             className="bg-red-400 text-white rounded px-2 mt-4 "
            
//             onClick={validate} 
            
//             >Register</button>
//               <br/>
//               <br/>
//               <br/>
         
          
          
//             <div>
//             <button 
//             onMouseOuts={triggering}
          
//            onMouseOver={selectingLogin} 
//             className="text-sm hover:bg-red-200 w-40 rounded mt-2">Already account?</button>
            
//             {trigger&&  <div>
//              <Link to ="/login"> <p>Faculty</p></Link> 
//              <Link to ="/studentlogin">    <p>Student</p></Link>
//             </div> }
// </div>
            
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Facultyregistartion

