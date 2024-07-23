import React,{useContext} from 'react'
import {ToggleContext} from "../App.js"
function Testquestions() {
    const [fact,testquestions] = useContext(ToggleContext)
    // const len = testquestions.response.questions.length;
    // const elements = Array.from({ length: len });
    console.log("thgis is considered")
    console.log(testquestions.response.Questions)
    
  return (
    
    <div>
    <div>Testquestions</div>
    <div>
    <div>
      {testquestions.response.QuestionNumbers.map((questionNumber, index) => (
        <div key={index}>
          <h3>Question {questionNumber}:</h3>
          <p>{testquestions.response.Questions[index]}</p>
          <ul>
            {testquestions.response.options[index].map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
          <p>Correct Answer: {testquestions.response.CorrectAnswer[index]}</p>
          <hr  className="px-9"/>
        </div>
      ))}
    </div>
    </div>
    <div>button</div>
    </div>
  )
}

export default Testquestions