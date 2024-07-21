import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";

export const Commit = () => {
	const [commitDate, setCommitDate] = useState('');
	const {t} = useTranslation('common');


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
				<p className="text-text-light dark:text-text-dark">
					{t('commit')} {commitDate}</p>
			</div>
		</>
	)

}