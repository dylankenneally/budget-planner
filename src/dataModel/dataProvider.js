// Data provider
import store from './dataStore';
import defaultBudget from '../data/defaultBudget';
import Periods from './periods';

store.set('budget', defaultBudget);
defaultBudget.forEach(category => {
	category.entries.forEach(entry => {
		const id = category.id + entry.id;
		let loadedEntry = window.localStorage.getItem(id);
		if (loadedEntry) {
			loadedEntry = JSON.parse(loadedEntry);
			entry.amount = loadedEntry.amount;
			entry.period = loadedEntry.period;
		}

		store.set(id, entry);
		store.subscribe(id, (e) => window.localStorage.setItem(id, JSON.stringify(e)));
	});
});

let summaryPeriod = window.localStorage.getItem('summary-period') || Periods.annually;
summaryPeriod = parseInt(summaryPeriod, 10);
store.set('summary-period', summaryPeriod);
store.subscribe('summary-period', (p) => window.localStorage.setItem('summary-period', p));
