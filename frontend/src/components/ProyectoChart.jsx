import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import API from "../services/api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProyectoChart = () => {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await API.get("/graficos");
      setDatos(data);
    };
    fetchData();
  }, []);

  const chartData = {
    labels: Object.keys(datos),
    datasets: [
      {
        label: "Proyectos por estado",
        data: Object.values(datos),
        backgroundColor: ["#f39c12", "#27ae60", "#c0392b"],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Gráfico por Estado</h3>
      <div className="chart-wrapper">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default ProyectoChart;
