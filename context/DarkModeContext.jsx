import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);


	useEffect(() => {
		const html = document.querySelector('html');
		if (isDarkMode) {
			html.classList.add('dark');
		} else {
			html.classList.remove('dark');
		}
	}, [isDarkMode]);

	useEffect(() => {
		// Save the theme preference in localStorage
		if (typeof window !== 'undefined') {
			localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
		}
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode(prev => !prev);
	};

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = () => useContext(DarkModeContext);