import React, { useState } from "react";

const Notification = ({ message, type, onClose }) => {
  const getTypeStyles = (type) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800 border-green-400";
      case "error":
        return "bg-red-100 text-red-800 border-red-400";
      case "info":
        return "bg-blue-100 text-blue-800 border-blue-400";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-400";
      default:
        return "bg-gray-100 text-gray-800 border-gray-400";
    }
  };

  return (
    <div
      className={`flex items-center justify-between border-l-4 p-4 rounded shadow-md ${getTypeStyles(
        type
      )} max-w-md mx-auto my-4`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-sm font-bold text-gray-500 hover:text-gray-800 focus:outline-none"
      >
        ✕
      </button>
    </div>
  );
};

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {isVisible && (
        <Notification
          message="This is a sample notification!"
          type="success"
          onClose={handleClose}
        />
      )}
      <button
        onClick={() => setIsVisible(true)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Show Notification
      </button>
    </div>
  );
};

export default App;
