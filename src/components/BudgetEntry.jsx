import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import PeriodSelector, { Periods } from './PeriodSelector';

const BudgetEntry = ({ title }) => {
	const [amount, setAmount] = React.useState(1);
	const [period, setPeriod] = React.useState(Periods.monthly);
	const [mainPeriod, setMainPeriod] = React.useState(Periods.annually); // todo: temp only
	const { t } = useTranslation();

	return (
		<>
			{/* todo: temp only, should be at the top of all inputs */}
			<PeriodSelector period={mainPeriod} onChange={newPeriod => setMainPeriod(newPeriod)} />

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
			{t('currencySymbol')}{Math.round((amount * period) / mainPeriod)}
		</>
	);
};

BudgetEntry.propTypes = {
	title: PropTypes.string.isRequired,
};

export default BudgetEntry;
