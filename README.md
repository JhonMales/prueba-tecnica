# Prueba Técnica - Proyecto Fullstack

Este repositorio contiene el código de un proyecto **fullstack** con:

-   **Backend** en Node.js con Prisma y PostgreSQL.\
-   **Frontend** con Vite.

------------------------------------------------------------------------

## ⚙️ Instalación y Ejecución Local

### 1. Clonar el repositorio

``` bash
git clone https://github.com/JhonMales/prueba-tecnica.git
cd prueba-tecnica
```

------------------------------------------------------------------------

### 2. Crear archivos `.env`

#### Backend (`backend/.env`)

``` env
DATABASE_URL=postgresql://user:password@localhost:5432/prueba_tecnica?schema=public
API_KEY=TU_CLAVE_API_AQUI
```

> Cambia `user`, `password` y `localhost` según tu configuración de
> PostgreSQL.\
> La base de datos `prueba_tecnica` debe existir o será creada al
> ejecutar el backend.

#### Frontend (`frontend/.env`)

``` env
VITE_API_KEY=TU_CLAVE_API_AQUI
VITE_BACKEND_URL=http://localhost:4000
```

------------------------------------------------------------------------

### 3. Solicitar la clave API
https://aistudio.google.com/app/apikey

------------------------------------------------------------------------

### 4. Instalar dependencias

#### Backend

``` bash
cd backend
npm install
```

#### Frontend

``` bash
cd ../frontend
npm install
```

------------------------------------------------------------------------

### 5. Ejecutar el proyecto

#### Backend

``` bash
cd ../backend
npm run dev
```

El backend arrancará en:\
👉 <http://localhost:4000>

La documentación de la API estará disponible en:\
👉 <http://localhost:4000/api-docs>

#### Frontend

``` bash
cd ../frontend
npm run dev
```

El frontend estará disponible en:\
👉 <http://localhost:5173>

------------------------------------------------------------------------

### 6. Acceder a la aplicación

1.  Abre tu navegador en la URL del frontend:\
    👉 <http://localhost:5173>\
2.  Verifica que se conecta correctamente al backend usando la clave API
    configurada.

------------------------------------------------------------------------

## 📖 Ejemplos de Uso (Swagger)

En la ruta `/api-docs` del backend encontrarás ejemplos interactivos de
cada endpoint.

------------------------------------------------------------------------

## 🛠️ Tecnologías

-   **Node.js**\
-   **Express**\
-   **Prisma**\
-   **PostgreSQL**\
-   **Vite**\
-   **Swagger**

------------------------------------------------------------------------
## Desiciones Técnicas

Backend

Arquitectura y organización del código:
El backend está estructurado en capas claras:

Controllers: Se encargan de recibir las peticiones HTTP, manejar la respuesta y capturar errores.

Services: Contienen la lógica de negocio y la interacción directa con la base de datos o servicios externos (por ejemplo, IA generativa).

Routes: Definen los endpoints y su vínculo con los controllers.

Esta separación permite mantener un código modular, legible y fácil de mantener o extender.

Manejo de errores:
Todos los controladores incluyen bloques try-catch para capturar y loguear errores, devolviendo mensajes claros y códigos HTTP apropiados (500 para errores de servidor, 404 cuando un proyecto no existe), mejorando la experiencia de desarrollo y la robustez del sistema.


Frontend

React con Hooks:
Se utilizó React funcional con hooks (useState, useEffect) para manejar el estado y los ciclos de vida de los componentes de forma sencilla y moderna.

Consumo de API con Axios encapsulado:
Todas las llamadas a la API se centralizaron en un servicio (API) basado en Axios, permitiendo una gestión limpia y reutilizable de peticiones HTTP.

Componentización clara y funcional:
La UI está dividida en componentes específicos con responsabilidades bien definidas:

ProyectoForm para crear y editar proyectos, con control total del formulario y validaciones básicas.

ProyectoTable para listar los proyectos con funcionalidad de edición y eliminación, incorporando confirmación para borrado.

ProyectoChart para mostrar un gráfico de distribución por estado utilizando react-chartjs-2 y Chart.js, aprovechando su capacidad de gráficos responsivos y personalizables.

ProyectoResumen para mostrar el resumen generado por IA, con carga asíncrona y mensaje de espera.