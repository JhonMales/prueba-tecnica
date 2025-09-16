import { useEffect, useState } from "react";
import API from "../services/api";

const ProyectoForm = ({
  onProyectoCreado,
  proyectoEditando,
  cancelarEdicion,
}) => {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    estado: "En progreso",
    fechaInicio: "",
    fechaFin: "",
  });

  useEffect(() => {
    if (proyectoEditando) {
      setForm(proyectoEditando);
    } else {
      setForm({
        nombre: "",
        descripcion: "",
        estado: "En progreso",
        fechaInicio: "",
        fechaFin: "",
      });
    }
  }, [proyectoEditando]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (proyectoEditando) {
        await API.put(`/proyectos/${proyectoEditando.id}`, form);
      } else {
        await API.post("/proyectos", form);
      }

      onProyectoCreado();
      cancelarEdicion();
      setForm({
        nombre: "",
        descripcion: "",
        estado: "En progreso",
        fechaInicio: "",
        fechaFin: "",
      });
    } catch (err) {
      console.error("Error al guardar proyecto", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{proyectoEditando ? "Editar Proyecto" : "Registrar Proyecto"}</h3>
      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={form.descripcion}
        onChange={handleChange}
        required
      />
      <select name="estado" value={form.estado} onChange={handleChange}>
        <option value="En progreso">En progreso</option>
        <option value="Finalizado">Finalizado</option>
        <option value="Pendiente">Pendiente</option>
      </select>
      <input
        type="date"
        name="fechaInicio"
        value={form.fechaInicio}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="fechaFin"
        value={form.fechaFin}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {proyectoEditando ? "Actualizar" : "Guardar"}
      </button>
      {proyectoEditando && (
        <button onClick={cancelarEdicion} type="button">
          Cancelar
        </button>
      )}
    </form>
  );
};

export default ProyectoForm;
