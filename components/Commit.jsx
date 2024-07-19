import {useEffect, useState} from "react";

export const Commit = () => {
	const [commitDate, setCommitDate] = useState('');

	useEffect(() => {
		const fetchCommitDate = async () => {
			const response = await fetch('/commit-date.json');
			const data = await response.json();
			setCommitDate(data.commitDate);
		};

		fetchCommitDate();
	}, []);

	return (
		<>
			<div className="container mx-auto xl:text-left">
				<p className="text-text-light dark:text-text-dark">Page last updated on: {commitDate}</p>
			</div>
		</>
	)

}