import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, TextField } from '@material-ui/core';
import Periods from '../dataModel/periods';
import PeriodSelector from './PeriodSelector';
import './BudgetEntry.css';

const BudgetEntry = ({ title, onChange, initialAmount }) => {
	const [amount, setAmount] = React.useState(initialAmount);
	const [period, setPeriod] = React.useState(Periods.annually);

	const amountChanged = (event) => {
		let { value } = event.target;
		value = parseInt(value.toString(), 10);
		if (value !== undefined && !isNaN(value)) {
			setAmount(value);
			onChange(value, period);
		}
	};

	const periodChanged = (p) => {
		setPeriod(p);
		onChange(amount, period);
	};

	return (
		<Container>
			<div  className="budget-entry-container">
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>{title}</Grid>
					<Grid item xs={6} md={3}>
						{/* Only allows positive integers */}
						<div className="budget-entry-input">
							<TextField
								className="budget-entry-entry"
								value={amount}
								onChange={amountChanged}
							/>
						</div>
					</Grid>
					<Grid item xs={6} md={3}>
						<PeriodSelector className="budget-entry-period budget-entry-input" period={period} onChange={periodChanged} />
					</Grid>
				</Grid>
			</div>
		</Container>
	);
};

BudgetEntry.propTypes = {
	title: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	initialAmount: PropTypes.number,
};

BudgetEntry.defaultProps = {
	onChange: () => { },
	initialAmount: 0
};

export default BudgetEntry;
