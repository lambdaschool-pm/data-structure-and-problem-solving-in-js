class User {
	constructor(user) {
		this.id = user.id;
		this.firstname = user.firstname;
		this.lastname = user.lastname;
		this.occupation = user.occupation;
		this.location = user.location;
	}

	get_user() {
		return `${this.firstname} ${this.lastname} is a ${this.occupation} `;
	}
}

class Node {
	constructor(data, next_node = null) {
		this.data = data;
		this.next_node = next_node;
	}

	get_data() {
		return this.data;
	}
	get_next_node() {
		return this.next_node;
	}

	set_next(new_next_node) {
		this.next_node = new_next_node;
	}
}

//TODO CREATE A LINKED LIST
class LinkedList {
	constructor(head = null, tail = null) {
		if (tail === null) {
			this.head = head;
			this.tail = head;
		} else {
			this.head = head;
			this.tail = tail;
		}
	}

	add_to_tail(item) {
		// use the past item to create  node
		const new_node = new Node(item);

		// check if the linked list has a head
		if (this.head === null) {
			this.head = new_node;
			this.tail = new_node;
		} else {
			//this.tail.next_node = new_node;
			this.tail.set_next(new_node); // better way of doing it
			this.tail = new_node;
		}
	}

	remove_from_head() {
		// check if the list has a head
		if (this.head === null) {
			return null;
		}

		// we can remove the head

		// get a copy of the head
		const head = this.head;

		// check if this head has a next
		if (head.get_next_node() === null) {
			// that means we only have a head which is the same as a tail, so we
			// have to reset the linked list to null
			this.head = null;
			this.tail = null;
		} else {
			// assign the next node to the head
			this.head = head.get_next_node();
		}

		return head.get_data();
	}
	/*Method 1 using a while
	search(target) {
		let current = this.head;

		// start the traversal here
		while (current) {
			if (current.get_data() === target) {
				return true; // found the target in the list
			}

			// re-assign current
			current = current.get_next_node();
		}

		// if you reach here, thats means you have reached the end of the list and not found the target
		return false;
  }
  */
	/* Method 2 is using recursion*/
	search(target) {
		// base case :
		// 1. We find the target, return true
		// 2. We don't find the target, return false

		// get the head or the first node
		let current = this.head;

		// we write our helper function, to do recursion
		const searchLinkedList = (node) => {
			if (node.get_data() === target) return true;
			if (node.get_next_node() === null) return false; // reached the end of the list

			// recursively going to call the helper function
			return searchLinkedList(node.get_next_node());
		};

		// start the recursive function
		return searchLinkedList(current);
	}

	size() {
		let count = 0;
		let current = this.head;

		// traverse
		while (current) {
			count++;

			//re-aasign current
			current = current.get_next_node();
		}

		// reached the end of the list
		return count;
	}
}
/*
// User
const user1 = new User({
	id: 1,
	firstname: 'Edward',
	lastname: 'Manda',
	occupation: 'Software Engineer',
	location: 'Oklahoma',
});

const list = new LinkedList();
list.add_to_tail(1);
const head1 = list.remove_from_head();
list.add_to_tail(2);
list.add_to_tail(3);
list.add_to_tail(4);
const head2 = list.remove_from_head();
list.add_to_tail(5);
list.add_to_tail(6);
list.add_to_tail(7);
list.add_to_tail(8);
console.log('does 1 exist in the list ? ', list.search(1));
console.log('does 6 exist in the list ? ', list.search(6));
console.log('does 16 exist in the list ? ', list.search(16));
*/
module.exports = LinkedList;
