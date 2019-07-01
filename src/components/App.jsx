import React, { useState } from 'react';
import {
	Button,
	ExpansionPanel,
	ExpansionPanelDetails,
	ExpansionPanelSummary,
	Grid,
	Typography,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import store from '../dataModel/dataStore';
import PeriodSelector from './PeriodSelector';
import CategoryGroup from './CategoryGroup';
import ResultsChart from './ResultsChart';
import './App.css';

const Header = () => {
	const { t } = useTranslation();
	const [period, setPeriod] = useState(store.get('summary-period'));
	store.subscribe('summary-period', (p) => setPeriod(p));

	return (
		<Grid container spacing={4}>
			<Grid item xs={8}>
				<Typography variant="h6" gutterBottom>
					{t('app-title')}
				</Typography>
			</Grid>
			<Grid item xs={4}>
				<div className="header-text">
					{t('view-as')}&nbsp;
					<PeriodSelector period={period} onChange={newPeriod => store.set('summary-period', newPeriod) } />
				</div>
			</Grid>
		</Grid>
	);
};

const App = () => {
	const [budget] = useState(store.get('budget'));
	const [mainPeriod, setMainPeriod] = useState(store.get('summary-period'));
	const { t } = useTranslation();

	store.subscribe('summary-period', (p) => setMainPeriod(p));

	const catElements = budget && budget.map(category =>
		<CategoryGroup
			id={category.id}
			title={category.title}
			entries={category.entries}
			positive={category.positive}
			key={category.id}
			appPeriod={mainPeriod}
		/>
	);

	return (
		<>
			<Header />
			{catElements}

			<ExpansionPanel defaultExpanded>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography >{t('summary')}</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<div width={900} height={450} >
						<ResultsChart budget={budget} period={mainPeriod} />
					</div>
					<hr />
					<p>
						{t('reset-header')}&nbsp;
						<Button onClick={() => store.resetBudget()} variant="contained">
							{t('reset')}
						</Button>
					</p>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</>
	);
};

export default App;
