const fs = require('fs');
const { execSync } = require('child_process');

const commitDate = execSync('git log -1 --format=%cd', { encoding: 'utf-8' }).trim();
fs.writeFileSync('public/commit-date.json', JSON.stringify({ commitDate }));
