import React from 'react';
import Chart from 'chart.js';

const colours = [
	'rgba(255, 99, 132, 0.7)',
	'rgba(54, 162, 235, 0.7)',
	'rgba(255, 206, 86, 0.7)',
	'rgba(75, 192, 192, 0.7)',
	'rgba(153, 102, 255, 0.7)',
	'rgba(255, 159, 64, 0.7)'
];

// todo: put props in, skipping for now as not done with this objects props design
/* eslint-disable react/prop-types */

// todo: not updating on edits, store isn't been passed through from parent component
class ResultsChart extends React.Component {
	componentDidMount() {
		this.updateCanvas();
	}

	componentDidUpdate() {
        this.updateCanvas();
    }

	updateCanvas() {
		const ctx = document.getElementById('chartCanvas');

		const incomings = this.props.budget.filter(entry => entry.positive === true);
		const outgoings = this.props.budget.filter(entry => entry.positive !== true);

		let totalIncome = incomings.map(({ entries }) => {
			return entries.reduce((sum, { amount }) => sum + amount, 0);
		});
		totalIncome = totalIncome.reduce((a, b) => a + b);

		// todo: you're mapping over this object multiple times, here and in the datasets below, just do it once
		let totalOutgoing = outgoings.map(({ entries }) => {
			return entries.reduce((sum, { amount }) => sum + amount, 0);
		});
		totalOutgoing = totalOutgoing.reduce((a, b) => a + b);

		let chartTitle = `Your budget breakdown: $${totalIncome - totalOutgoing}`; // todo: string table

		console.log(totalIncome, totalOutgoing);

		// todo: update the fonts being used
		// todo: update the tooltip to have $value & be styled
		// no-unused-vars: chartCanvas isn't used, the ctor for Chart does all the work via the canvas context
		const chartCanvas = new Chart(ctx, { //eslint-disable-line no-unused-vars
			type: 'pie',
			data: {
				labels: outgoings.map(({ title }) => title),
				datasets: [{
					// get the total for each category
					data: outgoings.map(({ entries }) => {
						return entries.reduce((sum, { amount }) => sum + amount, 0);
					}),
					backgroundColor: outgoings.map((v, i) => colours[i % colours.length]),
					borderWidth: [1, 1]
				}]
			},
			options: {
				title: {
					display: true,
					text: chartTitle,
					position: 'top'
				},
				rotation: -0.7 * Math.PI, // looks a little better like this
				responsive: false,
			},
		});
	}

	render() {
		return (
			<canvas id="chartCanvas" width={300} height={300} />
		);
	}
}

export default ResultsChart;
