import { useEffect, useState } from "react";
import API from "../services/api";

const ProyectoTable = ({ onEditar }) => {
  const [proyectos, setProyectos] = useState([]);

  const fetchProyectos = async () => {
    const { data } = await API.get("/proyectos");
    setProyectos(data);
  };

  useEffect(() => {
    fetchProyectos();
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este proyecto?")) {
      await API.delete(`/proyectos/${id}`);
      fetchProyectos();
    }
  };

  return (
    <div>
      <h3>Lista de Proyectos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Inicio</th>
            <th>Fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.map((p) => (
            <tr key={p.id}>
              <td data-label="Nombre">{p.nombre}</td>
              <td data-label="Estado">{p.estado}</td>
              <td data-label="Inicio">
                {new Date(p.fechaInicio).toLocaleDateString()}
              </td>
              <td data-label="Fin">
                {new Date(p.fechaFin).toLocaleDateString()}
              </td>
              <td data-label="Acciones">
                <button onClick={() => onEditar(p)}>✏️</button>
                <button onClick={() => handleEliminar(p.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProyectoTable;
