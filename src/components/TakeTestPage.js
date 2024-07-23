import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { useEffect } from 'react'
function TakeTestPage() {
   const navigate = useNavigate();
   const handleTest= ()=>{
      navigate("/attempt-test")
   }
    const[data,setData]=useState([]);
   //  const calling =async ()=>{
   //      const result = await axios.get("")
   //      if(result.status===200){
   //         setData(result.data)
   //      }
   // }
   // useEffect(()=>{calling()},[])
  return (
<div className='flex flex-row flex-wrap'>

<div class="max-w-sm p-6 bg-white border m-10 border-gray-200 rounded-lg shadow dark:bg-gray-800
 dark:border-gray-700 ">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         Test 1</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      This test 1 is related to Java</p>
    <button onClick ={handleTest} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Attempt test
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>


<div class="max-w-sm p-6 bg-white border border-gray-200 m-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Test 2</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This test is related to python</p>
    <button onClick ={handleTest}  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Attempt now
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>


<div class="max-w-sm p-6 bg-white border m-10 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900
         dark:text-white">Test 3</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      This test is related to MERN stack</p>
    <button onClick ={handleTest} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Attempt test
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>


<div class="max-w-sm p-6 bg-white border m-10 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Test 4</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
     This test is related to MEAN stack.</p>
    <button onClick ={handleTest}  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
     Attempt now
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>


<div class="max-w-sm p-6 bg-white border m-10 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Test 5</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
     This is test related to networks</p>
    <button onClick ={handleTest}  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
     Attempt now
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>



</div>
//     <div>
//     {data.map(item=>(
//     <div>
//        <p>TestId :{item.TestID}</p>
//        <p>QuestionID :{item.QuestionID}</p>
//        <p>QuestionName :{item.QuestionName}</p>
//        <p>Answer :{item.Answer}</p>
//     </div>
//     ))}
// </div>
  )
}

export default TakeTestPage 