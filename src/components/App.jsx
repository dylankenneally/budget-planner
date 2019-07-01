import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import store from '../dataModel/dataStore';
import PeriodSelector from './PeriodSelector';
import CategoryGroup from './CategoryGroup';
import ResultsChart from './ResultsChart';

const App = () => {
	const [budget] = useState(store.get('budget'));
	const [mainPeriod, setMainPeriod] = useState(store.get('summary-period'));
	const { t } = useTranslation();

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
			<Typography variant="h5" gutterBottom>
				{t('dev.todo')}
			</Typography>

			<PeriodSelector period={mainPeriod} onChange={newPeriod => {
				setMainPeriod(newPeriod);
				store.set('summary-period', newPeriod);
			}} />
			<Button onClick={() => store.resetBudget()}>{t('reset')}</Button>
			{catElements}
			<ResultsChart budget={budget} period={mainPeriod} />
		</>
	);
};

export default App;
