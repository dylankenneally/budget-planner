import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Periods from '../dataModel/periods';
import store from '../dataModel/dataStore';
import PeriodSelector from './PeriodSelector';
import CategoryGroup from './CategoryGroup';

const App = () => {
	const [budget, setBudget] = useState(store.get('budget'));
	const [mainPeriod, setMainPeriod] = useState(Periods.annually);
	const { t } = useTranslation();

	useEffect(() => {
		return store.subscribe('budget', b => setBudget(b));
	});

	let catElements = budget && budget.map((category, index) =>
		<CategoryGroup
			title={category.title}
			entries={category.entries}
			summaryPeriod={mainPeriod}
			positive={category.positive}
			key={index}
			onChange={(updatedCategory) => {
				budget[index] = {...category, updatedCategory };
				store.set('budget', budget);
			}}
		/>
	);

	return (
		<>
			<Typography variant="h5" gutterBottom>
				{t('dev.todo')}
			</Typography>

			<PeriodSelector period={mainPeriod} onChange={newPeriod => setMainPeriod(newPeriod)} />
			<Button onClick={() => store.resetBudget()}>{t('reset')}</Button>
			{catElements}
		</>
	);
};

export default App;
