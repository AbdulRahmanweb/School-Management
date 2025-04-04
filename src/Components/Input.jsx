import React from 'react';

const Input = ({label, type = "text", value, onChange, name}) => {
	return (
		<div className='mb-4'>
		<label className='block text-gray-50 placeholder:text-white font-semibold mb-1'>{label}</label>
		<input type={type} name={name} value={value} onChange={onChange} required className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2' />
		</div>
	);
}

export default Input;
