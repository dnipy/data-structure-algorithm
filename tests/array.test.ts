import { describe, expect, it } from 'vitest';
import { _Array } from '../src/01-array/implement';

describe('_Array', () => {
	describe('constructor and len()', () => {
		it('should initialize an empty array', () => {
			const array = new _Array<number>();

			expect(array.len()).toBe(0);
			expect(array.traverse()).toEqual([]);
		});

		it('should initialize from the provided values', () => {
			const array = new _Array([10, 20, 30]);

			expect(array.len()).toBe(3);
			expect(array.traverse()).toEqual([10, 20, 30]);
		});

		it('should copy the initial array', () => {
			const initial = [10, 20, 30];
			const array = new _Array(initial);

			initial.push(40);

			expect(array.len()).toBe(3);
			expect(array.traverse()).toEqual([10, 20, 30]);
		});
	});

	describe('get()', () => {
		it('should return the value at a valid index', () => {
			const array = new _Array(['a', 'b', 'c']);

			expect(array.get(0)).toBe('a');
			expect(array.get(1)).toBe('b');
			expect(array.get(2)).toBe('c');
		});

		it('should throw for an index equal to the length', () => {
			const array = new _Array([10, 20, 30]);

			expect(() => array.get(3)).toThrow();
		});

		it('should throw for an index greater than the length', () => {
			const array = new _Array([10, 20, 30]);

			expect(() => array.get(4)).toThrow();
		});

		it('should throw for a negative index', () => {
			const array = new _Array([10, 20, 30]);

			expect(() => array.get(-1)).toThrow();
		});

		it('should throw for a fractional index', () => {
			const array = new _Array([10, 20, 30]);

			expect(() => array.get(1.5)).toThrow();
		});
	});

	describe('push_start()', () => {
		it('should insert an item at the beginning', () => {
			const array = new _Array([2, 3]);

			array.push_start(1);

			expect(array.traverse()).toEqual([1, 2, 3]);
			expect(array.len()).toBe(3);
		});

		it('should work on an empty array', () => {
			const array = new _Array<number>();

			array.push_start(10);

			expect(array.traverse()).toEqual([10]);
			expect(array.len()).toBe(1);
		});

		it('should support repeated insertions at the beginning', () => {
			const array = new _Array([3]);

			array.push_start(2);
			array.push_start(1);

			expect(array.traverse()).toEqual([1, 2, 3]);
			expect(array.len()).toBe(3);
		});
	});

	describe('push_end()', () => {
		it('should append an item to the end', () => {
			const array = new _Array([1, 2]);

			array.push_end(3);

			expect(array.traverse()).toEqual([1, 2, 3]);
			expect(array.len()).toBe(3);
		});

		it('should work on an empty array', () => {
			const array = new _Array<number>();

			array.push_end(10);

			expect(array.traverse()).toEqual([10]);
			expect(array.len()).toBe(1);
		});

		it('should support repeated insertions', () => {
			const array = new _Array<number>();

			array.push_end(1);
			array.push_end(2);
			array.push_end(3);

			expect(array.traverse()).toEqual([1, 2, 3]);
			expect(array.len()).toBe(3);
		});
	});

	describe('delete_at()', () => {
		it('should remove an item from the beginning', () => {
			const array = new _Array([1, 2, 3]);

			array.delete_at(0);

			expect(array.traverse()).toEqual([2, 3]);
			expect(array.len()).toBe(2);
		});

		it('should remove an item from the middle', () => {
			const array = new _Array([1, 2, 3]);

			array.delete_at(1);

			expect(array.traverse()).toEqual([1, 3]);
			expect(array.len()).toBe(2);
		});

		it('should remove an item from the end', () => {
			const array = new _Array([1, 2, 3]);

			array.delete_at(2);

			expect(array.traverse()).toEqual([1, 2]);
			expect(array.len()).toBe(2);
		});

		it('should support deleting the only item', () => {
			const array = new _Array([10]);

			array.delete_at(0);

			expect(array.traverse()).toEqual([]);
			expect(array.len()).toBe(0);
		});

		it('should throw for an index equal to the length', () => {
			const array = new _Array([1, 2, 3]);

			expect(() => array.delete_at(3)).toThrow();

			expect(array.traverse()).toEqual([1, 2, 3]);
			expect(array.len()).toBe(3);
		});

		it('should throw for a negative index', () => {
			const array = new _Array([1, 2, 3]);

			expect(() => array.delete_at(-1)).toThrow();

			expect(array.traverse()).toEqual([1, 2, 3]);
			expect(array.len()).toBe(3);
		});

		it('should throw for a fractional index', () => {
			const array = new _Array([1, 2, 3]);

			expect(() => array.delete_at(1.5)).toThrow();

			expect(array.traverse()).toEqual([1, 2, 3]);
			expect(array.len()).toBe(3);
		});
	});

	describe('find()', () => {
		it('should return the index of an existing item', () => {
			const array = new _Array(['a', 'b', 'c']);

			expect(array.find('b')).toBe(1);
		});

		it('should return the first matching index', () => {
			const array = new _Array([10, 20, 10]);

			expect(array.find(10)).toBe(0);
		});

		it('should return undefined when the item is missing', () => {
			const array = new _Array([10, 20, 30]);

			expect(array.find(99)).toBeUndefined();
		});

		it('should use strict equality', () => {
			const array = new _Array<unknown>([1]);

			expect(array.find('1')).toBeUndefined();
		});

		it('should return undefined for an empty array', () => {
			const array = new _Array<number>();

			expect(array.find(10)).toBeUndefined();
		});
	});

	describe('traverse()', () => {
		it('should return all values when no callback is provided', () => {
			const array = new _Array([10, 20, 30]);

			expect(array.traverse()).toEqual([10, 20, 30]);
		});

		it('should invoke the callback with each value and index', () => {
			const array = new _Array(['a', 'b', 'c']);
			const visited: Array<[string, number]> = [];

			array.traverse((item, index) => {
				visited.push([item, index]);
			});

			expect(visited).toEqual([
				['a', 0],
				['b', 1],
				['c', 2],
			]);
		});

		it('should return the callback results', () => {
			const array = new _Array([10, 20, 30]);

			expect(
				array.traverse((item, index) => `${index}: ${item}`),
			).toEqual(['0: 10', '1: 20', '2: 30']);
		});

		it('should not allow changes to the returned array to corrupt internal state', () => {
			const array = new _Array([10, 20, 30]);
			const result = array.traverse() as number[];

			result.push(40);

			expect(array.len()).toBe(3);
			expect(array.traverse()).toEqual([10, 20, 30]);
		});
	});

	describe('operation sequences', () => {
		it('should maintain the correct contents and length across mixed operations', () => {
			const array = new _Array([2, 3]);

			array.push_start(1);
			array.push_end(4);
			array.delete_at(1);

			expect(array.traverse()).toEqual([1, 3, 4]);
			expect(array.len()).toBe(3);
		});

		it('should remain usable after becoming empty', () => {
			const array = new _Array([1]);

			array.delete_at(0);
			array.push_end(2);
			array.push_start(1);

			expect(array.traverse()).toEqual([1, 2]);
			expect(array.len()).toBe(2);
		});
	});
});
