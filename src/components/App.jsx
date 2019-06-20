import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import BudgetEntry from './BudgetEntry';

const App = () => {
	const { t } = useTranslation();
	return (
		<>
			<Typography variant="h5" gutterBottom>
			{t('dev.todo')}
			</Typography>

			<BudgetEntry title="Example entry"/>
		</>
	);
};

export default App;
