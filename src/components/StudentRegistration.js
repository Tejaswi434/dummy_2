import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import {ToggleContext} from "../App.js"
function StudentRegistration() {
    const fact = useContext(ToggleContext)
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [roll, setRoll] = useState('');

  const submitting = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://172.17.15.186:3006/sregister", {
        faculty_id : fact,
        student_id: roll,
        userName: name,
      });
      if (response.status === 200) { 
       // console.log(fact)
        setRoll('');
        setName('');
        alert("Student registered successfully");
        console.log("okkkkk");
        // navigate("/login"); // Uncomment if navigation is needed
      } else {
        alert("Error: Unable to register. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while registering. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-center font-bold text-red-500 text-3xl mt-8">Student Registration</h1>
      <div className="flex flex-col md:flex-row justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden mt-16 md:mt-24 p-6 md:p-12 w-full md:w-4/5 lg:w-3/5">
        <div className="md:basis-2/5 mb-6 md:mb-0">
          <img
            src="https://bigdataanalyticsnews.com/wp-content/uploads/2021/12/school-management.jpg"
            alt="School Management"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:basis-3/5 flex flex-col space-y-4">
          <form className="flex flex-col space-y-4">
            <label className="text-lg font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="text-lg font-medium">Roll No</label>
            <input
              type="text"
              placeholder="Enter your roll number"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              onClick={submitting}
              className="bg-red-500 text-white rounded-md py-2 mt-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
            >
              Register
            </button>
          </form>

          {/* <div className="text-center mt-6">
            <Link to="/login">
              <button className="text-sm text-blue-500 hover:text-blue-700">Already have an account?</button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default StudentRegistration;








































































































































































// import React,{useState} from 'react'
// import {Link,useNavigate} from "react-router-dom" 
// import axios from 'axios'
// function StudentRegistartion() { 
//     const navigate = useNavigate();
//     const [id,setId]=useState("")
//     const [name,setName]=useState("")
//     const [department,setDepartment]=useState("")
//     // const [password,setPassword]=useState("")
//     const [roll,setRoll]=useState("")
//     const submitting=async (e)=>{
//   e.preventDefault() 
//  const response = await axios.post("http://172.17.15.186:3006/sregister",
//   {
//     student_id: roll ,
//   userName : name

//   })
//    if(response.status===200){
//     // navigate("/login") 
//     setRoll('')
//     setName('')
//     alert("Student registred successfully")
//     console.log("okkkkk")
//    }
//    else{
//     setRoll('')
//     setName('')
//     alert("Enter valid credentials")
//    }
//  }
    

//     // const gettingName=(e)=>{
//     //     setName(e.target.value)
//     // }
//     // const gettingPassword=(e)=>{
//     //     setPassword(e.target.value)
//     // }
//     const gettingroll=(e)=>{
//         setRoll(e.target.value)
//     } 
//     // const gettingid =(e)=>{
//     //     setId(e.target.value)
//     // } 
//     const gettingname =(e)=>{
//         setName(e.target.value)
//     }

//   return ( 
//     <div><h1
//     className="text-center mt-8 font-bold  text-red-500 text-3xl">Student Registration</h1>
//     <div className="flex flex-row justify-center mt-40">

// <div className="basis-2/5 ">
//     <img src="https://bigdataanalyticsnews.com/wp-content/uploads/2021/12/school-management.jpg"/>
// </div>
//         <div className="basis -3/5 ml-20 mt-20 flex flex-col justify-center">
//         <label className="text-m">Name</label>
//         <br/>
//             <input onChange={gettingname} value={name}
//             type="text" placeholder="Enter your id" className="border border-red-400 rounded"/> 
//             <br/>
//             <br/>
//             <br></br>
//             {/* <label className="text-m">Department</label>
//             <br/>
     
//             <input  onChange={gettingname} value={name}
//             type="text" placeholder="Enter your department"  className="border border-red-400 rounded"/>
//             <br/>
//             <br/><br/> */}
//             {/* <label className="text-m">FacultyId</label>
//             <br/>
     
//             <input  onChange={gettingPassword} value={password}
//             type="text" placeholder="Enter your password"  className="border border-red-400 rounded"/>
//             <br/>
//             <br/><br/> */}
//             <label className="text-m">Roll No</label> 
//             <br/>
//             <input value={roll}
//             onChange={gettingroll}type="text" 
//             placeholder="Enter your roll number"
//               className="border border-red-400 rounded"/>
//             <br/>
//             <br/> 
//             <br/> 
//             <button type="submit" className="bg-red-400 text-white rounded px-2 mt-4 "
            
//             onClick={submitting}>Register</button>

//             {/* <label className="text-m">FacultyId</label> 
//             <br/>
//             <input value={id}
//             onChange={gettingId}type="text" placeholder="Enter your id "  className="border border-red-400 rounded"/>
//             <br/>
//             <br/> 
//             <br/>  */}

           
//               <br/>
//               <br/>
//               <br/>
//           {/* <Link to="/login" 
          
//           >
//             <button className="text-sm hover:bg-red-200 w-40 rounded mt-2">Already account?</button>

//             </Link>     */}
//     </div>
//     </div>
//     </div>
//   )
// }

// export default StudentRegistartion