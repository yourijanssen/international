import {execSync} from 'child_process';

/**
 * Retrieves the date of the last Git commit.
 * @returns {Promise<string>} Last commit date in string format.
 */
export const getLastCommitDate = async () => {
	try {
		return execSync('git log -1 --format=%cd', {encoding: 'utf-8'}).trim();
	} catch (error) {
		console.error('Error fetching last commit date:', error.message);
		return 'N/A';
	}
};
