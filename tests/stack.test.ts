import { describe, expect, it } from 'vitest';
import { _Stack, _StackArray } from '../src/03-stack/implement';

describe('_Stack', () => {
	describe('constructor and len()', () => {
		it('should initialize an empty stack', () => {
			const stack = new _Stack<number>();

			expect(stack.len()).toBe(0);
			expect(stack.isEmpty()).toBe(true);
		});

		it('should initialize from provided values', () => {
			const stack = new _Stack([10, 20, 30]);

			expect(stack.len()).toBe(3);
			expect(stack.isEmpty()).toBe(false);
			expect(stack.peek()).toBe(30);
		});
	});

	describe('push()', () => {
		it('should add an item to the top', () => {
			const stack = new _Stack<number>();

			stack.push(10);

			expect(stack.len()).toBe(1);
			expect(stack.peek()).toBe(10);
		});

		it('should support multiple items', () => {
			const stack = new _Stack<number>();

			stack.push(10);
			stack.push(20);
			stack.push(30);

			expect(stack.len()).toBe(3);
			expect(stack.peek()).toBe(30);
		});
	});

	describe('peek()', () => {
		it('should return the top item without removing it', () => {
			const stack = new _Stack([10, 20, 30]);

			expect(stack.peek()).toBe(30);
			expect(stack.peek()).toBe(30);
			expect(stack.len()).toBe(3);
		});

		it('should throw when the stack is empty', () => {
			const stack = new _Stack<number>();

			expect(() => stack.peek()).toThrow('stack is empty');
		});
	});

	describe('pop()', () => {
		it('should remove and return the top item', () => {
			const stack = new _Stack([10, 20, 30]);

			expect(stack.pop()).toBe(30);
			expect(stack.len()).toBe(2);
			expect(stack.peek()).toBe(20);
		});

		it('should follow LIFO order', () => {
			const stack = new _Stack<number>();

			stack.push(10);
			stack.push(20);
			stack.push(30);

			expect(stack.pop()).toBe(30);
			expect(stack.pop()).toBe(20);
			expect(stack.pop()).toBe(10);
		});

		it('should become empty after removing the last item', () => {
			const stack = new _Stack([10]);

			expect(stack.pop()).toBe(10);
			expect(stack.len()).toBe(0);
			expect(stack.isEmpty()).toBe(true);
		});

		it('should throw when the stack is empty', () => {
			const stack = new _Stack<number>();

			expect(() => stack.pop()).toThrow('stack is empty');
		});
	});

	describe('isEmpty()', () => {
		it('should return true for an empty stack', () => {
			const stack = new _Stack<number>();

			expect(stack.isEmpty()).toBe(true);
		});

		it('should return false after pushing an item', () => {
			const stack = new _Stack<number>();

			stack.push(10);

			expect(stack.isEmpty()).toBe(false);
		});

		it('should return true after all items are popped', () => {
			const stack = new _Stack([10, 20]);

			stack.pop();
			stack.pop();

			expect(stack.isEmpty()).toBe(true);
		});
	});

	describe('operation sequences', () => {
		it('should remain usable after becoming empty', () => {
			const stack = new _Stack([10]);

			expect(stack.pop()).toBe(10);
			expect(stack.isEmpty()).toBe(true);

			stack.push(20);

			expect(stack.peek()).toBe(20);
			expect(stack.pop()).toBe(20);
			expect(stack.len()).toBe(0);
		});
	});
});

describe('_StackArray', () => {
	describe('constructor and len()', () => {
		it('should initialize an empty stack', () => {
			const stack = new _StackArray<number>();

			expect(stack.len()).toBe(0);
			expect(stack.isEmpty()).toBe(true);
		});

		it('should initialize from provided values', () => {
			const stack = new _StackArray([10, 20, 30]);

			expect(stack.len()).toBe(3);
			expect(stack.isEmpty()).toBe(false);
			expect(stack.peek()).toBe(30);
		});
	});

	describe('push()', () => {
		it('should add an item to the top', () => {
			const stack = new _StackArray<number>();

			stack.push(10);

			expect(stack.len()).toBe(1);
			expect(stack.peek()).toBe(10);
		});

		it('should support multiple items', () => {
			const stack = new _StackArray<number>();

			stack.push(10);
			stack.push(20);
			stack.push(30);

			expect(stack.len()).toBe(3);
			expect(stack.peek()).toBe(30);
		});
	});

	describe('peek()', () => {
		it('should return the top item without removing it', () => {
			const stack = new _StackArray([10, 20, 30]);

			expect(stack.peek()).toBe(30);
			expect(stack.peek()).toBe(30);
			expect(stack.len()).toBe(3);
		});

		it('should throw when the stack is empty', () => {
			const stack = new _StackArray<number>();

			expect(() => stack.peek()).toThrow();
		});
	});

	describe('pop()', () => {
		it('should remove and return the top item', () => {
			const stack = new _StackArray([10, 20, 30]);

			expect(stack.pop()).toBe(30);
			expect(stack.len()).toBe(2);
			expect(stack.peek()).toBe(20);
		});

		it('should follow LIFO order', () => {
			const stack = new _StackArray<number>();

			stack.push(10);
			stack.push(20);
			stack.push(30);

			expect(stack.pop()).toBe(30);
			expect(stack.pop()).toBe(20);
			expect(stack.pop()).toBe(10);
		});

		it('should become empty after removing the last item', () => {
			const stack = new _StackArray([10]);

			expect(stack.pop()).toBe(10);
			expect(stack.len()).toBe(0);
			expect(stack.isEmpty()).toBe(true);
		});

		it('should throw when the stack is empty', () => {
			const stack = new _StackArray<number>();

			expect(() => stack.pop()).toThrow();
		});
	});

	describe('isEmpty()', () => {
		it('should return true for an empty stack', () => {
			const stack = new _StackArray<number>();

			expect(stack.isEmpty()).toBe(true);
		});

		it('should return false after pushing an item', () => {
			const stack = new _StackArray<number>();

			stack.push(10);

			expect(stack.isEmpty()).toBe(false);
		});

		it('should return true after all items are popped', () => {
			const stack = new _StackArray([10, 20]);

			stack.pop();
			stack.pop();

			expect(stack.isEmpty()).toBe(true);
		});
	});

	describe('operation sequences', () => {
		it('should remain usable after becoming empty', () => {
			const stack = new _StackArray([10]);

			expect(stack.pop()).toBe(10);
			expect(stack.isEmpty()).toBe(true);

			stack.push(20);

			expect(stack.peek()).toBe(20);
			expect(stack.pop()).toBe(20);
			expect(stack.len()).toBe(0);
		});
	});
});
