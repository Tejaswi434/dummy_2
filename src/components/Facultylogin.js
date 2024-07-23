
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { ToggleContext } from '../App';

function Facultylogin() {
const contexts = useContext(ToggleContext)
console.log(contexts)
const [fact1,setFact1]=useState(contexts[0])
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  let designation=""
  const validate = () => {
    if (id !== '' && password !== '') {
      handleLogin();
    } else {
      alert("Enter valid credentials");
    }
  };
const handling =()=>{
  // contexts.setShow(1)
  console.log(id)
  setFact1(id);

}
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://172.17.15.186:3006/login", { id, password });

      if (response.status === 200) {
    // console.log("heloo enetred main")
        designation=response.data;
        // console.log("hello main id",id)
        // setFactId(id)
    // handling()
    setFact1(id)
          // console.log("new entered")
        console.log("fact1:",fact1)
        // setFactId(id)
        if(response.data==="student"){
          // console.log("entered")
          navigate("/facultydashboard")
        }
        
        // console.log("Login successfull")
        // navigate("/facultydashboard")
        // navigate("/layout")
      } else {
        alert("Credentials are incorrect. Enter valid credentials");
      }
    } catch (error) {
      console.log(error)
      alert("An error occurred. Please try again.",error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row md:items-center bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:basis-1/2">
          <img
            src="https://www.vidyalayaschoolsoftware.com/webassets/images/call_action.svg"
            alt="Login Illustration"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="md:basis-1/2 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">User Login</h2>
          <form onSubmit={(e) => { e.preventDefault(); validate(); }}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">User Name</label>
              <input
                type="text"
                placeholder="Enter your ID"
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
              type="submit" onClick ={validate}
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

export default Facultylogin;




