import React from 'react';
import ReactDOM from 'react-dom';
// import ThemeProvider from '@material-ui/styles/ThemeProvider';
// import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './framework/i18n';
import App from './components/App';

// import muiTheme from './framework/muiTheme';

const appWrapper =
	<>
	{/* <ThemeProvider theme={createMuiTheme(muiTheme)}> */}
		<CssBaseline />
		<React.Suspense fallback={<h1>loading...</h1>}>
			<App />
		</React.Suspense>
	{/* </ThemeProvider> */}
	</>;

ReactDOM.render(appWrapper, document.getElementById('root'));
