import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useContext } from 'react'
import {ToggleContext} from "../App.js"
function StudentReport() {
    const studentID = useContext(ToggleContext)
    console.log(studentID,"fact from context")
    const [studentid, setStudentId] = useState(3)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('http://172.17.15.186:3006/sreports', {studentID} );
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
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Student Report</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Test ID</th>
            <th className="py-2 px-4 border-b">Score</th>
            <th className="py-2 px-4 border-b">Result</th>
          </tr>
        </thead>
        <tbody>
          {data.map((each) => (
            <tr key={each.id}>
              <td className="py-2 px-4 border-b">{each.testId}</td>
              <td className="py-2 px-4 border-b">{each.score}</td>
              <td className="py-2 px-4 border-b">{each.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
    
    // <div>StudentReport</div>
    // <div>
    //     {data.map(each=><div><p>{each.testId}</p>
    //     <p>{each.score}</p>
    //     <p>{each.result}</p>
       
    // //     {/* <textarea cols="12" rows="1"  className="border border-gray-300
    // //  rounded-md p-2 focus:outline-none focus:border-blue-500 "></textarea></div>)}
    // //   */}
    //     </div>)}
   
    // </div>
//     <div className="container mx-auto p-4">
//     <h1 className="text-2xl font-bold mb-4">Fetched Data:</h1>
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Test ID</th>
//             <th className="py-2 px-4 border-b">Score</th>
//             <th className="py-2 px-4 border-b">Result</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((each) => (
//             <tr key={each.id}>
//               <td className="py-2 px-4 border-b">{each.testId}</td>
//               <td className="py-2 px-4 border-b">{each.score}</td>
//               <td className="py-2 px-4 border-b">{each.result}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
  )
}

export default StudentReport