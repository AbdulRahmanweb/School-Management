import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClassManager from '../Class/ClassManager';
import { School } from 'lucide-react';
import Header from '../Components/Header';

const AdminDashboard = () => {
	const { admin, school } = useSelector((state) => state.admin);
	const dispatch = useDispatch();

	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black px-1'>
			<Header admin={admin} school={school} />
			<div className='container max-auto py-8 px-4'>
				{/*<section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div className='bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-xl transistion-all'>
						<h2 className='text-2xl font-semibold mb-4'>Manage Classes</h2>
						<ClassManager />
					</div>
					<div className='bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-xl transistion-all'>
					</div>
				</section>*/}
				</div>
			</div>
	);
}

export default AdminDashboard;
