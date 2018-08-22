// queue = fifo []
// stack = lifo []
const List = require('../linked_list/linked_list'); // imports the linked list

class Queue {
	constructor() {
		this.length = 0;
		this.storage = new List(); // create a storage for the list
	}

	// puts the item into the queue
	enqueue(item) {
		this.storage.add_to_tail(item);
		this.length++;
	}

	// removes the item from the queueue
	dequeue() {
		// the first item in the queue
		const item = this.storage.remove_from_head();
		if (this.isEmpty() !== true) {
			// only do this if the item is not null
			this.length--;
		}

		return item;
	}

	length() {
		return this.length; // O(1)
	}

	isEmpty() {
		return this.length === 0;
	}
}

module.exports = Queue;
