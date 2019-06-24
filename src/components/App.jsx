import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import Periods from '../dataModel/periods';
import PeriodSelector from './PeriodSelector';
import CategoryGroup from './CategoryGroup';
import categories from '../dataModel/categoryEntries';

const App = () => {
	const { t } = useTranslation();
	const [mainPeriod, setMainPeriod] = React.useState(Periods.annually);
	let catElements = categories.map((category, index) => <CategoryGroup title={category.title} entries={category.entries} summaryPeriod={mainPeriod} positive={category.positive} key={index}/>);

	return (
		<>
			<Typography variant="h5" gutterBottom>
			{t('dev.todo')}
			</Typography>

			<PeriodSelector period={mainPeriod} onChange={newPeriod => setMainPeriod(newPeriod)} />

			{/* bug: total not updated when top level is use ??? */}
			{catElements}
		</>
	);
};

export default App;
