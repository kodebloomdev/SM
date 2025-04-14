import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherSidebar = ({navic, page}) => {

  const navigate = useNavigate();

    const arryay = ['🏠 Dashboard', '📝 Students', '📚 Courses', '📊 Result', '🔔 Notification', '🔒 Logout' ]
  

    return (
    <div className="mt-1 h-screen w-64 bg-violet-500 text-white">
      <div className="sidebar-header text-center p-4 text-2xl font-semibold border-b-2 border-gray-600">
        🎓 Teacher Panel
      </div>
      <ul className="sidebar-menu mt-6 space-y-4">
      {arryay.map((item, index) => (
          <li  key={index}
            onClick={() => {
              if(item !== "🔒 Logout") navic(item);
              if(item === "🔒 Logout") navigate('/')
            }}
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              item === page ? "bg-gray-700" : null
            } ${
              item === "🔒 Logout" ? "hover:bg-red-600" : "hover:bg-gray-700"
            }`}
          >
            {item}
          </li>
      ))}
      </ul>
    </div>
  );
};

export default TeacherSidebar;
