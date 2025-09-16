import { useEffect, useState } from "react";
import API from "../services/api";

const ProyectoResumen = () => {
  const [resumen, setResumen] = useState("");

  useEffect(() => {
    const fetchResumen = async () => {
      const { data } = await API.get("/analisis");
      setResumen(data.resumen);
    };
    fetchResumen();
  }, []);

  return (
    <div className="summary-box">
      <h3>Resumen con IA</h3>
      <p>{resumen || "Generando resumen..."}</p>
    </div>
  );
};

export default ProyectoResumen;
