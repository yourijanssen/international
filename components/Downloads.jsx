"use client";

import React from 'react';
import { FiDownload } from 'react-icons/fi';
import {Button} from "@/components/ui/button";

const CVUrl = '/assets/CV-Youri.pdf';

const CVDownload= () => {
	const handleDownload = () => {
		const anchor = document.createElement('a');
		anchor.href = CVUrl;
		anchor.download = 'CV-Youri.pdf'; // Specify the file name for the download
		anchor.click();
	};

	return (
		<Button
			variant="outline"
			size="lg"
			className="uppercase flex items-center gap-2"
			onClick={handleDownload}
		>
			<span>Download CV</span>
			<FiDownload className="text-xl" />
		</Button>
	);
};

const DegreeDownload = ({ url }) => {
	const handleDownload = () => {
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = url.split('/').pop(); // Extract the file name from the URL
		anchor.click();
	};

	return (
		<Button
			variant="outline"
			size="lg"
			className="uppercase flex items-center gap-2"
			onClick={handleDownload}
		>
			<span>Download Degree</span>
			<FiDownload className="text-xl" />
		</Button>
	);
}

export { CVDownload, DegreeDownload };
