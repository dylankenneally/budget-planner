import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
	ExpansionPanel,
	ExpansionPanelDetails,
	ExpansionPanelSummary,
	Typography,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import './CategoryGroup.css';
import BudgetEntry from './BudgetEntry';
import store from '../dataModel/dataStore';

const CategoryGroup = ({ id, title, entries, positive }) => {
	const calcTotal = () => {
		let result = entries.map(({amount}) => amount);
		result = result.reduce((total, val) => total + val);
		return result;
	};

	const [total, setTotal] = useState(calcTotal());

	// subscribe to changes to the entry so we can update the total
	useEffect(() => {
		const subscribers = entries.map(entry => {
			return store.subscribe(id + entry.id, data => {
				setTotal(calcTotal());
			});
		});

		return () => {
			subscribers.forEach(unSub => unSub());
		};
	});

	const { t } = useTranslation();

	return (
		<ExpansionPanel>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<Typography className="category-group-title">{title}</Typography>
				<Typography className="category-group-accumulated">{(positive ? '' : '-' )+ t('currencySymbol')}{Math.round((total))}</Typography>
			</ExpansionPanelSummary>

			<ExpansionPanelDetails>
				{ entries.map(entry => <BudgetEntry id={id + entry.id} key={id + entry.id} />) }
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

CategoryGroup.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	entries: PropTypes.arrayOf(PropTypes.object).isRequired,
	positive: PropTypes.bool,
};

CategoryGroup.defaultProps = {
	positive: false,
};

export default CategoryGroup;
