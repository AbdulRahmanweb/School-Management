import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteClass } from '../Redux/classSlice';

const ClassManager = () => {
  const { classes } = useSelector((state) => state.class);
  const dispatch = useDispatch();

  const handleDeleteClass = (id) => {
    dispatch(deleteClass(id));
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow space-y-4">
      <h3 className="text-lg font-semibold">All Classes</h3>

      {classes.length === 0 ? (
        <p className="text-gray-400">No classes added yet.</p>
      ) : (
        <ul className="space-y-2">
          {classes.map((clas) => (
            <li
              key={clas.id}
              className="flex justify-between items-center bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
            >
              <span>{clas.name}</span>
              <button
                className="text-red-400 hover:text-red-600"
                onClick={() => handleDeleteClass(clas.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClassManager;
