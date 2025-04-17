import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSignUp from './Pages/AdminSignUp';
import AdminDashboard from './Pages/AdminDashboard';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/admin/signup'} /> } />
        <Route path='/admin/signup' element={<AdminSignUp />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
