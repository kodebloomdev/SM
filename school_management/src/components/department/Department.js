import React from 'react';
import { Link } from 'react-router-dom';
import { FaFlask, FaCalculator, FaLandmark, FaChartLine, FaPaintBrush, FaRunning, FaLaptopCode, FaLanguage } from 'react-icons/fa';
import schoolImage from '../../assets/dep1.jpeg';      // Left-side image
import schoolImage2 from '../../assets/dep2.jpg';     // Right-side image

const Departments = () => {
  const departments = [
    { name: "Science", url: "/science", icon: <FaFlask className="mr-2" /> },
    { name: "Mathematics", url: "/mathematics", icon: <FaCalculator className="mr-2" /> },
    { name: "Humanities", url: "/humanities", icon: <FaLandmark className="mr-2" /> },
    { name: "Commerce", url: "/commerce", icon: <FaChartLine className="mr-2" /> },
    { name: "Arts", url: "/arts", icon: <FaPaintBrush className="mr-2" /> },
    { name: "Physical Education", url: "/physical-education", icon: <FaRunning className="mr-2" /> },
    { name: "Computer Science", url: "/computer-science", icon: <FaLaptopCode className="mr-2" /> },
    { name: "Languages", url: "/languages", icon: <FaLanguage className="mr-2" /> },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 overflow-hidden">

      {/* Left Image */}
      <div className="w-full md:w-[35%] hidden md:block">
        <img
          src={schoolImage}
          alt="Left Side"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center Content - SILVER THEME */}
      <div className="flex-1 flex justify-center items-center p-6">
        <div className="p-8 max-w-lg w-full rounded-xl shadow-xl border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-300 to-gray-400 py-3 rounded-md shadow-md mb-4 text-gray-800">
            🎓 School Departments
          </h2>
          <ul className="space-y-3 mt-4">
            {departments.map((department, index) => (
              <li key={index} className="text-lg">
                <Link
                  to={department.url}
                  className="flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-500 ease-in-out"
                >
                  {department.icon}
                  {department.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[35%] hidden md:block">
        <img
          src={schoolImage2}
          alt="Right Side"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Departments;
