import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select } from '@material-ui/core';
import Periods from '../dataModel/periods';

const PeriodSelector = ({ period, onChange, className }) => {
	const { t } = useTranslation();

	return (
		<Select className={className} value={period} onChange={event => onChange(event.target.value)}>
			<MenuItem value={Periods.daily}>{t('period.daily')}</MenuItem>
			<MenuItem value={Periods.weekly}>{t('period.weekly')}</MenuItem>
			<MenuItem value={Periods.fortnightly}>{t('period.fortnightly')}</MenuItem>
			<MenuItem value={Periods.monthly}>{t('period.monthly')}</MenuItem>
			<MenuItem value={Periods.quarterly}>{t('period.quarterly')}</MenuItem>
			<MenuItem value={Periods.annually}>{t('period.annually')}</MenuItem>
		</Select>
	);
};

PeriodSelector.propTypes = {
	period: PropTypes.oneOf(Object.values(Periods)).isRequired,
	onChange: PropTypes.func,
	className: PropTypes.string,
};

PeriodSelector.defaultProps = {
	onChange: () => { }, // no op
};

export default PeriodSelector;
