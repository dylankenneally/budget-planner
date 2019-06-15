import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

const App = () => {
	const { t } = useTranslation();
	return (
		<Typography variant="h5" gutterBottom>
		{t('dev.todo')}
		</Typography>
	);
};

export default App;
