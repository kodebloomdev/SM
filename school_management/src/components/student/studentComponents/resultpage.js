import React from "react";
import { useParams } from "react-router-dom";

export default function ResultPage() {
  // Access parameters from the URL
  const { rollNumber, department, marks } = useParams();

  // Check if all parameters are defined
  if (!rollNumber || !department || !marks) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-red-500 text-xl">Invalid result details provided!</h2>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Student Result</h2>
        <p className="text-lg mb-2">Roll Number: {rollNumber}</p>
        <p className="text-lg mb-2">Department: {department.toUpperCase()}</p>
        <p className="text-lg mb-2">Marks: {marks}</p>
      </div>
    </div>
  );
}
