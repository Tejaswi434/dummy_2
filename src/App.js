import logo from "./logo.svg";
import "./App.css";
import Facultylogin from "./components/Facultylogin";
import Facultyregistartion from "./components/Facultyregistartion";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Forgetpassword from "./components/Forgetpassword";
import StudentRegistartion from "./components/StudentRegistration";
import FacultyDashboard from "./components/FacultyDashboard";
import { useState, createContext } from "react";
import FacultyHeader from "./components/FacultyHeader";
import CreateTest from "./components/CreateTest";
import Logout from "./components/Logout";
import StudentLogin from "./components/StudentLogin";
import StudentDashboard from "./components/StudentDashboard";
import TakeTestPage from "./components/TakeTestPage";
import AttemptingTest from "./components/AttemptingTest";
import Standard from "./components/Standard";
import StudentReport from "./components/StudentReport";
import FacultyTest from "./components/FacultyTest";
import Testquestions from "./components/Testquestions";
export const ToggleContext = createContext();

function App() {
 
  const [fact, setFactId] = useState('hello');
  const [show, setShow] = useState(0);
  const [showStudent, setShowStudent] = useState();
  const [testquestions,setTestquestions]=useState([]);
  
  
  const handlestudentShow = () => {
   
    // else{navigate("/")}
  };
  const handleShow = (id,designation) => {
    console.log(id, "from props");
    console.log(show);
    setFactId(id);
    setShow(1);
  }; 
  return(
    <ToggleContext.Provider value={[fact,testquestions,show]}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Facultyregistartion />} />
    <Route path="/login"    element={<Facultylogin  />} />
    <Route path="/facultydashboard"    element={<FacultyDashboard />} />
   <Route  path="/studentRegister" element={<StudentRegistartion/>} /> 
   <Route path="/create-test" element={<CreateTest />} />
   <Route path="/testquestions" element={<Testquestions/>}/>
   <Route path="/logout" element={<Logout />} />
    </Routes>
    </BrowserRouter>
    </ToggleContext.Provider>
  )
}


  // if (show === 0) {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Facultyregistartion />} />
  //         <Route
  //           path="/login"
  //           element={<Facultylogin handleShow={handleShow}  />}
  //         />
  //         {/* <Route
  //           path="/studentlogin"
  //           element={<StudentLogin handlestudentShow={handlestudentShow} />}
  //         /> */}
  //       </Routes>
  //     </BrowserRouter>
      
  //   );
  // } else {
  //   if (show === 1 ) {
  //     return (
  //       <ToggleContext.Provider value={[fact,testquestions,setTestquestions,show,setShow]}>
  //         <BrowserRouter>
  //           <FacultyDashboard>
  //             <Routes>
  //               <Route path="/" element={<Facultyregistartion />} />
  //               {/* <img src="https://repository-images.githubusercontent.com/66
  //         4891756/e1c8195c-d581-4c6f-afc9-b3fa7c386b6b"/></Route> */}
  //               <Route
  //                 path="/studentRegister"
  //                 element={<StudentRegistartion />}
  //               />
  //               <Route path="/create-test" element={<CreateTest />} />
  //               {/* <Route path="/FacultyHeader" element={<Taketest/>}/>
  //           <Route path="/FacultyHeader" element={<Taketest/>}/> */}
  //           <Route path="/testquestions" element={<Testquestions/>}/>
  //               <Route path="/logout" element={<Logout />} />

  //               <Route />
  //             </Routes>
  //           </FacultyDashboard>
  //         </BrowserRouter>
  //       </ToggleContext.Provider>
  //     );
  //   } else {
  //     return (
  //       <ToggleContext.Provider value={showStudent}>
  //         <BrowserRouter>
  //           <StudentDashboard>
  //             <Routes>
  //               <Route path="/take-test" element={<TakeTestPage />} />
  //               <Route path="/attempt-test" element={<AttemptingTest />} />
  //               <Route path="/student-report" element={<StudentReport />} />
  //               <Route path="/faculty-test" element={<FacultyTest />} />
  //               {/* <Route path="/FacultyHeader" element={<Taketest/>}/>
  //        <Route path="/FacultyHeader" element={<Taketest/>}/>  */}
  //               {/* <Route path="/" element={<StudentRegistartion />} /> */}
  //               <Route path="/logout" element={<Logout />} />
  //               {/* <Route
  //                 path="/StudentDashboard"
  //                 element={<StudentDashboard />}
  //               /> */}
  //               <Route />
  //             </Routes>
  //           </StudentDashboard>
  //         </BrowserRouter>
  //       </ToggleContext.Provider>
  //     );
    
  

  // if(showStudent===2){

  //   <BrowserRouter >

  //   <StudentDashboard >
  //     <Routes>

  //        <Route path="/studentRegister" element={<StudentRegistartion/>}/>
  //      <Route path="/create-test" element={<CreateTest />}/>
  //      <Route path="/FacultyHeader" element={<Taketest/>}/>
  //       <Route path="/FacultyHeader" element={<Taketest/>}/>
  //     <Route path="/logout" element={<Logout />}/>
  //      <Route path="/StudentDashboard" element={<StudentDashboard />}/>
  //       <Route/>
  //     </Routes>
  //   </StudentDashboard>
  //   </BrowserRouter>
  // }
  // else{
  //   console.log("hi i am last one ")
  // }


export default App;
