import React from 'react';
import { Link } from 'react-router-dom';

const Facilities = () => {
  const facilities = [
    { name: "Library", url: "/library" },
    { name: "Science Lab", url: "/science-lab" },
    { name: "Computer Lab", url: "/computer-lab" },
    { name: "Sports Complex", url: "/sports-complex" },
    { name: "Auditorium", url: "/auditorium" },
    { name: "Cafeteria", url: "/cafeteria" },
    { name: "Medical Room", url: "/medical-room" },
    { name: "Transport Facility", url: "/transport" },
    { name: "Hostel", url: "/hostel" },
    { name: "Music & Art Room", url: "/music-art" }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="p-8 max-w-lg w-full rounded-2xl shadow-xl bg-gradient-to-br from-white to-gray-200">
        <h2 className="text-3xl font-bold text-center text-indigo-700 bg-gradient-to-r from-purple-300 to-blue-300 py-2 rounded-lg shadow-md">
          School Facilities
        </h2>
        <ul className="space-y-3 mt-4">
          {facilities.map((facility, index) => (
            <li key={index} className="text-lg">
              <Link
                to={facility.url}
                className="block text-blue-700 font-semibold hover:text-blue-900 hover:underline transition duration-300 bg-gradient-to-r from-indigo-200 to-indigo-400 py-2 px-4 rounded-lg text-center shadow-md"
              >
                {facility.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Facilities; 