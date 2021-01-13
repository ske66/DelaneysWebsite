import React from 'react';
import { Link } from 'gatsby';

const Menu = () => {
	return (
		<header className='shadow-sm'>
			<div className='flex justify-center my-auto py-4'>
				<Link className='uppercase text-xs font-bold font-sans my-auto mx-8 opacity-60 hover:text-pink-500 hover:opacity-100 hover:underline transition ease-in-out duration-200'>
					Home
				</Link>
				<Link className='uppercase text-xs font-bold font-sans my-auto mx-8 opacity-60 hover:text-pink-500 hover:opacity-100 hover:underline transition ease-in-out duration-200'>
					About
				</Link>
				<Link className='text-4xl my-auto font-serif mx-8 text-gray-700 flex'>
					<div className='h-0.5 my-auto w-4 bg-gray-300 mr-6' />
					Delaney Nicol
					<div className='h-0.5 my-auto w-4 bg-gray-300 ml-6' />
				</Link>
				<Link className='uppercase text-xs font-bold font-sans my-auto mx-8 opacity-60 hover:text-pink-500 hover:opacity-100 hover:underline transition ease-in-out duration-200'>
					Projects
				</Link>
				<Link className='uppercase text-xs font-bold font-sans my-auto mx-8 opacity-60 hover:text-pink-500 hover:opacity-100 hover:underline transition ease-in-out duration-200'>
					Contact
				</Link>
			</div>
		</header>
	);
};

export default Menu;
