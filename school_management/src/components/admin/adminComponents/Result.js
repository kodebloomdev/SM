import React, { useState } from "react";

const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const initialResults = [
  {
    id: 1,
    name: "John Doe",
    rollNumber: "12345",
    class: "Class 10",
    section: "A",
    subject: "Mathematics",
    marks: 85,
    totalMarks: 100,
    grade: "A",
  },
  {
    id: 2,
    name: "Jane Smith",
    rollNumber: "12346",
    class: "Class 12",
    section: "B",
    subject: "Science",
    marks: 78,
    totalMarks: 100,
    grade: "B",
  },
  {
    id: 3,
    name: "Mark Johnson",
    rollNumber: "12347",
    class: "Class 10",
    section: "A",
    subject: "History",
    marks: 92,
    totalMarks: 100,
    grade: "A+",
  },
  {
    id: 4,
    name: "Emily Davis",
    rollNumber: "12348",
    class: "Class 8",
    section: "C",
    subject: "English",
    marks: 68,
    totalMarks: 100,
    grade: "C",
  },
];

const ResultCard = ({ result }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col space-y-2">
    <h3 className="text-lg font-semibold">{result.name}</h3>
    <p className="text-sm text-gray-500">Roll No: {result.rollNumber}</p>
    <p className="text-sm text-gray-500">Class: {result.class}</p>
    <p className="text-sm text-gray-500">Section: {result.section}</p>
    <p className="text-sm text-gray-500">Subject: {result.subject}</p>
    <p className="text-sm text-gray-500">
      Marks: {result.marks}/{result.totalMarks}
    </p>
    <p className="text-sm text-gray-400">Grade: {result.grade}</p>
  </div>
);

function Results() {
  const [results, setResults] = useState(initialResults);
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSection, setSelectedSection] = useState("All");
  const [newResult, setNewResult] = useState({
    name: "",
    rollNumber: "",
    class: "",
    section: "",
    subject: "",
    marks: "",
    totalMarks: "",
    grade: "",
  });

  // Filter and sort results
  const filteredResults = results.filter((result) => {
    return (
      (selectedClass === "All" || result.class === selectedClass) &&
      (selectedSection === "All" || result.section === selectedSection)
    );
  });

  const sortedResults = filteredResults.sort(
    (a, b) => parseInt(a.rollNumber) - parseInt(b.rollNumber)
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewResult({ ...newResult, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !newResult.name ||
      !newResult.rollNumber ||
      !newResult.class ||
      !newResult.section ||
      !newResult.subject ||
      !newResult.marks ||
      !newResult.totalMarks ||
      !newResult.grade
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setResults([
      ...results,
      { ...newResult, id: results.length + 1 }, // Add new result with unique id
    ]);
    setNewResult({
      name: "",
      rollNumber: "",
      class: "",
      section: "",
      subject: "",
      marks: "",
      totalMarks: "",
      grade: "",
    }); // Reset form
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-bold">Student Results</h1>
        <div>
          <p className="text-gray-500 text-sm">{formattedDate}</p>
        </div>
      </div>

      {/* Class and Section Filter Dropdowns */}
      <div className="mt-4 flex space-x-4">
        <div>
          <label htmlFor="classFilter" className="text-sm font-medium mr-2">
            Filter by Class:
          </label>
          <select
            id="classFilter"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="p-2 bg-white border rounded shadow-sm"
          >
            <option value="All">All Classes</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={`Class ${i + 1}`}>
                Class {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sectionFilter" className="text-sm font-medium mr-2">
            Filter by Section:
          </label>
          <select
            id="sectionFilter"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="p-2 bg-white border rounded shadow-sm"
          >
            <option value="All">All Sections</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
      </div>

      {/* Add New Result Form */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Add New Result</h2>
        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newResult.name}
            onChange={handleInputChange}
            className="p-2 border rounded shadow-sm"
          />
          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number"
            value={newResult.rollNumber}
            onChange={handleInputChange}
            className="p-2 border rounded shadow-sm"
          />
          <input
            type="text"
            name="class"
            placeholder="Class"
            value={newResult.class}
            onChange={handleInputChange}
            className="p-2 border rounded shadow-sm"
          />
          <input
            type="text"
            name="section"
            placeholder="Section"
            value={newResult.section}
            onChange={handleInputChange}
            className="p-2 border rounded shadow-sm"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={newResult.subject}
            onChange={handleInputChange}
            className="p-2 border rounded shadow-sm"
          />
          <input
            type="number"
            name="marks"
            placeholder="Marks"
            value={newResult.marks}
            onChange={handleInputChange}
            className="p-2 border rounded shadow-sm"
          />
          <input
            type="number"
            name="totalMarks"
            placeholder="Total Marks"
            value={newResult.totalMarks}
            onChange={handleInputChange}
            className="p-2 border rounded shadow-sm"
          />
          <input
            type="text"
            name="grade"
            placeholder="Grade"
            value={newResult.grade}
            onChange={handleInputChange}
            className="p-2 border rounded shadow-sm"
          />
          <button
            type="submit"
            className="p-2 bg-purple-500 text-white rounded shadow-md"
          >
            Add Result
          </button>
        </form>
      </div>

      {/* Results Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedResults.length > 0 ? (
          sortedResults.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No results found for the selected class and section.
          </p>
        )}
      </div>
    </div>
  );
}

export default Results;
