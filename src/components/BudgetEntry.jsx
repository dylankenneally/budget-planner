import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import PeriodSelector, { Periods } from './PeriodSelector';

const BudgetEntry = ({ title, summaryPeriod }) => {
	const [amount, setAmount] = React.useState(1);
	const [period, setPeriod] = React.useState(Periods.monthly);
	const { t } = useTranslation();

	return (
		<>
			<p>{title}</p>
			{/* todo: interger only, no -ve, etc, uncontrolled (click up when empty to see error) */}
			{/* Only allows positive integers */}
			<TextField
				value={amount}
				onChange={event => {
					let { value } = event.target;
					value = parseInt(value.toString(), 10);
					if (value !== undefined && !isNaN(value)) {
						setAmount(value);
					}
				}}
			/>

			<PeriodSelector period={period} onChange={newPeriod => setPeriod(newPeriod)} />
			{t('currencySymbol')}{Math.round((amount * period) / summaryPeriod)}
		</>
	);
};

BudgetEntry.propTypes = {
	title: PropTypes.string.isRequired,
	summaryPeriod: PropTypes.oneOf(Object.values(Periods)).isRequired,
};

export default BudgetEntry;
