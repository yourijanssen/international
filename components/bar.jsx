import React from 'react';
import {Bar} from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const backend = {
	labels: ['PostgreSQL', 'MongoDB', 'MariaDB', 'Mysql', 'Node.js', 'Spring MVC', 'Spring Boot',],
	datasets: [{
		label: '# of Votes',
		data: [4, 5, 12, 20, 20, 13, 5],
		backgroundColor: '#189EDA', // Single color for all bars
		borderColor: '#189EDA',
		borderWidth: 1
	}]
};

const frontend = {
	labels: ['Stylus', 'Next', 'React', 'Angular', 'Type/Javascript', 'CSS', 'Tailwind', 'Three.js'],
	datasets: [{
		label: '# of Votes',
		data: [4, 5, 19, 20, 20, 19, 5, 5],
		backgroundColor: '#189EDA', // Single color for all bars
		borderColor: '#189EDA',
		borderWidth: 1
	}]
};

const options = {
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
			position: 'top',
			labels: {
				font: {
					size: 14,
				},
			},
		},
	},
	animation: {
		duration: 2000,
		easing: 'easeInOutQuad',
		animateRotate: true,
		animateScale: true,
	},
	scales: {
		x: {
			grid: {
				color: '#1C1C22',
			},
			ticks: {
				font: {
					size: 14,
				},
			},
		},
		y: {
			grid: {
				color: '#E0E0E0',
				lineWidth: 1,
			},
			ticks: {
				font: {
					size: 14,
				},
				beginAtZero: true,
			},
		},
	},
};

const BarExample = () => (
	<>
		<div style={{maxWidth: '800px'}}>
			<div style={{marginBottom: '20px'}}>
				<h2 className="text-text-light dark:text-text-dark">Current Backend Skills:</h2>
				<div style={{height: '300px'}}>
					<Bar data={backend} options={options}/>
				</div>
			</div>
			<div>
				<h2 className="text-text-light dark:text-text-dark">Current Frontend Skills</h2>
				<div style={{height: '300px'}}>
					<Bar data={frontend} options={options}/>
				</div>
			</div>
		</div>
	</>
);

export default BarExample;
