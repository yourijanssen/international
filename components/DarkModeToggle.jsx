"use client";

import { useEffect, useState } from 'react';
import {BiMoon, BiSun} from "react-icons/bi";

const DarkModeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	useEffect(() => {
		const html = document.querySelector('html');
		if (isDarkMode) {
			html.classList.add('dark');
		} else {
			html.classList.remove('dark');
		}
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

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
