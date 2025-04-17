import React from 'react';
import SchoolGif from '../assets/school.gif';
import Admin from '../assets/admin.jpg';

const Header = ({ school, admin}) => {
	return (
		<header className='relative h-32 bg-gray-800 shadow-lg'>
				<img src={SchoolGif} alt='School Banner' className='w-full h-full rounded object-cover' />
				<div className='absolute top-0 left-0 w-full sm:w-2/3 h-full flex justify-center items-end px-2'>
				<div className='h-full flex justify-start items-end'>
				<div className='bg-gray-900 h-28 w-28 sm:w-32 sm:h-32 border rounded-full'>
					<img src={Admin} alt='Admin Profile' className='rounded-full object-cover w-full h-full' />
					<span className='relative bottom-7 font-bold bg-gray-950'>{admin?.name}</span>
				</div>
				</div>
				<div className='bg-gray-900 h-12 w-96 border rounded flex justify-center items-center'>
				<h1 className="text-xl font-bold">{school?.name || "School Name"}</h1>
				</div>
				</div>

		</header>
	);
}

export default Header;
