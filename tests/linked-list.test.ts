import { describe, expect, it } from 'vitest';
import {
	_LinkedListSingly,
	_LinkedListDoubly,
} from '../src/02-linked-list/implement';

describe('_LinkedListSingly', () => {
	describe('constructor and len()', () => {
		it('should initialize an empty list', () => {
			const list = new _LinkedListSingly<number>();

			expect(list.len()).toBe(0);
			expect(list.head).toBeNull();
			expect(list.tail).toBeNull();
			expect(list.traverse()).toEqual([]);
		});

		it('should initialize from an array', () => {
			const list = new _LinkedListSingly([10, 20, 30]);

			expect(list.len()).toBe(3);
			expect(list.traverse()).toEqual([10, 20, 30]);
			expect(list.head?.value).toBe(10);
			expect(list.tail?.value).toBe(30);
		});

		it('should correctly initialize a single-element list', () => {
			const list = new _LinkedListSingly([10]);

			expect(list.len()).toBe(1);
			expect(list.head?.value).toBe(10);
			expect(list.tail?.value).toBe(10);
			expect(list.head).toBe(list.tail);
		});
	});

	describe('peek_front() and peek_back()', () => {
		it('should return the first and last nodes', () => {
			const list = new _LinkedListSingly([10, 20, 30]);

			expect(list.peek_front()?.value).toBe(10);
			expect(list.peek_back()?.value).toBe(30);
		});

		it('should return null for an empty list', () => {
			const list = new _LinkedListSingly<number>();

			expect(list.peek_front()).toBeNull();
			expect(list.peek_back()).toBeNull();
		});
	});

	describe('traverse()', () => {
		it('should return all values in order', () => {
			const list = new _LinkedListSingly([10, 20, 30]);

			expect(list.traverse()).toEqual([10, 20, 30]);
		});

		it('should invoke the callback with each value and index', () => {
			const list = new _LinkedListSingly(['a', 'b', 'c']);
			const visited: Array<[string, number]> = [];

			list.traverse((value, index) => {
				visited.push([value, index]);
			});

			expect(visited).toEqual([
				['a', 0],
				['b', 1],
				['c', 2],
			]);
		});

		it('should return an empty array for an empty list', () => {
			const list = new _LinkedListSingly<number>();

			expect(list.traverse()).toEqual([]);
		});
	});

	describe('find()', () => {
		it('should return the node containing the requested value', () => {
			const list = new _LinkedListSingly([10, 20, 30]);

			const node = list.find(20);

			expect(node?.value).toBe(20);
		});

		it('should return the first matching node when duplicates exist', () => {
			const list = new _LinkedListSingly([10, 20, 10]);

			const node = list.find(10);

			expect(node).toBe(list.head);
		});

		it('should return null when the value does not exist', () => {
			const list = new _LinkedListSingly([10, 20, 30]);

			expect(list.find(99)).toBeNull();
		});

		it('should return null when searching an empty list', () => {
			const list = new _LinkedListSingly<number>();

			expect(list.find(10)).toBeNull();
		});
	});

	describe('push_front()', () => {
		it('should insert a node at the beginning', () => {
			const list = new _LinkedListSingly([20, 30]);

			list.push_front(10);

			expect(list.traverse()).toEqual([10, 20, 30]);
			expect(list.head?.value).toBe(10);
			expect(list.tail?.value).toBe(30);
			expect(list.len()).toBe(3);
		});

		it('should work on an empty list', () => {
			const list = new _LinkedListSingly<number>();

			list.push_front(10);

			expect(list.traverse()).toEqual([10]);
			expect(list.head).toBe(list.tail);
			expect(list.len()).toBe(1);
		});
	});

	describe('push_back()', () => {
		it('should insert a node at the end', () => {
			const list = new _LinkedListSingly([10, 20]);

			list.push_back(30);

			expect(list.traverse()).toEqual([10, 20, 30]);
			expect(list.head?.value).toBe(10);
			expect(list.tail?.value).toBe(30);
			expect(list.len()).toBe(3);
		});

		it('should work on an empty list', () => {
			const list = new _LinkedListSingly<number>();

			list.push_back(10);

			expect(list.traverse()).toEqual([10]);
			expect(list.head).toBe(list.tail);
			expect(list.len()).toBe(1);
		});
	});

	describe('pop_front()', () => {
		it('should remove and return the first node', () => {
			const list = new _LinkedListSingly([10, 20, 30]);

			const removed = list.pop_front();

			expect(removed?.value).toBe(10);
			expect(list.traverse()).toEqual([20, 30]);
			expect(list.head?.value).toBe(20);
			expect(list.tail?.value).toBe(30);
			expect(list.len()).toBe(2);
		});

		it('should return null when the list is empty', () => {
			const list = new _LinkedListSingly<number>();

			expect(list.pop_front()).toBeNull();
			expect(list.len()).toBe(0);
		});

		it('should clear head and tail when removing the only node', () => {
			const list = new _LinkedListSingly([10]);

			expect(list.pop_front()?.value).toBe(10);

			expect(list.head).toBeNull();
			expect(list.tail).toBeNull();
			expect(list.len()).toBe(0);
		});
	});

	describe('pop_back()', () => {
		it('should remove and return the last value', () => {
			const list = new _LinkedListSingly([10, 20, 30]);

			const removed = list.pop_back();

			expect(removed).toBe(30);
			expect(list.traverse()).toEqual([10, 20]);
			expect(list.head?.value).toBe(10);
			expect(list.tail?.value).toBe(20);
			expect(list.len()).toBe(2);
		});

		it('should return null when the list is empty', () => {
			const list = new _LinkedListSingly<number>();

			expect(list.pop_back()).toBeNull();
			expect(list.len()).toBe(0);
		});

		it('should clear head and tail when removing the only node', () => {
			const list = new _LinkedListSingly([10]);

			expect(list.pop_back()).toBe(10);

			expect(list.head).toBeNull();
			expect(list.tail).toBeNull();
			expect(list.len()).toBe(0);
		});
	});

	describe('structural invariants', () => {
		it('should keep the tail next pointer null', () => {
			const list = new _LinkedListSingly([10, 20, 30]);

			expect(list.tail?.next).toBeNull();
		});

		it('should keep length consistent after mixed operations', () => {
			const list = new _LinkedListSingly<number>();

			list.push_back(2);
			list.push_front(1);
			list.push_back(3);
			list.pop_front();
			list.push_front(0);
			list.pop_back();

			expect(list.traverse()).toEqual([0, 2]);
			expect(list.len()).toBe(2);
			expect(list.head?.value).toBe(0);
			expect(list.tail?.value).toBe(2);
			expect(list.tail?.next).toBeNull();
		});
	});
});

describe('_LinkedListDoubly', () => {
	describe('constructor and len()', () => {
		it('should initialize an empty list', () => {
			const list = new _LinkedListDoubly<number>();

			expect(list.len()).toBe(0);
			expect(list.head).toBeNull();
			expect(list.tail).toBeNull();
			expect(list.traverse()).toEqual([]);
		});

		it('should initialize from an array', () => {
			const list = new _LinkedListDoubly([10, 20, 30]);

			expect(list.len()).toBe(3);
			expect(list.traverse()).toEqual([10, 20, 30]);
			expect(list.head?.value).toBe(10);
			expect(list.tail?.value).toBe(30);
		});

		it('should correctly initialize a single-element list', () => {
			const list = new _LinkedListDoubly([10]);

			expect(list.len()).toBe(1);
			expect(list.head?.value).toBe(10);
			expect(list.tail?.value).toBe(10);
			expect(list.head).toBe(list.tail);
		});
	});

	describe('peek_front() and peek_back()', () => {
		it('should return the first and last nodes', () => {
			const list = new _LinkedListDoubly([10, 20, 30]);

			expect(list.peek_front()?.value).toBe(10);
			expect(list.peek_back()?.value).toBe(30);
		});

		it('should return null for an empty list', () => {
			const list = new _LinkedListDoubly<number>();

			expect(list.peek_front()).toBeNull();
			expect(list.peek_back()).toBeNull();
		});
	});

	describe('traverse()', () => {
		it('should return all values in forward order', () => {
			const list = new _LinkedListDoubly([10, 20, 30]);

			expect(list.traverse()).toEqual([10, 20, 30]);
		});

		it('should invoke the callback with each value and index', () => {
			const list = new _LinkedListDoubly(['a', 'b', 'c']);
			const visited: Array<[string, number]> = [];

			list.traverse((value, index) => {
				visited.push([value, index]);
			});

			expect(visited).toEqual([
				['a', 0],
				['b', 1],
				['c', 2],
			]);
		});

		it('should return an empty array for an empty list', () => {
			const list = new _LinkedListDoubly<number>();

			expect(list.traverse()).toEqual([]);
		});
	});

	describe('find()', () => {
		it('should return the node containing the requested value', () => {
			const list = new _LinkedListDoubly([10, 20, 30]);

			expect(list.find(20)?.value).toBe(20);
		});

		it('should return the first matching node when duplicates exist', () => {
			const list = new _LinkedListDoubly([10, 20, 10]);

			expect(list.find(10)).toBe(list.head);
		});

		it('should return null when the value does not exist', () => {
			const list = new _LinkedListDoubly([10, 20, 30]);

			expect(list.find(99)).toBeNull();
		});

		it('should return null when searching an empty list', () => {
			const list = new _LinkedListDoubly<number>();

			expect(list.find(10)).toBeNull();
		});
	});

	describe('push_front()', () => {
		it('should insert a node at the beginning', () => {
			const list = new _LinkedListDoubly([20, 30]);

			list.push_front(10);

			expect(list.traverse()).toEqual([10, 20, 30]);
			expect(list.head?.value).toBe(10);
			expect(list.tail?.value).toBe(30);
			expect(list.head?.prev).toBeNull();
			expect(list.head?.next?.prev).toBe(list.head);
			expect(list.len()).toBe(3);
		});

		it('should work on an empty list', () => {
			const list = new _LinkedListDoubly<number>();

			list.push_front(10);

			expect(list.traverse()).toEqual([10]);
			expect(list.head).toBe(list.tail);
			expect(list.head?.prev).toBeNull();
			expect(list.head?.next).toBeNull();
			expect(list.len()).toBe(1);
		});
	});

	describe('push_back()', () => {
		it('should insert a node at the end', () => {
			const list = new _LinkedListDoubly([10, 20]);

			list.push_back(30);

			expect(list.traverse()).toEqual([10, 20, 30]);
			expect(list.head?.value).toBe(10);
			expect(list.tail?.value).toBe(30);
			expect(list.tail?.next).toBeNull();
			expect(list.tail?.prev?.next).toBe(list.tail);
			expect(list.len()).toBe(3);
		});

		it('should work on an empty list', () => {
			const list = new _LinkedListDoubly<number>();

			list.push_back(10);

			expect(list.traverse()).toEqual([10]);
			expect(list.head).toBe(list.tail);
			expect(list.tail?.prev).toBeNull();
			expect(list.tail?.next).toBeNull();
			expect(list.len()).toBe(1);
		});
	});

	describe('pop_front()', () => {
		it('should remove and return the first node', () => {
			const list = new _LinkedListDoubly([10, 20, 30]);

			const removed = list.pop_front();

			expect(removed?.value).toBe(10);
			expect(list.traverse()).toEqual([20, 30]);
			expect(list.head?.value).toBe(20);
			expect(list.head?.prev).toBeNull();
			expect(list.tail?.value).toBe(30);
			expect(list.len()).toBe(2);
		});

		it('should return null when the list is empty', () => {
			const list = new _LinkedListDoubly<number>();

			expect(list.pop_front()).toBeNull();
			expect(list.len()).toBe(0);
		});

		it('should clear head and tail when removing the only node', () => {
			const list = new _LinkedListDoubly([10]);

			expect(list.pop_front()?.value).toBe(10);

			expect(list.head).toBeNull();
			expect(list.tail).toBeNull();
			expect(list.len()).toBe(0);
		});
	});

	describe('pop_back()', () => {
		it('should remove and return the last value', () => {
			const list = new _LinkedListDoubly([10, 20, 30]);

			expect(list.pop_back()).toBe(30);
			expect(list.traverse()).toEqual([10, 20]);
			expect(list.tail?.value).toBe(20);
			expect(list.tail?.next).toBeNull();
			expect(list.len()).toBe(2);
		});

		it('should return null when the list is empty', () => {
			const list = new _LinkedListDoubly<number>();

			expect(list.pop_back()).toBeNull();
			expect(list.len()).toBe(0);
		});

		it('should clear head and tail when removing the only node', () => {
			const list = new _LinkedListDoubly([10]);

			expect(list.pop_back()).toBe(10);

			expect(list.head).toBeNull();
			expect(list.tail).toBeNull();
			expect(list.len()).toBe(0);
		});
	});

	describe('structural invariants', () => {
		it('should maintain correct forward and backward links after construction', () => {
			const list = new _LinkedListDoubly([10, 20, 30]);

			expect(list.head?.prev).toBeNull();
			expect(list.head?.next?.value).toBe(20);
			expect(list.head?.next?.prev).toBe(list.head);
			expect(list.tail?.prev?.value).toBe(20);
			expect(list.tail?.prev?.next).toBe(list.tail);
			expect(list.tail?.next).toBeNull();
		});

		it('should maintain correct links after mixed operations', () => {
			const list = new _LinkedListDoubly<number>();

			list.push_back(2);
			list.push_front(1);
			list.push_back(3);
			list.pop_front();
			list.push_front(0);
			list.pop_back();

			expect(list.traverse()).toEqual([0, 2]);
			expect(list.len()).toBe(2);
			expect(list.head?.value).toBe(0);
			expect(list.tail?.value).toBe(2);

			expect(list.head?.prev).toBeNull();
			expect(list.head?.next).toBe(list.tail);
			expect(list.tail?.prev).toBe(list.head);
			expect(list.tail?.next).toBeNull();
		});
	});
});
