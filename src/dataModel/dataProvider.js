// Data provider
import store from './dataStore';
import defaultBudget from '../data/defaultBudget';

class DataProvider {
	constructor() {
		let budget = defaultBudget;
		if (this._hasBudget) {
			budget = this._loadBudget();
		}

		store.set('budget', budget);

		budget.forEach(category => {
			category.entries.forEach(entry => {
				store.set(category.title + entry.title, entry);
				// todo: need to save/load too
			});
		});
	}

	get _hasBudget() {
		return window.localStorage.getItem('budget') !== null;
	}

	_loadBudget() {
		return JSON.parse(window.localStorage.getItem('budget'));
	}
}

const dp = new DataProvider();
export default dp;
