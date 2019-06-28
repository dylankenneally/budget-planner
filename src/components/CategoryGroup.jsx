import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
	ExpansionPanel,
	ExpansionPanelDetails,
	ExpansionPanelSummary,
	Typography,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import Periods from '../dataModel/periods';
import './CategoryGroup.css';
import BudgetEntry from './BudgetEntry';

const CategoryGroup = ({ title, entries, summaryPeriod, positive, onChange }) => {
	console.assert(entries.length >= 1, 'At least one entry is required for a group');
	const [amount, setAmount] = useState(entries.length === 1 ? entries[0].amount : entries.reduce((a, b) => a.amount !== undefined ? a.amount + b.amount : a + b.amount));
	const { t } = useTranslation();

	const entryChanged = (entry, entryAmount, entryPeriod) => {
		setAmount((amount - entry.amount) + entryAmount);
		entry.amount = entryAmount; // reset the entry amount, otherwise we can't calculate the total amount
		onChange(entries);
	};

	return (
		<ExpansionPanel defaultExpanded>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<Typography className="category-group-title">{title}</Typography>
				<Typography className="category-group-accumulated">{(positive ? '' : '-' )+ t('currencySymbol')}{Math.round((amount))}</Typography>
			</ExpansionPanelSummary>

			<ExpansionPanelDetails>
				{entries.map((entry, index) => {
					return <BudgetEntry
						key={index}
						title={entry.title}
						initialAmount={entry.amount}
						onChange={(eA, eP) => entryChanged(entry, eA, eP)}
					/>;
				})}
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

CategoryGroup.propTypes = {
	title: PropTypes.string.isRequired,
	entries: PropTypes.arrayOf(PropTypes.object).isRequired,
	summaryPeriod: PropTypes.oneOf(Object.values(Periods)).isRequired,
	positive: PropTypes.bool,
	onChange: PropTypes.func,
};

CategoryGroup.defaultProps = {
	positive: false,
	onChange: () => { },
};

export default CategoryGroup;
