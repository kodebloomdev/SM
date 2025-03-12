import React, { useState, useEffect } from "react";

const initialStudents = [
  { id: 1, name: "Andy Raj Kapoor", status: "P" },
  { id: 2, name: "Alex Martin", status: "P" },
  { id: 3, name: "Andria Martin", status: "P" },
  { id: 4, name: "Bruna Sinsin", status: "A" },
  { id: 5, name: "Bhaskar Mishra", status: "P" },
  { id: 6, name: "Chris Martin", status: "A" },
  { id: 7, name: "Carmen Martin", status: "P" },
];

const AttendanceCard = ({ student, toggleStatus }) => {
  const statusClass = student.status === "P" ? "bg-green-500" : "bg-red-500";

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div>
          <p className="text-lg font-semibold">{student.name}</p>
          <p className="text-sm text-gray-500">
            Status: {student.status === "P" ? "Present" : "Absent"}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => toggleStatus(student.id)}
          className={`px-4 py-2 text-white font-bold rounded-lg ${statusClass}`}
        >
          {student.status}
        </button>
      </div>
    </div>
  );
};

const TeaccherStudents = () => {
  const [students, setStudents] = useState(initialStudents);
  const [currentDate, setCurrentDate] = useState("");

  // Update current date dynamically
  useEffect(() => {
    const now = new Date();
    const dateString = now.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    setCurrentDate(dateString);
  }, []);

  const toggleStatus = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, status: student.status === "P" ? "A" : "P" }
          : student
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Student Attendance</h1>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
            <span>{currentDate}</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
            <span>Class 6th A</span>
          </button>
        </div>
      </header>
      <div>
        {["A", "B", "C"].map((section) => (
          <div key={section}>
            <h2 className="text-xl font-semibold text-gray-600 mb-2">{section}</h2>
            {students
              .filter((_, index) => Math.floor(index / 3) === section.charCodeAt(0) - 65)
              .map((student) => (
                <AttendanceCard
                  key={student.id}
                  student={student}
                  toggleStatus={toggleStatus}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeaccherStudents;
