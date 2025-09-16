import { useState } from "react";
import ProyectoForm from "./components/ProyectoForm";
import ProyectoTable from "./components/ProyectoTable";
import ProyectoChart from "./components/ProyectoChart";
import ProyectoResumen from "./components/ProyectoResumen";
import "./styles.css";

function App() {
  const [recargar, setRecargar] = useState(false);
  const [proyectoEditando, setProyectoEditando] = useState(null);

  const actualizar = () => setRecargar(!recargar);

  const cancelarEdicion = () => setProyectoEditando(null);

  return (
    <div className="container">
      <h1>Gestión de Proyectos</h1>

      <ProyectoForm
        onProyectoCreado={actualizar}
        proyectoEditando={proyectoEditando}
        cancelarEdicion={cancelarEdicion}
      />

      <ProyectoTable
        key={recargar}
        onEditar={(proyecto) => setProyectoEditando(proyecto)}
      />

      <div className="chart-container">
        <ProyectoChart />
      </div>

      <ProyectoResumen />
    </div>
  );
}

export default App;
