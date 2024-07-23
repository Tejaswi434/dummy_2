// // src/App.js
// import React from 'react';
// import DifficultyDropdown from './components/DifficultyDropdown';

// const App = () => {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-4">Select Difficulty</h1>
//       <DifficultyDropdown />
//     </div>
//   );
// };

// export default App;




// // src/components/DifficultyDropdown.js
// import React, { useState } from 'react';

// const DifficultyDropdown = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div className="inline-block relative w-64">
//       <select
//         className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
//         value={selectedOption}
//         onChange={handleChange}
//       >
//         <option value="" disabled>Select Difficulty</option>
//         <option value="easy">Easy</option>
//         <option value="medium">Medium</option>
//         <option value="hard">Hard</option>
//       </select>
//       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//         <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//           <path d="M10 12l-5-5h10l-5 5z" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default DifficultyDropdown;
