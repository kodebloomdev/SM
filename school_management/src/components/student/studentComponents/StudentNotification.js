import React, { useState } from "react";

function NotificationFunction() {
  const [message, setMessage] = useState(""); // Fixed useState syntax

  function func() {
    setMessage("This is message Box"); // Fixed function call
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold mb-4">This Is Notification Page</h1>
      <button
        onClick={func}
        className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
      >
        Click Me
      </button>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
}

export default NotificationFunction;
