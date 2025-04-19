import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
	const { admin, school } = useSelector((state) => state.admin);
	const dispatch = useDispatch();

	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black px-1'>
			<Header admin={admin} school={school} />
			<Navbar />
			<div className='mt-2 h-screen border'>
				<Outlet />

			</div>
			</div>
	);
}

export default AdminDashboard;
