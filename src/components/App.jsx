import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import Periods from '../dataModel/periods';
import PeriodSelector from './PeriodSelector';
import CategoryGroup from './CategoryGroup';

const App = () => {
	const { t } = useTranslation();
	const [mainPeriod, setMainPeriod] = React.useState(Periods.annually);

	// will be moved, in development...
	const homeGroups = [
		{ title: 'Mortgage & rent', amount: 2500 },
		{ title: 'Body corporate fees', amount: Math.round((1125*2)/12) },
		{ title: 'Council rates', amount: Math.round(2500/12) },
	];

	return (
		<>
			<Typography variant="h5" gutterBottom>
			{t('dev.todo')}
			</Typography>

			<PeriodSelector period={mainPeriod} onChange={newPeriod => setMainPeriod(newPeriod)} />

			<CategoryGroup title="Home &amp; utilities" entries={homeGroups} summaryPeriod={mainPeriod} />
		</>
	);
};

export default App;
