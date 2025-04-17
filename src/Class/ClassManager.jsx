import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addClass, deleteClass  } from '../Redux/classSlice';
import { nanoid } from 'nanoid';
import Input from '../Components/Input';
import { Plus, X} from 'lucide-react';

const ClassManager = () => {
	const { classes } = useSelector((state) => state.class);
	const dispatch = useDispatch();
	const [newClass, setNewClass] = useState("");
	const [showAddForm, setShowAddForm] = useState(false);


	//Adding Class
		const handleAddClass = (e) => {
			e.preventDefault();
			if (!newClass.trim()) return;
			dispatch(addClass({
				id: nanoid(),
				name: newClass
			}));
			setNewClass("");
			setShowAddForm(false);
		}
	
		const handleChange = (e) => {
			setNewClass(e.target.value);
		}
	
		//Deleting Class
		const handleDeleteClass = (id) => {
			dispatch(deleteClass(id));
		}
	
	return (
		<div className='space-y-4'>
			<button className='flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow' onClick={() => setShowAddForm(true)}>
				<Plus size={19} />Add Class
			</button>
			{showAddForm && (
				<div className='bg-gray-800 p-4 rounded-lg shadow relative'>
					<button className='absolute top-2 right-2 text-gray-400 hover:text-red-500' onClick={() => setShowAddForm(false)}><X size={15} /></button>
					<form onSubmit={handleAddClass} className='flex flex-col sm:flex-row gap-4'>
			<div>
				<Input 
				label="Class Name"
				name="className"
				value={newClass}
				onChange={handleChange} />
			<button className='bg-green-600 px-3 py-2 rounded hover:bg-green-700 h-fit' type='submit'>Add Class</button>
			</div>
		</form>
		</div>)}
		
		{/*Class list*/}
		<div className='bg-gray-900 px-4 rounded-lg shadow'>
			<h3 className='text-lg font-semibold my-2 p-2'>Classes</h3>
			{classes.length === 0 ? (<p className='text-gray-400'>No Classes Added Yet</p>) : 
			(<ul className='space-y-2'>
				{classes.map((clas) => (
					<li className='flex justify-between items-center bg-gray-600 px-4 py-2 rounded hover:bg-gray-700' key={clas.id}><span>{clas.name}</span>
					<button className='text-red-400 hover:text-red-600' onClick={() => handleDeleteClass(clas.id)}>
						Delete</button></li>
				))}
			</ul>)}
		</div>
	</div>
	);
}

export default ClassManager;
