const LinkedList = require('../linked_list/linked_list');

let list;

describe('LinkedList', () => {
	beforeEach(() => {
		list = new LinkedList();
	});

	it('should have the methods "add_to_tail", "remove_from_head", "size" and "search"', () => {
		expect(Object.getPrototypeOf(list).hasOwnProperty('add_to_tail')).toBe(true);
		expect(Object.getPrototypeOf(list).hasOwnProperty('remove_from_head')).toBe(true);
		expect(Object.getPrototypeOf(list).hasOwnProperty('size')).toBe(true);
		expect(Object.getPrototypeOf(list).hasOwnProperty('search')).toBe(true);
	});

	it('should update the tail data when a new node is added', () => {
		list.add_to_tail(1);
		expect(list.tail.get_data()).toBe(1);
		list.add_to_tail(2);
		expect(list.tail.get_data()).toBe(2);
	});

	it('should keep the same head after adding nodes', () => {
		list.add_to_tail(1);
		expect(list.head.get_data()).toBe(1);
		list.add_to_tail(2);
		expect(list.head.get_data()).toBe(1);
	});

	it('should return true from search if a matching get_data() is found and false otherwise', () => {
		list.add_to_tail(1);
		list.add_to_tail(2);
		list.add_to_tail(5);
		list.add_to_tail(10);
		expect(list.search(10)).toBe(true);
		expect(list.search('asdf')).toBe(false);
	});

	it('should remove head when "remove_from_head" is invoked', () => {
		list.add_to_tail(1);
		list.add_to_tail(2);
		expect(list.head.get_data()).toBe(1);
		list.remove_from_head();
		expect(list.head.get_data()).toBe(2);
		list.remove_from_head();
		expect(list.head).toBe(null);
	});

	it('should return the head that is removed when "remove_from_head" is invoked', () => {
		list.add_to_tail(1);
		expect(list.remove_from_head()).toBe(1);
	});

	it('should not contain removed values', () => {
		list.add_to_tail(1);
		list.add_to_tail(2);
		list.add_to_tail(3);
		list.add_to_tail(4);
		list.remove_from_head();
		expect(list.search(1)).toBe(false);
	});

	it('should have a working "size" method', () => {
		expect(list.size()).toBe(0);
		list.add_to_tail(10);
		expect(list.size()).toBe(1);
		list.add_to_tail(1);
		list.add_to_tail(100);
		expect(list.size()).toBe(3);
	});
});
