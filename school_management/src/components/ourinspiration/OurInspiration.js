import React from "react";

const styles = {
  container: {
    background: "linear-gradient(to right, #cce7ff, #99ccff)",
    padding: "50px 20px",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    maxWidth: "600px",
    background: "white",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
    borderRadius: "15px",
    padding: "30px",
    textAlign: "center",
    border: "4px solid #1e3a8a",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#003366",
    marginBottom: "20px",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
  },
  name: {
    fontSize: "1.8rem",
    fontWeight: "600",
    marginTop: "10px",
    color: "#002244",
  },
  quote: {
    fontSize: "1.2rem",
    color: "#555",
    fontStyle: "italic",
    marginTop: "10px",
    background: "#eef5ff",
    padding: "10px",
    borderRadius: "10px",
    fontWeight: "500",
  },
  description: {
    fontSize: "1rem",
    color: "#222",
    marginTop: "15px",
    lineHeight: "1.6",
    background: "#dbeafe",
    padding: "15px",
    borderRadius: "10px",
    fontWeight: "500",
  },
};

const OurInspiration = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Inspiration</h2>

      <div style={styles.card}>
        <h3 style={styles.name}>Dr. A.P.J. Abdul Kalam</h3>
        <p style={styles.quote}>
          "Education is the most powerful weapon which you can use to change the world."
        </p>

        <p style={styles.description}>
          Our institution is inspired by visionary leaders who believed in the power of education.
          Their dedication to knowledge and innovation continues to guide us in shaping the future of learning.
        </p>
      </div>
    </div>
  );
};

export default OurInspiration;
