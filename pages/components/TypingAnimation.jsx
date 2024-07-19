"use client";

import {useEffect, useState} from "react";

export const TypingAnimation = ({ text }) => {
	const [displayText, setDisplayText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			// Get the current character to display
			const currentChar = text.slice(0, currentIndex + 1);
			setDisplayText(currentChar);

			// Move to the next character
			setCurrentIndex(currentIndex => currentIndex + 1);

			// Clear interval when all characters are displayed
			if (currentChar === text) {
				clearInterval(interval);
			}
		}, 3); // Typing speed (adjust as needed)

		return () => clearInterval(interval);
	}, [text, currentIndex]);

	return (
		<span className="text-text-light dark:text-text-dark">{displayText}</span>
	);
};

export default TypingAnimation