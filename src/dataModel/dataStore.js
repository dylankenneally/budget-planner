/* A light weight, transient (i.e. none persistent), data store object with eventing (notifications) */

import uuidv1 from 'uuid';
import defaultBudget from '../data/defaultBudget';

class DataStore {
	constructor() {
		this._data = {};
		this._listeners = new Map();
	}

	// notifies anything that's subscribed events on this store that 'something' (generic) has happened
	notify(type, object) {
		this._listeners.forEach(element => {
			if (!element.type) {
				element.handler(type, object);
			}
		});
	}

	// notifies anything that's subscribed to a change event of 'type' of that event happening, or anything that's subscribe to all events
	notifyEvent(type, object) {
		this._listeners.forEach(element => {
			if (element.type === type) {
				element.handler(object);
			}
		});

		this.notify(type, object);
	}

	// subscribe to change notifications from this store; returns a function that can be used to un-subscribe. Use type to specialise notification types
	subscribe(type, handler) {
		console.assert(typeof handler === 'function'); // we must have a function to call
		if (typeof handler !== 'function') {
			return undefined;
		}

		let id = uuidv1();
		this._listeners.set(id, { handler: handler, type: type });

		let self = this;
		return function () {
			self.unSubscribe(id);
		};
	}

	// un-subscribes from change notifications form this store. NB: we recommend you store the function from `subscribe` and call it when you wish to un-subscribe instead of calling this directly
	unSubscribe(id) {
		this._listeners.delete(id);
	}

	// Gets the data of type 'type' in this store; if 'type' is not supplied, the whole data store is returned
	get(type) {
		return type ? this._data[type] : this._data;
	}

	// Sets the data object as type 'type', replaces any existing object of type 'type'
	set(type, object) {
		this._data[type] = object;
		this.notifyEvent(type, object);
	}

	resetBudget() {
		for (let item in this._data) {
			if (item !== 'budget') {
				const entry = this.get(item);
				entry.amount = 0;
				this.set(item, entry);
			}
		}
	}
}

const store = new DataStore();
export default store;
