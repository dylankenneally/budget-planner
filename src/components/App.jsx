import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	AppBar,
	Button,
	ExpansionPanel,
	ExpansionPanelDetails,
	ExpansionPanelSummary,
	Hidden,
	Toolbar,
	Typography,
	useScrollTrigger,
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
		<>
			<Hidden smDown>
				<Typography variant="h6" gutterBottom>{t('app-title')}</Typography>
			</Hidden>
			<div className="header-text">
				<Typography>{
					t('view-as')}&nbsp;
					<PeriodSelector period={period} onChange={newPeriod => store.set('summary-period', newPeriod)} />
				</Typography>
			</div>
		</>
	);
};

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.node.isRequired
};

const TopAppBar = (props) => {
	const { t } = useTranslation();
	return (
		<>
			<ElevationScroll {...props}>
				<AppBar color="default">
					<Toolbar>
						<Typography variant="h6" color="inherit">
							{t('budget-planner')}
						</Typography>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar />
		</>
	);
};

const App = () => {
	const { t } = useTranslation();
	const [budget] = useState(store.get('budget'));

	const [mainPeriod, setMainPeriod] = useState(store.get('summary-period'));
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
			<TopAppBar />
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
