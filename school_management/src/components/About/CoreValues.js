import React from "react";

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #cce7ff, #99ccff)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px 20px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#003366",
    textAlign: "center",
    marginBottom: "40px",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    width: "100%",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
  },
  cardTitle: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#004080",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#444",
    lineHeight: "1.6",
  },
};

function CoreValues() {
  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of integrity and transparency in all our actions.",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in academics, leadership, and personal growth.",
    },
    {
      title: "Respect",
      description:
        "We respect diverse perspectives, traditions, and cultures within our community.",
    },
    {
      title: "Innovation",
      description:
        "We encourage creativity and innovation in learning and problem-solving.",
    },
    {
      title: "Responsibility",
      description:
        "We take responsibility for our actions and contribute positively to society.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Core Values</h1>
      <div style={styles.grid}>
        {values.map((value, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, styles.cardHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, styles.card)
            }
          >
            <h2 style={styles.cardTitle}>{value.title}</h2>
            <p style={styles.cardDescription}>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoreValues;
