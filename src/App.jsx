import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSignUp from './Pages/AdminSignUp';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to={'/admin/signup'} /> } />
        <Route path='/admin/signup' element={<AdminSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
