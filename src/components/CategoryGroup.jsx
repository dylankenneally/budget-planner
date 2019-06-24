import React from 'react';
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

const CategoryGroup = ({ title, entries, summaryPeriod, positive }) => {
	const [amount, setAmount] = React.useState(entries.reduce((a, b) => a.amount !== undefined ? a.amount + b.amount : a + b.amount ));
	const { t } = useTranslation();

	let handleChanged = (newAmount, oldAmount) => {
		setAmount((amount - oldAmount) + newAmount);
	};

	return (
		<ExpansionPanel defaultExpanded>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<Typography className="category-group-title">{title}</Typography>
				<Typography className="category-group-accumulated">{(positive ? '' : '-' )+ t('currencySymbol')}{Math.round((amount))}</Typography>
			</ExpansionPanelSummary>

			<ExpansionPanelDetails>
				{entries.map((entry, index) => {
					return <BudgetEntry key={index} title={entry.title} initialAmount={entry.amount} summaryPeriod={summaryPeriod} onChange={handleChanged} />;
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
};

CategoryGroup.defaultProps = {
	positive: false,
};

export default CategoryGroup;
