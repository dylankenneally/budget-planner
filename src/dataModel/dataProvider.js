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
		store.subscribe('budget', newBudget => window.localStorage.setItem('budget', JSON.stringify(newBudget)));
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
