import React, { useEffect, useState } from "react";
import Barchart from "./Barchart";
import Piechart from "./Piechart";
// import Calendar from "./Calendar";
import Notice from "./Notice";
import icon from '../../../assets/admin.png'

const Dashboard = () => {
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

  // Hardcoded card data
  useEffect(() => {
    const cardData = [
      { id: 1, value: "1220", title: "Total Students", color: "#ff4b5c", icon: "🎓" },
      { id: 2, value: "120", title: "Total Teachers", color: "#27cf60", icon: "📋" },
      { id: 3, value: "15", title: "Total Classes", color: "#a846ed", icon: "📚" },
      { id: 4, value: "50", title: "Faculty Room", color: "#f69c0b", icon: "📦" },
      { id: 5, value: "0", title: "Add Member", color: "#ff4b5c", icon: "👥" },
    ];
    setCards(cardData);
  }, []);

  return (
    <div className="main-content bg-gray-100 min-h-screen p-6">
      {/* Profile Section */}
      <div className="profile-container flex items-center bg-blue-600 shadow-md p-4 rounded-lg mb-6">
        <div className="profile-picture mr-4">
          <img
            src={icon}
            alt="Profile Avatar"
            className="profile-image w-16 h-16 rounded-full"
          />
        </div>
        <div className="profile-message flex-grow">
          <h2 className="text-2xl font-bold text-white">Welcome, Admin</h2>
          <div className="profile-date-time text-gray-200">{currentTime}</div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card bg-white shadow-md rounded-lg p-4 flex items-center space-x-4"
          >
            <div
              className="icon w-12 h-12 flex items-center justify-center rounded-full text-white text-xl"
              style={{ backgroundColor: card.color }}
            >
              {card.icon}
            </div>
            <div className="card-content">
              <h3 className="text-2xl font-bold text-gray-700">{card.value}</h3>
              <p className="text-sm text-gray-500">{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="content-section grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts Container */}
        <div className="charts-container lg:col-span-2 bg-gray-50 shadow-md rounded-lg lg:flex items-center justify-around p-4">
          <Barchart />
          <Piechart />
        </div>

        {/* Right Section */}
        <div className="right-section bg-gray-50 shadow-md rounded-lg p-4 space-y-6">
          {/* <Calendar /> */}
          <Notice />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
