import React, { useState } from "react";

const CoursePage = () => {
  // Preloaded courses
  const [courses] = useState([
    { id: 1, name: "Telugu", code: "TEL101" },
    { id: 2, name: "Hindi", code: "HIN101" },
    { id: 3, name: "English", code: "ENG101" },
    { id: 4, name: "Mathematics", code: "MATH101" }
  ]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
     
      <div style={{ padding: "20px" }}>
       
        <div style={{ display: "flex", gap: "30px", alignItems: "flex-start", flexWrap: "wrap" }}>
        
          <div id="branches" style={sectionContainerStyle}>
            <h1 style={sectionTitleStyle}>Our Branches</h1>
            <section style={{ ...sectionStyle, background: "#8e44ad" }}>
              <ul>
                <li>📍 New York</li>
                <li>📍 Los Angeles</li>
                <li>📍 Chicago</li>
                <li>📍 Houston</li>
              </ul>
            </section>
          </div>

         
          <div id="achievements" style={sectionContainerStyle}>
            <h1 style={sectionTitleStyle}>Achievements</h1>
            <section style={{ ...sectionStyle, background: "#2ecc71" }}>
              <ul>
                <li>🏆 Best School Award 2023</li>
                <li>🎓 98% Student Graduation Rate</li>
                <li>📚 500+ Students Enrolled</li>
                <li>🏆 Better Sports and Cultural Activities</li>
              </ul>
            </section>
          </div>

          {/* Courses Section */}
          <div id="courses" style={sectionContainerStyle}>
            <h1 style={sectionTitleStyle}>Courses</h1>
            <section style={{ ...sectionStyle, background: "#e74c3c" }}>
              <ul>
                {courses.map((course) => (
                  <li key={course.id}>{course.name} ({course.code})</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Career Section */}
          <div id="career" style={sectionContainerStyle}>
            <h1 style={sectionTitleStyle}>Career</h1>
            <section style={{ ...sectionStyle, background: "#f39c12" }}>  {/* Orange Background */}
              <ul>
                <li>💼 Internship & Job Placement Assistance</li>
                <li>🔧 Skill Development Workshops</li>
                <li>💡 Career Counseling & Guidance</li>
              </ul>
            </section>
          </div>

          {/* Academics Section */}
          <div id="academics" style={sectionContainerStyle}>
            <h1 style={sectionTitleStyle}>Academics</h1>
            <section style={{ ...sectionStyle, background: "#2980b9" }}>  {/* Blue Background */}
              <ul>
                <li>📚 Research & Innovation Programs</li>
                <li>📝 Advanced Learning Resources</li>
                <li>🎓 Higher Education Support</li>
                <li>📝Advanced courses</li>
              </ul>
            </section>
          </div>

          {/* Admissions Section */}
          <div id="admissions" style={sectionContainerStyle}>
            <h1 style={sectionTitleStyle}>Admissions</h1>
            <section style={{ ...sectionStyle, background: "#16a085" }}>  {/* Teal Background */}
              <ul>
                <li>📝 Easy Online Application Process</li>
                <li>📅 Regular and Late Admission Cycles</li>
                <li>💳 Scholarships & Financiall Available</li>
                <li>📝 Better Education</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const sectionContainerStyle = {
  flex: 1,
  minWidth: "400px",
  scrollMarginTop: "80px"
};

const sectionTitleStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#333"
};

const sectionStyle = {
  color: "white",
  padding: "30px",
  borderRadius: "15px",
  fontSize: "22px",
  lineHeight: "1.8"
};

export default CoursePage;
