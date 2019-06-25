import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Container, Grid, TextField } from '@material-ui/core';
import Periods from '../dataModel/periods';
import PeriodSelector from './PeriodSelector';
import './BudgetEntry.css';

const BudgetEntry = ({ title, summaryPeriod, onChange, initialAmount }) => {
	const [amount, setAmount] = React.useState(initialAmount);
	const [period, setPeriod] = React.useState(Periods.monthly);
	const { t } = useTranslation();

	let entryChanged = (event) => {
		let { value } = event.target;
		value = parseInt(value.toString(), 10);
		if (value !== undefined && !isNaN(value)) {
			const old = amount;
			setAmount(value);
			onChange(value, old);
		}
	};

	return (
		<Container>
			<div  className="budget-entry-container">
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>{title}</Grid>
					<Grid item xs={5} md={2}>
						{/* Only allows positive integers */}
						<div className="budget-entry-input">
							<TextField
								className="budget-entry-entry"
								value={amount}
								onChange={entryChanged}
							/>
						</div>
					</Grid>
					<Grid item xs={5} md={2}>
						<PeriodSelector className="budget-entry-period budget-entry-input" period={period} onChange={newPeriod => setPeriod(newPeriod)} />
					</Grid>
					<Grid item xs={2} md={2}>
						{/* <p className="budget-entry-accumulated">{t('currencySymbol')}{Math.round((amount * period) / summaryPeriod)}</p> */}
						<p className="budget-entry-accumulated">{t('currencySymbol')}{Math.round(amount)}</p>
					</Grid>
				</Grid>
			</div>
		</Container>
	);
};

BudgetEntry.propTypes = {
	title: PropTypes.string.isRequired,
	summaryPeriod: PropTypes.oneOf(Object.values(Periods)).isRequired,
	onChange: PropTypes.func,
	initialAmount: PropTypes.number,
};

BudgetEntry.defaultProps = {
	onChange: () => { },
	initialAmount: 0
};

export default BudgetEntry;
