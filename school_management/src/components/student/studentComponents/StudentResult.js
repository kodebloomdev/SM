import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const studentResults = {
  "01": { department: "cse", marks: "85%" },
  "02": { department: "ece", marks: "78%" },
  "03": { department: "it", marks: "92%" },                 //added three sections
};

export default function StudentResult() {
  const [rollNumber, setRollNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function fetchResult() {
    setError("");

    if (!rollNumber.trim() || !department.trim()) {
      setError("Please enter both Roll Number and Department.");
      return;
    }

    const student = studentResults[rollNumber.trim()];
    if (student && student.department.toLowerCase() === department.toLowerCase()) {
      navigate(`/result/${rollNumber}/${department}/${student.marks}`);
      
    } else {
      setError("No result found! Please check your details.");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Check Your Result</h2>
        <input
          type="text"
          placeholder="Enter Roll Number"
          className="border p-3 w-full rounded mb-3 text-lg"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Department"
          className="border p-3 w-full rounded mb-3 text-lg"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-3 rounded w-full mt-2 hover:bg-blue-600"
          onClick={fetchResult}
        >
          Get Result
        </button>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </div>
    </div>
  );
}
