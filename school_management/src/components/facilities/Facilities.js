import React from 'react';
import { Link } from 'react-router-dom';
import schoolImage from '../../assets/fac1.jpeg';
import schoolImage2 from '../../assets/fac2.jpg'; // right-side image

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
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 overflow-hidden">

      {/* Left Image */}
      <div className="w-full md:w-[35%] hidden md:block">
        <img
          src={schoolImage}
          alt="School Left"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center Content - SILVER THEME */}
      <div className="flex-1 flex justify-center items-center p-6">
        <div className="p-8 max-w-lg w-full rounded-xl shadow-xl border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-300 to-gray-400 py-3 rounded-md shadow-md mb-4 text-gray-800">
            🏫 School Facilities
          </h2>
          <ul className="space-y-3 mt-4">
            {facilities.map((facility, index) => (
              <li key={index} className="text-lg">
                <Link
                  to={facility.url}
                  className="block bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-md text-center transition-all duration-500 ease-in-out"
                >
                  {facility.name}
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
          alt="School Right"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Facilities;
