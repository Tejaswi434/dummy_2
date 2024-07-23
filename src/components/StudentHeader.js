import React from "react";
import { Link } from "react-router-dom";
function StudentHeader() {
  const studentArray = [
    {
      name: "Take Test",
      link: "/take-test",
    },
    {
      name: "Scores",
      link: "/student-report",
    },
    {
      name: "Logout",
      link: "/logout",
    },
  ];

  
  return (
    <div>
      <div>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between">
            <Link to="/" className="text-lg font-bold"></Link>
            <div className="space-x-4">
              {studentArray.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className="hover:bg-gray-700 px-3 py-2 rounded"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default StudentHeader;
