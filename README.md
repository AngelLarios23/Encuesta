# 📊 Encuestas

Una aplicación web interactiva diseñada para crear, visualizar y analizar encuestas. Este proyecto hace uso de **Bootstrap**, **React**, **JavaScript** y varias bibliotecas modernas para ofrecer una experiencia de usuario dinámica y amigable.

---

## 📝 Descripción

**Encuestas** es una plataforma que permite a los usuarios:
- Crear encuestas personalizadas.
- Visualizar resultados mediante gráficos interactivos.
- Almacenar y recuperar datos usando una API RESTful con Express y MongoDB.

Esta aplicación fue creada como práctica para el desarrollo full-stack usando tecnologías modernas en el frontend y backend.

---

## 🛠️ Tecnologías utilizadas

### Frontend
- **React**
- **JavaScript (ES6+)**
- **Bootstrap / React-Bootstrap**
- **SweetAlert2** (para notificaciones elegantes)
- **Chart.js + React-Chartjs-2** (para gráficos de resultados)
- **React Router DOM** (para navegación)
- **Axios** (para peticiones HTTP)
- **CORS** (para conexión segura entre frontend y backend)

### Backend
- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **Nodemon** (para desarrollo en caliente)
- **CORS**

---

## 🚀 Instrucciones de instalación y ejecución

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

---

### 2️⃣ Instala las dependencias del frontend
bash
Copiar
Editar
cd frontend
npm install
npm install sweetalert2
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install chart.js react-chartjs-2
npm install axios
npm install cors

### 3️⃣ Instala las dependencias del backend
bash
Copiar
Editar
cd ../backend
npm install express mongoose
npm install --save-dev nodemon
npm install cors
npm i

### 4️⃣ Inicia la aplicación
🖥️ Backend
bash
Copiar
Editar
cd backend
npx nodemon index.js

### 🌐 Frontend
En otra terminal:

bash
Copiar
Editar
cd frontend
npm start
