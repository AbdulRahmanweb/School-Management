import React, { useState } from 'react';
import Input from '../Components/Input';
import { createSchool } from '../Redux/adminSlice';
import { useDispatch } from 'react-redux';

const AdminSignUp = () => {

	const dispatch = useDispatch();

	//UseState holds form data
	const [form, setForm] = useState({
		schoolName: "",
		adminName: "",
		email: "",
		password: ""
	});
	
	//Updating right input field
	const handleChange = (e) => {
		setForm((prev) => ({...prev, [e.target.name]: e.target.value
		}));
	}

	//Dispatching createSchool to redux
	const handleSubmit = (e) => {
		e.preventDefault();

		//Sending data to redux, this data come from state (form) which is managed by useState and i'm not saving password in redux, because it is not recommended to save password in frontend Storage
		dispatch( createSchool({
			admin: {
				name: form.adminName,
				email: form.email
			},
			school: {
				name: form.schoolName
			}
		}));
		alert("School Created Successfully");
	}

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-900'>
			{/*form*/}
			<form onSubmit={handleSubmit} className='bg-gray-700  p-6 rounded-lg shadow-md w-full max-w-md'>

				<h2 className='text-2xl font-bold mb-4 text-center'>Create School</h2>

				<Input label="School Name"
				name="schoolName"
				value={form.schoolName}
				onChange={handleChange} />

                <Input label="Admin Name"
				name="adminName"
				value={form.adminName}
				onChange={handleChange} />

                <Input label="Email"
				name="email"
				value={form.email}
				onChange={handleChange} />

                <Input label="Password"
				name="password"
				value={form.password}
				onChange={handleChange} />

				<button type='submit' className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>Create School</button>
			</form>
		</div>
	);
}

export default AdminSignUp;
