// components/DarkModeToggle.jsx
import React from 'react';
import { useDarkMode } from '@/context/DarkModeContext';
import { BiMoon, BiSun } from 'react-icons/bi';

const DarkModeToggle = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<button
			onClick={toggleDarkMode}
			className={`py-1 px-2 rounded-full ${
				isDarkMode ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-white"
			}`}
		>
			{isDarkMode ? <BiSun size={24}/> : <BiMoon size={24}/>}
		</button>
	);
};

export default DarkModeToggle;
