import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './framework/i18n';
import muiTheme from './framework/muiTheme';
import App from './components/App';

// ---------- example, TODO: remove
import store from './dataModel/dataStore';

function notifyAll(type, obj) {
	console.log('**** all');
	console.log(type);
	console.dir(obj);
}

let unSubAll = store.subscribe(notifyAll);
require('./dataModel/dataProvider');
// ------------------- ^^ todo: remove

const appWrapper =
	<ThemeProvider theme={createMuiTheme(muiTheme)}>
		<CssBaseline />
		<React.Suspense fallback={<h1>loading...</h1>}>
			<App />
		</React.Suspense>
	</ThemeProvider>;

ReactDOM.render(appWrapper, document.getElementById('root'));
