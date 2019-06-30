// Data provider
import store from './dataStore';
import defaultBudget from '../data/defaultBudget';

store.set('budget', defaultBudget);
defaultBudget.forEach(category => {
	category.entries.forEach(entry => {
		const id = category.id + entry.id;
		let amount = window.localStorage.getItem(id);
		if (amount) {
			entry.amount = parseInt(amount, 10);
		}

		store.set(id, entry);
		store.subscribe(id, (e) => window.localStorage.setItem(id, e.amount));
	});
});
