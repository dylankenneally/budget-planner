import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, TextField } from '@material-ui/core';
import Periods from '../dataModel/periods';
import PeriodSelector from './PeriodSelector';
import './BudgetEntry.css';
import store from '../dataModel/dataStore';

const BudgetEntry = ({ id }) => {
	const entry = store.get(id);
	const [amount, setAmount] = useState(entry.amount);
	const [period, setPeriod] = useState(Periods.annually);

	const amountChanged = (event) => {
		let { value } = event.target;
		value = parseInt(value.toString(), 10);
		if (value !== undefined && !isNaN(value)) {
			setAmount(value);
			entry.amount = value;
			store.set(id, entry);
		}
	};

	const periodChanged = (p) => {
		setPeriod(p);
		entry.period = p;
		store.set(id, entry);
	};

	return (
		<Container>
			<div className="budget-entry-container">
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>{entry.title}</Grid>
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
	id: PropTypes.string.isRequired,
};

export default BudgetEntry;
