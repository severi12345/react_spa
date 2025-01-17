import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function Sää() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch temperature data from JSON file
    fetch("./weather-data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return response.json();
      })
      .then((json) => setData(json.locations))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const chartData = {
    labels: data.map((location) => location.name),
    datasets: [
      {
        label: "Temperature (°C)",
        data: data.map((location) => location.temperature),
        backgroundColor: ["#3498db", "#e74c3c", "#2ecc71"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "60%", margin: "auto", textAlign: "center" }}>
      <h1>Lämpötilat
      </h1>
      {data.length > 0 ? (
        <Bar data={chartData} options={chartOptions} />
      ) : (
        <p>Ladataan tietoja...</p>
      )}
    </div>
  );
}

export default Sää;
