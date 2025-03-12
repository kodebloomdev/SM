import React from "react";

function ScienceSubject() {
  const subjects = [
    {
      name: "Physics",
      description: "The study of matter, energy, and motion.",
      topics: ["Laws of Motion", "Electricity", "Light", "Waves", "Astronomy"],
      labExperiments: [
        "Measuring speed and acceleration",
        "Simple electrical circuits",
        "Reflection and refraction of light",
      ],
    },
    {
      name: "Chemistry",
      description: "The study of substances, their properties, and reactions.",
      topics: [
        "States of Matter",
        "Chemical Reactions",
        "Acids and Bases",
        "Atomic Structure",
        "Organic Chemistry",
      ],
      labExperiments: [
        "Testing pH of solutions",
        "Observing chemical changes",
        "Preparing and studying chemical compounds",
      ],
    },
    {
      name: "Biology",
      description: "The study of living organisms, including plants and animals.",
      topics: [
        "Cell Structure",
        "Human Anatomy",
        "Genetics and Evolution",
        "Plant and Animal Kingdom",
        "Environmental Science",
      ],
      labExperiments: [
        "Microscopic study of cells",
        "Dissection of plants and animals",
        "Testing food for nutrients",
      ],
    },
    {
      name: "Environmental Science",
      description: "The study of the environment and human impact on nature.",
      topics: [
        "Ecosystems and Biodiversity",
        "Pollution and Waste Management",
        "Renewable and Non-Renewable Resources",
        "Climate Change and Its Impact",
      ],
      labExperiments: [
        "Planting trees",
        "Recycling projects",
        "Water conservation awareness",
      ],
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Science Subject in School</h1>
      <p>Science helps students understand the world through observation and experimentation.</p>
      {subjects.map((subject, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>{subject.name}</h2>
          <p>{subject.description}</p>
          <h4>Topics Covered:</h4>
          <ul>
            {subject.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
          <h4>Lab Experiments:</h4>
          <ul>
            {subject.labExperiments.map((experiment, i) => (
              <li key={i}>{experiment}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ScienceSubject;
