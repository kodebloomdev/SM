import React from 'react';
import { Link } from 'react-router-dom';

const Departments = () => {
  const departments = [
    { name: "Science", url: "/science" },
    { name: "Mathematics", url: "/mathematics" },
    { name: "Humanities", url: "/humanities" },
    { name: "Commerce", url: "/commerce" },
    { name: "Arts", url: "/arts" },
    { name: "Physical Education", url: "/physical-education" },
    { name: "Computer Science", url: "/computer-science" },
    { name: "Languages", url: "/languages" }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="p-8 max-w-lg w-full rounded-2xl shadow-xl bg-gradient-to-br from-white to-gray-100">
        <h2 className="text-3xl font-bold text-center text-green-700 bg-gradient-to-r from-yellow-300 to-green-300 py-2 rounded-lg shadow-md">
          School Departments
        </h2>
        <ul className="space-y-3 mt-4">
          {departments.map((department, index) => (
            <li key={index} className="text-lg">
              <Link
                to={department.url}
                className="block text-green-700 font-semibold hover:text-green-900 hover:underline transition duration-300 bg-gradient-to-r from-green-200 to-green-400 py-2 px-4 rounded-lg text-center shadow-md"
              >
                {department.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Departments;
