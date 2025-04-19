import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClass } from '../Redux/classSlice';
import { nanoid } from 'nanoid';
import Input from '../Components/Input';
import { Plus, X } from 'lucide-react';

const DashboardHome = () => {
  const dispatch = useDispatch();
  const [newClass, setNewClass] = useState('');
  const [showForm, setShowForm] = useState(false);
  const { admin, school } = useSelector((state) => state.admin)

  const handleAddClass = (e) => {
    e.preventDefault();
    if (!newClass.trim()) return;
    dispatch(addClass({ id: nanoid(), name: newClass }));
    setNewClass('');
    setShowForm(false);
  };

  const handleChange = (e) => {
	setNewClass(e.target.value);
}

  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-4 space-y-6">
      <h2 className="text-2xl font-bold">Welcome, {admin?.name || "Admin"}</h2>
      <p className="text-gray-300">Use this panel to add new classes and manage your school.</p>

      <button
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
        onClick={() => setShowForm(true)}
      >
        <Plus size={19} /> Add Class
      </button>

      {showForm && (
        <div className="bg-gray-800 p-4 rounded-lg shadow relative">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
            onClick={() => setShowForm(false)}
          >
            <X size={15} />
          </button>

          <form onSubmit={handleAddClass} className="flex flex-col sm:flex-row gap-4">
            <div>
              <Input
                label="Class Name"
                name="className"
                value={newClass}
                onChange={handleChange}
              />
              <button
                className="bg-green-600 px-3 py-2 rounded hover:bg-green-700 mt-2 sm:mt-0 h-fit"
                type="submit"
              >
                Add Class
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
