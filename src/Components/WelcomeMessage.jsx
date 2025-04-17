import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SchoolGif from '../assets/school.gif';

const WelcomeMessage = ({ admin, school, onEnter, animateExit }) => {
	return (
		<AnimatePresence>
		 <motion.div initial={{scale: 1, opacity: 1}}
		 animate={animateExit ? {scale: 1.5, opacity: 0} : {}}
		 transition={{duration: 1}}
		 className= 'inset-0 text-center rounded-lg shadow-md w-full h-screen flex items-center justify-center'>
		<img src={SchoolGif} alt='SchoolImage' className='w-full h-full object-cover rounded-lg shadow' />
		<div className='absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4'>
		<h1 className='text-2xl font-bold mb-4'>Welcome {admin?.name}!</h1>
		<p className='text-gray-200 mb-2'>You are the Principle of :</p>
		<h2 className='text-xl font-semibold mb-4'>{school?.name}</h2>
		<button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700' onClick={onEnter}>Enter School</button>
		</div>
		</motion.div>
		</AnimatePresence>
		);
	}

export default WelcomeMessage;
