import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import store from '../dataModel/dataStore';
import { withTranslation } from 'react-i18next';

const colours = [
	'rgba(255, 99, 132, 0.7)',
	'rgba(54, 162, 235, 0.7)',
	'rgba(255, 206, 86, 0.7)',
	'rgba(75, 192, 192, 0.7)',
	'rgba(153, 102, 255, 0.7)',
	'rgba(255, 159, 64, 0.7)',
	'rgba(54, 159, 64, 0.7)'
];

class ResultsChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			budget: this.props.budget,
			update: 0 // hack, quick way to get this object to re-render
		};
	}

	componentDidMount() {
		this.unSubStore = store.subscribe(null, () => this.setState({ update: this.state.update + 1 }));

		const outgoings = this.state.budget.filter(entry => entry.positive !== true);
		const labels = outgoings.map(({ title }) => title);

		this.canvas = document.getElementById('chartCanvas');
		Chart.defaults.global.defaultFontFamily = "'Roboto', 'Helvetica', 'Arial', sans-serif";
		Chart.defaults.global.defaultFontSize = 16;
		this.chart = new Chart(this.canvas, {
			type: 'pie',
			data: {
				labels: labels,
			},
			options: {
				title: {
					display: true,
					position: 'top'
				},
				rotation: -0.7 * Math.PI, // looks a little better like this
				legend: {
					position: 'left',
				}
			},
		});

		this.updateCanvas();
	}

	componentWillUnmount() {
		this.unSubStore();
	}

	componentDidUpdate() {
		this.updateCanvas();
	}

	updateCanvas() {
		const incomings = this.state.budget.filter(entry => entry.positive === true);
		const outgoings = this.state.budget.filter(entry => entry.positive !== true);

		let totalIncome = incomings.map(({ entries }) => entries.reduce((sum, { amount }) => sum + amount, 0));
		totalIncome = totalIncome.reduce((a, b) => a + b);

		const categoryTotals = outgoings.map(({ entries }) => entries.reduce((sum, { amount }) => sum + amount, 0));
		const totalOutgoing = categoryTotals.reduce((a, b) => a + b);

		this.chart.data.datasets = [{
			data: categoryTotals,
			backgroundColor: outgoings.map((v, i) => colours[i % colours.length]),
			borderWidth: [1, 1]
		}];

		const balance = totalIncome - totalOutgoing;
		if (balance < 0) {
			this.chart.options.title.text = this.props.t('negativeBalance', { balance: balance, how: 'great' });
		} else {
			this.chart.options.title.text = this.props.t('positiveBalance', { balance });
		}

		this.chart.update();
	}

	render() {
		return <canvas id="chartCanvas" width={900} height={450} />;
	}
}

ResultsChart.propTypes = {
	budget: PropTypes.array.isRequired,
	t: PropTypes.func.isRequired, // supplied via withTranslation below
};

export default withTranslation()(ResultsChart);
