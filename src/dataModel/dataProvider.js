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
		store.subscribe('budget', newBudget => {
			window.localStorage.setItem('budget', JSON.stringify(newBudget));
		});
	}

	get _hasBudget() {
		// todo: do we have a user budget we can work with?
		return false;
	}

	_loadBudget() {
		// todo:
		throw new Error('Not implemented yet');
	}
}

const dp = new DataProvider();
export default dp;
