import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import BudgetEntry from './BudgetEntry';
import PeriodSelector, { Periods } from './PeriodSelector';

const App = () => {
	const { t } = useTranslation();
	const [mainPeriod, setMainPeriod] = React.useState(Periods.annually);

	return (
		<>
			<Typography variant="h5" gutterBottom>
			{t('dev.todo')}
			</Typography>

			<PeriodSelector period={mainPeriod} onChange={newPeriod => setMainPeriod(newPeriod)} />

			<BudgetEntry title="Mortgage &amp; rent" summaryPeriod={mainPeriod} />
			<BudgetEntry title="Body corporate fees" summaryPeriod={mainPeriod} />
			<BudgetEntry title="Council rates" summaryPeriod={mainPeriod} />

		</>
	);
};

export default App;
