import React, { useEffect, useState } from 'react'
import icom from '../../../assets/teacher.png'

function TeacherPanelDash() {

    const [currentTime, setCurrentTime] = useState("");
  const [cards, setCards] = useState([]); // Initialize cards state

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
        hour12: true,
      });
      setCurrentTime(formattedTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  // Hardcoded card data
  useEffect(() => {
    const cardData = [
      { id: 1, value: " ", title: "Messages", color: "#ff4b5c", icon: "🔔" },
      { id: 3, value: " ", title: "Time Table", color: "#a846ed", icon: "📚" },
      { id: 4, value: " ", title: "Attendance", color: "#f69c0b", icon: "👥" },
      { id: 5, value: " ", title: "Fee", color: "#ff4b5c", icon: "💲" },
    ];
    setCards(cardData); // Populate cards state with hardcoded data
  }, []);


  return (
    <div className="flex h-screen">

      {/* Main Content */}
      <div className="flex-1 p-5">
        {/* Profile Section */}
        <div className="flex items-center space-x-5 mb-8 border p-3  bg-blue-600 rounded-md">
          {/* Profile Picture */}
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              src={icom}
              alt="Profile Avatar"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Welcome Message */}
          <div>
            <h2 className="text-2xl text-white font-semibold">Welcome, Teacher</h2>
            {/* Date & Time */}
            <div className="text-gray-300">{currentTime}</div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md border rounded-lg p-4 text-center"
            >
              <div
                className="text-3xl w-12 h-12 flex items-center justify-center mx-auto rounded-full mb-3"
                style={{ backgroundColor: card.color }}
              >
                {card.icon}
              </div>
              <h3 className="text-lg font-bold">{card.value}</h3>
              <p className="text-gray-500">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeacherPanelDash