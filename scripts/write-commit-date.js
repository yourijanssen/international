const fs = require('fs');
const { execSync } = require('child_process');

const getLastCommitDate = () => {
	try {
		return execSync('git log -1 --format=%cd', { encoding: 'utf-8' }).trim();
	} catch (error) {
		console.error('Error fetching last commit date:', error.message);
		return 'N/A';
	}
};

const commitDate = getLastCommitDate();
const data = JSON.stringify({ commitDate }, null, 2);

fs.writeFileSync('public/commit-date.json', data);
