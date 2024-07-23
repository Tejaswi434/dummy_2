import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
function AttemptingTest() {
    const [test, setTest] = useState(3)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
    const success=()=>{
      alert("successfully submitted")
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('http://172.17.15.186:3006/sendTest', {test} );
            console.log("HHJJUJIUHjgb")
            console.log(response.data);
            setData(response.data);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []); 
  return (<div>
    <div>
        {data.map(each=><div><p>{each.QuestionName}</p>
        <textarea cols="12" rows="1"  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 "></textarea></div>)} 
    </div>
    <br></br>
    <button onClick={success}
              type="submit"
              className="w-40 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition-colors duration-300"
            >Submit Answers
            </button>
    </div>
  )
}

export default AttemptingTest