import axios from 'axios';
import React, { useState } from 'react'
import { useContext } from 'react'
import {ToggleContext} from "../App.js"
import { useNavigate } from 'react-router-dom';
function CreateTest() {
    const navigate = useNavigate();
    const [fact,testquestions,setTestquestions] = useContext(ToggleContext)
    console.log(fact,"fact from context")
    const [testName, setTestName] = useState('')
    const [id, setId] = useState('')
    const [subject, setSubject] = useState('')
    const [topic, setTopic] = useState('')
    const [selectedOption, setSelectedOption] = useState('');
    const [questions, setQuestions] = useState('')
    const getTestName = (e) =>[
        setTestName(e.target.value)
    ]
    const getQuestion = (e)=>{
        setQuestions(e.target.value)
    }
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
    const getId = (e)=>{
        setId(e.target.value)
    }
    const getSubject = (e)=>{
        setSubject(e.target.value)
    }
    const getTopic = (e)=>{
        setTopic(e.target.value)
    }
    var data=""
    const validate =()=>{ 
            // console.log(fact)
            if( testName!=='' &&  subject!=='' && topic!=='' && selectedOption!=='' &&questions!==''){
                console.log("In If")
                 handleCreateTest();
            }
            else{
                //navigate("/studentRegister")
                console.log("Im in else")
                //handleCreateTest();
                
        
                alert("Enter all the details");
            }
          }
        
    const handleCreateTest = async(e) =>{
        e.preventDefault();
      //  alert("Created test successfully");
      try{
        console.log(fact, questions)
      const response = await axios.post("http://172.17.15.186:3006/addTest", {
        fact, testName, subject, topic, questions

      });
      if (response.status === 200) {
        data= response.data
        setTestquestions(data)
      //  <div> {data.map(each=><p>{each.question}</p>)} </div>
      console.log(data)
      console.log("+++++++++++++")
      console.log(testquestions)
      alert(response.data.response.Questions[0]) 
      navigate("/testquestions");
      } else {
        alert("Credentials are incorrect. Enter valid credentials");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
    }
  return (
    <div className='flex flex-row justify-center mt-40 '>
      <div className="basis-2/5 ">
    <img src="https://bigdataanalyticsnews.com/wp-content/uploads/2021/12/school-management.jpg"/>
</div>
<div  className="basis -3/5 ml-20  flex flex-col justify-center">
      {/* <label className="text-m">Faculty Id</label>
        <br/>
            <input type="text" placeholder="Enter your id" 
            onChange={getId}
            className="border border-red-400 rounded"/> 
            <br/> */}
            <label className="text-m">Test Name</label>
        <br/>
            <input type="text" placeholder="Enter test name" 
            onChange={getTestName}
            className="border border-red-400 rounded"/> 
            <br/>
          
            <label className="text-m">Subject</label>
            <br/>
     
            <input type="text" placeholder="Enter your subject"   onChange={getSubject}
            className="border border-red-400 rounded"/>
            <br/>
            <br/><br/>
            <label className="text-m">Topic</label>
            <br/>
     
            <input type="text" placeholder="Enter your topic"   onChange={getTopic}
            className="border border-red-400 rounded"/>
            <br/>
            <br/><br/>
            <label className="text-m">Number Of Questions</label>
            <br/>
     
            <input type="text" placeholder="Enter no of questions"   onChange={getQuestion}
            className="border border-red-400 rounded"/>
            <br/>
            <br/><br/>
            {/* <label>Difficulty Label</label>
            <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={selectedOption}
        onChange={handleChange} >
        <option value="" disabled>Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select> */}
            <button 
            onClick = {handleCreateTest}
            type="submit"
             className="bg-red-400 text-white rounded px-2 mt-4 "
             >Create Test
             </button>
             {data}
    </div>
    </div>
  )
}

export default CreateTest




// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// function CreateTest() {
//     const navigate = useNavigate()
//   const [testName, setTestName] = useState('');
// //   const [id, setId] = useState('');
//   const [subject, setSubject] = useState('');
// //   const [fact,setFact] = useContext(fact);
//   const [topic, setTopic] = useState('');
//   const [selectedOption, setSelectedOption] = useState('');
//   const [questions, setQuestions] = useState('');
//   const validate =()=>{ 
//     // console.log(fact)
//     if( testName!=='' &&  subject!=='' && topic!=='' && selectedOption!=='' &&questions!==''){
//         console.log("In If")
//          handleCreateTest();
//     }
//     else{
//         //navigate("/studentRegister")
//         console.log("Im in else")
//         //handleCreateTest();
        

//         alert("Enter all the details");
//     }
//   }

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleCreateTest = async (e) => {
//    e.preventDefault();
//    console.log("Im here in handle create test");
// //    // alert("Created test successfully");
    
//    };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100">
//       <h1 className="text-center font-bold text-blue-500 text-3xl mt-4">Create Test</h1>
//       <div className="flex flex-col md:flex-row justify-center items-center md:mt-5 bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="md:basis-2/5">
//           <img src="https://bigdataanalyticsnews.com/wp-content/uploads/2021/12/school-management.jpg" alt="School management" className="w-full h-full object-cover" />
//         </div>
//         <div className="md:basis-3/5 p-8 md:p-12">
//           <form className="flex flex-col space-y-4">
//             {/* <label className="text-lg">Faculty Id</label>
//             <input
//               type="text"
//               placeholder="Enter your id"
//               onChange={(e) => setId(e.target.value)}
//               className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//             /> */}

//             <label className="text-lg">Test Name</label>
//             <input
//               type="text"
//               placeholder="Enter test name"
//               onChange={(e) => setTestName(e.target.value)}
//               className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//             />

//             <label className="text-lg">Subject</label>
//             <input
//               type="text"
//               placeholder="Enter your subject"
//               onChange={(e) => setSubject(e.target.value)}
//               className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//             />

//             <label className="text-lg">Topic</label>
//             <input
//               type="text"
//               placeholder="Enter your topic"
//               onChange={(e) => setTopic(e.target.value)}
//               className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//             />

//             <label className="text-lg">Number Of Questions</label>
//             <input
//               type="text"
//               placeholder="Enter no of questions"
//               onChange={(e) => setQuestions(e.target.value)}
//               className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//             />

//             <label className="text-lg">Difficulty Level</label>
//             <select
//               className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline"
//               value={selectedOption}
//               onChange={handleChange}
//             >
//               <option value="" disabled>Select Difficulty</option>
//               <option value="easy">Easy</option>
//               <option value="medium">Medium</option>
//               <option value="hard">Hard</option>
//             </select>

//             <button
//               onClick={validate}
//               type="submit"
//               className="bg-blue-500 text-white rounded-md py-2 mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition-colors duration-300"
//             >
//               Create Test
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateTest;