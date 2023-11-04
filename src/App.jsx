import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import PetSpecificationForm from "./components/PetSpecificationsForm";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* Ruta para la página de inicio de sesión */}
          <Route path="/login" element={<LoginForm />} />

          {/* Ruta para la página de especificación de mascotas */}
          <Route path="/add-pet" element={<PetSpecificationForm />} />

          {/* Otra ruta si es necesario */}
          {/* <Route path="/profile" component={UserProfile} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;