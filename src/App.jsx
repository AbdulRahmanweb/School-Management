import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSignUp from './Pages/AdminSignUp';
import AdminDashboard from './Pages/AdminDashboard';
import ClassManager from './Class/ClassManager';
import DashboardHome from './Pages/DashboardHome';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigate to={'/admin/signup'} /> } />
        <Route path='/admin/signup' element={<AdminSignUp />} />
        
        <Route path='/admin/dashboard' element={<AdminDashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path='classes' element={<ClassManager />} />
        </Route>
      </Routes>
  );
}

export default App;
