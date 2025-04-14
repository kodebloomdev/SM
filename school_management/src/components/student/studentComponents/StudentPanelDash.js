import React, { useState, useEffect } from "react";
import icon from '../../../assets/student/boy.png'

const StudentPanelDash = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [cards, setCards] = useState([]);

  // Update current date and time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(formattedTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cardData = [
      { id: 1, value: " ", title: "Messages", color: "bg-red-500", icon: "🔔" },
      { id: 2, value: " ", title: "Videos", color: "bg-green-500", icon: "🎥" },
      { id: 3, value: " ", title: "Events", color: "bg-purple-500", icon: "👥" },
      { id: 4, value: " ", title: "Circular", color: "bg-yellow-500", icon: "📚" },
      { id: 5, value: " ", title: "Fees", color: "bg-red-500", icon: "💲" },
    ];
    setCards(cardData);
  }, []);

  return (
    <div className="flex h-screen font-sans bg-gray-100">
      {/* Main Content */}
      <div className="flex flex-col flex-grow p-5 bg-gray-100">
        {/* Profile Section */}
        <div className="flex items-center justify-between p-4 bg-blue-500 text-white rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src={icon}
              alt="Profile Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Welcome, John Doe!</h2>
              <p className="text-sm mt-1 ">{currentTime}</p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-200 ${card.color}`}
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="text-white font-bold">{card.value}</h3>
              <p className="text-white">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentPanelDash;
