import { describe, expect, it } from 'vitest';
import { _Queue, _QueueArray } from '../src/04-queue/implement';

describe('_Queue', () => {
	describe('constructor and len()', () => {
		it('should initialize an empty queue', () => {
			const queue = new _Queue<number>();

			expect(queue.len()).toBe(0);
			expect(queue.isEmpty()).toBe(true);
		});

		it('should initialize from provided values', () => {
			const queue = new _Queue([10, 20, 30]);

			expect(queue.len()).toBe(3);
			expect(queue.isEmpty()).toBe(false);
			expect(queue.peek()).toBe(10);
		});
	});

	describe('enqueue()', () => {
		it('should add an item to the back', () => {
			const queue = new _Queue<number>();

			queue.enqueue(10);

			expect(queue.len()).toBe(1);
			expect(queue.peek()).toBe(10);
		});

		it('should preserve insertion order', () => {
			const queue = new _Queue<number>();

			queue.enqueue(10);
			queue.enqueue(20);
			queue.enqueue(30);

			expect(queue.len()).toBe(3);
			expect(queue.peek()).toBe(10);
		});
	});

	describe('peek()', () => {
		it('should return the front item without removing it', () => {
			const queue = new _Queue([10, 20, 30]);

			expect(queue.peek()).toBe(10);
			expect(queue.peek()).toBe(10);
			expect(queue.len()).toBe(3);
		});

		it('should throw when the queue is empty', () => {
			const queue = new _Queue<number>();

			expect(() => queue.peek()).toThrow();
		});
	});

	describe('dequeue()', () => {
		it('should remove and return the front item', () => {
			const queue = new _Queue([10, 20, 30]);

			expect(queue.dequeue()).toBe(10);
			expect(queue.len()).toBe(2);
			expect(queue.peek()).toBe(20);
		});

		it('should follow FIFO order', () => {
			const queue = new _Queue<number>();

			queue.enqueue(10);
			queue.enqueue(20);
			queue.enqueue(30);

			expect(queue.dequeue()).toBe(10);
			expect(queue.dequeue()).toBe(20);
			expect(queue.dequeue()).toBe(30);
		});

		it('should become empty after removing the last item', () => {
			const queue = new _Queue([10]);

			expect(queue.dequeue()).toBe(10);
			expect(queue.len()).toBe(0);
			expect(queue.isEmpty()).toBe(true);
		});

		it('should throw when the queue is empty', () => {
			const queue = new _Queue<number>();

			expect(() => queue.dequeue()).toThrow();
		});
	});

	describe('isEmpty()', () => {
		it('should return true when empty', () => {
			expect(new _Queue<number>().isEmpty()).toBe(true);
		});

		it('should return false after enqueue()', () => {
			const queue = new _Queue<number>();
			queue.enqueue(10);

			expect(queue.isEmpty()).toBe(false);
		});

		it('should return true after all items are dequeued', () => {
			const queue = new _Queue([10, 20]);

			queue.dequeue();
			queue.dequeue();

			expect(queue.isEmpty()).toBe(true);
		});
	});

	describe('operation sequences', () => {
		it('should remain usable after becoming empty', () => {
			const queue = new _Queue([10]);

			expect(queue.dequeue()).toBe(10);
			expect(queue.isEmpty()).toBe(true);

			queue.enqueue(20);

			expect(queue.peek()).toBe(20);
			expect(queue.dequeue()).toBe(20);
			expect(queue.len()).toBe(0);
		});

		it('should preserve FIFO order after mixed operations', () => {
			const queue = new _Queue<number>();

			queue.enqueue(1);
			queue.enqueue(2);
			expect(queue.dequeue()).toBe(1);

			queue.enqueue(3);
			queue.enqueue(4);

			expect(queue.dequeue()).toBe(2);
			expect(queue.dequeue()).toBe(3);
			expect(queue.dequeue()).toBe(4);
			expect(queue.isEmpty()).toBe(true);
		});
	});
});

describe('_QueueArray', () => {
	describe('constructor and len()', () => {
		it('should initialize an empty queue', () => {
			const queue = new _QueueArray<number>();

			expect(queue.len()).toBe(0);
			expect(queue.isEmpty()).toBe(true);
		});

		it('should initialize from provided values', () => {
			const queue = new _QueueArray([10, 20, 30]);

			expect(queue.len()).toBe(3);
			expect(queue.isEmpty()).toBe(false);
			expect(queue.peek()).toBe(10);
		});
	});

	describe('push()', () => {
		it('should add an item to the back of the queue', () => {
			const queue = new _QueueArray<number>();

			queue.push(10);

			expect(queue.len()).toBe(1);
			expect(queue.peek()).toBe(10);
		});

		it('should preserve FIFO order', () => {
			const queue = new _QueueArray<number>();

			queue.push(10);
			queue.push(20);
			queue.push(30);

			expect(queue.len()).toBe(3);
			expect(queue.pop()).toBe(10);
			expect(queue.pop()).toBe(20);
			expect(queue.pop()).toBe(30);
		});
	});

	describe('peek()', () => {
		it('should return the front item without removing it', () => {
			const queue = new _QueueArray([10, 20, 30]);

			expect(queue.peek()).toBe(10);
			expect(queue.peek()).toBe(10);
			expect(queue.len()).toBe(3);
		});

		it('should throw when the queue is empty', () => {
			const queue = new _QueueArray<number>();

			expect(() => queue.peek()).toThrow();
		});
	});

	describe('pop()', () => {
		it('should remove and return the front item', () => {
			const queue = new _QueueArray([10, 20, 30]);

			expect(queue.pop()).toBe(10);
			expect(queue.len()).toBe(2);
			expect(queue.peek()).toBe(20);
		});

		it('should become empty after removing the last item', () => {
			const queue = new _QueueArray([10]);

			expect(queue.pop()).toBe(10);
			expect(queue.len()).toBe(0);
			expect(queue.isEmpty()).toBe(true);
		});

		it('should throw when the queue is empty', () => {
			const queue = new _QueueArray<number>();

			expect(() => queue.pop()).toThrow();
		});
	});

	describe('isEmpty()', () => {
		it('should return true when empty', () => {
			expect(new _QueueArray<number>().isEmpty()).toBe(true);
		});

		it('should return false after push()', () => {
			const queue = new _QueueArray<number>();
			queue.push(10);

			expect(queue.isEmpty()).toBe(false);
		});

		it('should return true after all items are removed', () => {
			const queue = new _QueueArray([10, 20]);

			queue.pop();
			queue.pop();

			expect(queue.isEmpty()).toBe(true);
		});
	});

	describe('operation sequences', () => {
		it('should remain usable after becoming empty', () => {
			const queue = new _QueueArray([10]);

			expect(queue.pop()).toBe(10);
			expect(queue.isEmpty()).toBe(true);

			queue.push(20);

			expect(queue.peek()).toBe(20);
			expect(queue.pop()).toBe(20);
			expect(queue.len()).toBe(0);
		});
	});
});
