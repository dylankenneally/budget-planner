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

const CategoryGroup = ({ title, entries, summaryPeriod }) => {
	const [amount] = React.useState(1);
	const { t } = useTranslation();

	return (
		<ExpansionPanel defaultExpanded>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<Typography className="category-group-title">{title}</Typography>
				<Typography className="category-group-accumulated">{t('currencySymbol')}{Math.round((amount))}</Typography>
			</ExpansionPanelSummary>

			<ExpansionPanelDetails>
				{entries.map((entryTitle, index) => {
					return <BudgetEntry key={index} title={entryTitle} summaryPeriod={summaryPeriod} />;
				})}
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

CategoryGroup.propTypes = {
	title: PropTypes.string.isRequired,
	entries: PropTypes.arrayOf(PropTypes.string).isRequired,
	summaryPeriod: PropTypes.oneOf(Object.values(Periods)).isRequired,
};

export default CategoryGroup;
