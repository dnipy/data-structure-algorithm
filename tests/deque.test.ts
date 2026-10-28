import { describe, expect, it } from 'vitest';
import { _Deque } from '../src/05-deque/implement';

describe('_Deque', () => {
	describe('constructor and len()', () => {
		it('should initialize an empty deque', () => {
			const deque = new _Deque<number>();

			expect(deque.len()).toBe(0);
			expect(deque.isEmpty()).toBe(true);
		});

		it('should initialize from provided values', () => {
			const deque = new _Deque([10, 20, 30]);

			expect(deque.len()).toBe(3);
			expect(deque.isEmpty()).toBe(false);
			expect(deque.peek_front()).toBe(10);
			expect(deque.peek_back()).toBe(30);
		});
	});

	describe('push_front()', () => {
		it('should insert an item at the front', () => {
			const deque = new _Deque([20, 30]);

			deque.push_front(10);

			expect(deque.peek_front()).toBe(10);
			expect(deque.peek_back()).toBe(30);
			expect(deque.len()).toBe(3);
		});

		it('should work on an empty deque', () => {
			const deque = new _Deque<number>();

			deque.push_front(10);

			expect(deque.peek_front()).toBe(10);
			expect(deque.peek_back()).toBe(10);
			expect(deque.len()).toBe(1);
		});

		it('should preserve order after repeated insertions', () => {
			const deque = new _Deque<number>();

			deque.push_front(3);
			deque.push_front(2);
			deque.push_front(1);

			expect(deque.peek_front()).toBe(1);
			expect(deque.len()).toBe(3);

			expect(deque.pop_front()).toBe(1);
			expect(deque.pop_front()).toBe(2);
			expect(deque.pop_front()).toBe(3);
		});
	});

	describe('push_back()', () => {
		it('should insert an item at the back', () => {
			const deque = new _Deque([10, 20]);

			deque.push_back(30);

			expect(deque.peek_front()).toBe(10);
			expect(deque.peek_back()).toBe(30);
			expect(deque.len()).toBe(3);
		});

		it('should work on an empty deque', () => {
			const deque = new _Deque<number>();

			deque.push_back(10);

			expect(deque.peek_front()).toBe(10);
			expect(deque.peek_back()).toBe(10);
			expect(deque.len()).toBe(1);
		});

		it('should preserve insertion order', () => {
			const deque = new _Deque<number>();

			deque.push_back(10);
			deque.push_back(20);
			deque.push_back(30);

			expect(deque.pop_front()).toBe(10);
			expect(deque.pop_front()).toBe(20);
			expect(deque.pop_front()).toBe(30);
		});
	});

	describe('peek_front()', () => {
		it('should return the first item without removing it', () => {
			const deque = new _Deque([10, 20, 30]);

			expect(deque.peek_front()).toBe(10);
			expect(deque.peek_front()).toBe(10);
			expect(deque.len()).toBe(3);
		});

		it('should throw when the deque is empty', () => {
			const deque = new _Deque<number>();

			expect(() => deque.peek_front()).toThrow('deque is empty');
		});
	});

	describe('peek_back()', () => {
		it('should return the last item without removing it', () => {
			const deque = new _Deque([10, 20, 30]);

			expect(deque.peek_back()).toBe(30);
			expect(deque.peek_back()).toBe(30);
			expect(deque.len()).toBe(3);
		});

		it('should throw when the deque is empty', () => {
			const deque = new _Deque<number>();

			expect(() => deque.peek_back()).toThrow('deque is empty');
		});
	});

	describe('pop_front()', () => {
		it('should remove and return the first item', () => {
			const deque = new _Deque([10, 20, 30]);

			expect(deque.pop_front()).toBe(10);
			expect(deque.len()).toBe(2);
			expect(deque.peek_front()).toBe(20);
		});

		it('should handle removing the only item', () => {
			const deque = new _Deque([10]);

			expect(deque.pop_front()).toBe(10);
			expect(deque.len()).toBe(0);
			expect(deque.isEmpty()).toBe(true);
		});

		it('should throw when the deque is empty', () => {
			const deque = new _Deque<number>();

			expect(() => deque.pop_front()).toThrow('deque is empty');
		});
	});

	describe('pop_back()', () => {
		it('should remove and return the last item', () => {
			const deque = new _Deque([10, 20, 30]);

			expect(deque.pop_back()).toBe(30);
			expect(deque.len()).toBe(2);
			expect(deque.peek_back()).toBe(20);
		});

		it('should handle removing the only item', () => {
			const deque = new _Deque([10]);

			expect(deque.pop_back()).toBe(10);
			expect(deque.len()).toBe(0);
			expect(deque.isEmpty()).toBe(true);
		});

		it('should throw when the deque is empty', () => {
			const deque = new _Deque<number>();

			expect(() => deque.pop_back()).toThrow('deque is empty');
		});
	});

	describe('isEmpty()', () => {
		it('should return true when the deque is empty', () => {
			expect(new _Deque<number>().isEmpty()).toBe(true);
		});

		it('should return false after inserting an item', () => {
			const deque = new _Deque<number>();

			deque.push_back(10);

			expect(deque.isEmpty()).toBe(false);
		});

		it('should return true after removing all items', () => {
			const deque = new _Deque([10, 20]);

			deque.pop_front();
			deque.pop_back();

			expect(deque.isEmpty()).toBe(true);
		});
	});

	describe('mixed operations', () => {
		it('should maintain the correct order when inserting and removing from both ends', () => {
			const deque = new _Deque<number>();

			deque.push_back(2);
			deque.push_front(1);
			deque.push_back(3);
			deque.push_front(0);

			expect(deque.len()).toBe(4);
			expect(deque.peek_front()).toBe(0);
			expect(deque.peek_back()).toBe(3);

			expect(deque.pop_back()).toBe(3);
			expect(deque.pop_front()).toBe(0);
			expect(deque.pop_front()).toBe(1);
			expect(deque.pop_back()).toBe(2);

			expect(deque.len()).toBe(0);
			expect(deque.isEmpty()).toBe(true);
		});

		it('should remain usable after becoming empty', () => {
			const deque = new _Deque([10]);

			expect(deque.pop_front()).toBe(10);
			expect(deque.isEmpty()).toBe(true);

			deque.push_back(20);
			deque.push_front(10);

			expect(deque.len()).toBe(2);
			expect(deque.pop_front()).toBe(10);
			expect(deque.pop_back()).toBe(20);

			expect(deque.isEmpty()).toBe(true);
		});

		it('should preserve the correct state after repeated removals', () => {
			const deque = new _Deque([10, 20, 30, 40]);

			expect(deque.pop_front()).toBe(10);
			expect(deque.pop_back()).toBe(40);
			expect(deque.pop_front()).toBe(20);

			expect(deque.len()).toBe(1);
			expect(deque.peek_front()).toBe(30);
			expect(deque.peek_back()).toBe(30);
		});
	});
});
