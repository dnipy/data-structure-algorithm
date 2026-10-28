import { describe, it, expect, beforeEach } from 'vitest';
import { _HashMap } from '../src/06-hash-map/implement';

describe('_HashMap', () => {
	let map: _HashMap<unknown>;

	beforeEach(() => {
		map = new _HashMap<unknown>();
	});

	describe('constructor', () => {
		it('should create an empty hash map', () => {
			expect(map.len()).toBe(0);
			expect(map.isEmpty()).toBe(true);
			expect(map.keys()).toEqual([]);
			expect(map.values()).toEqual([]);
			expect(map.entries()).toEqual([]);
		});
	});

	describe('put()', () => {
		it('should insert a new key-value pair', () => {
			map.put('name', 'Alice');

			expect(map.get('name')).toBe('Alice');
			expect(map.has('name')).toBe(true);
			expect(map.len()).toBe(1);
		});

		it('should insert multiple entries', () => {
			map.put('name', 'Alice');
			map.put('age', 25);
			map.put('active', true);

			expect(map.len()).toBe(3);
			expect(map.get('name')).toBe('Alice');
			expect(map.get('age')).toBe(25);
			expect(map.get('active')).toBe(true);
		});

		it('should update an existing key without increasing length', () => {
			map.put('score', 10);
			map.put('score', 20);

			expect(map.get('score')).toBe(20);
			expect(map.len()).toBe(1);
			expect(map.keys()).toEqual(['score']);
		});

		it('should support an empty string as a key', () => {
			map.put('', 'empty key');

			expect(map.has('')).toBe(true);
			expect(map.get('')).toBe('empty key');
			expect(map.len()).toBe(1);
		});

		it('should support special property names as keys', () => {
			map.put('constructor', 1);
			map.put('toString', 2);
			map.put('__proto__', 3);

			expect(map.get('constructor')).toBe(1);
			expect(map.get('toString')).toBe(2);
			expect(map.get('__proto__')).toBe(3);
			expect(map.len()).toBe(3);
		});
	});

	describe('get()', () => {
		it('should return undefined for a missing key', () => {
			expect(map.get('missing')).toBeUndefined();
		});

		it('should return the correct value for each key', () => {
			map.put('first', 10);
			map.put('second', 20);

			expect(map.get('first')).toBe(10);
			expect(map.get('second')).toBe(20);
		});

		it('should distinguish a stored undefined value from a missing key using has()', () => {
			map.put('present', undefined);

			expect(map.get('present')).toBeUndefined();
			expect(map.has('present')).toBe(true);
			expect(map.has('missing')).toBe(false);
		});
	});

	describe('has()', () => {
		it('should return false for a missing key', () => {
			expect(map.has('missing')).toBe(false);
		});

		it('should return true for an existing key', () => {
			map.put('name', 'Alice');

			expect(map.has('name')).toBe(true);
		});

		it.each([
			['zero', 0],
			['false', false],
			['empty string', ''],
			['null', null],
			['undefined', undefined],
		])(
			'should return true when the stored value is %s',
			(_label, value) => {
				map.put('key', value);

				expect(map.has('key')).toBe(true);
			},
		);
	});

	describe('delete()', () => {
		it('should delete an existing entry', () => {
			map.put('name', 'Alice');

			map.delete('name');

			expect(map.has('name')).toBe(false);
			expect(map.get('name')).toBeUndefined();
			expect(map.len()).toBe(0);
			expect(map.isEmpty()).toBe(true);
		});

		it('should not change length when deleting a missing key', () => {
			map.put('name', 'Alice');

			map.delete('missing');

			expect(map.len()).toBe(1);
			expect(map.get('name')).toBe('Alice');
		});

		it('should not change length when deleting the same key twice', () => {
			map.put('name', 'Alice');

			map.delete('name');
			map.delete('name');

			expect(map.len()).toBe(0);
		});

		it('should allow a deleted key to be inserted again', () => {
			map.put('name', 'Alice');
			map.delete('name');
			map.put('name', 'Bob');

			expect(map.get('name')).toBe('Bob');
			expect(map.len()).toBe(1);
		});

		it('should preserve other entries when deleting one key', () => {
			map.put('a', 1);
			map.put('b', 2);
			map.put('c', 3);

			map.delete('b');

			expect(map.has('a')).toBe(true);
			expect(map.has('b')).toBe(false);
			expect(map.has('c')).toBe(true);
			expect(map.len()).toBe(2);
		});
	});

	describe('keys()', () => {
		it('should return all keys', () => {
			map.put('name', 'Alice');
			map.put('age', 25);
			map.put('city', 'Berlin');

			expect(map.keys()).toHaveLength(3);
			expect(map.keys()).toEqual(
				expect.arrayContaining(['name', 'age', 'city']),
			);
		});

		it('should return an empty array when the map is empty', () => {
			expect(map.keys()).toEqual([]);
		});

		it('should not include deleted keys', () => {
			map.put('a', 1);
			map.put('b', 2);
			map.delete('a');

			expect(map.keys()).toEqual(['b']);
		});

		it('should not contain duplicate keys after updating an entry', () => {
			map.put('a', 1);
			map.put('a', 2);

			expect(map.keys()).toEqual(['a']);
		});
	});

	describe('values()', () => {
		it('should return all stored values', () => {
			map.put('a', 10);
			map.put('b', 20);
			map.put('c', 30);

			expect(map.values()).toHaveLength(3);
			expect(map.values()).toEqual(expect.arrayContaining([10, 20, 30]));
		});

		it('should reflect updated values', () => {
			map.put('a', 10);
			map.put('a', 20);

			expect(map.values()).toEqual([20]);
		});

		it('should not include deleted values', () => {
			map.put('a', 10);
			map.put('b', 20);
			map.delete('a');

			expect(map.values()).toEqual([20]);
		});
	});

	describe('entries()', () => {
		it('should return key-value pairs', () => {
			map.put('name', 'Alice');
			map.put('age', 25);

			expect(map.entries()).toHaveLength(2);
			expect(map.entries()).toEqual(
				expect.arrayContaining([
					['name', 'Alice'],
					['age', 25],
				]),
			);
		});

		it('should reflect updated values without duplicating entries', () => {
			map.put('a', 1);
			map.put('a', 2);

			expect(map.entries()).toEqual([['a', 2]]);
		});

		it('should return an empty array when the map is empty', () => {
			expect(map.entries()).toEqual([]);
		});
	});

	describe('len()', () => {
		it('should return the number of unique keys', () => {
			map.put('a', 1);
			map.put('b', 2);
			map.put('a', 3);

			expect(map.len()).toBe(2);
		});

		it('should decrease after deletion', () => {
			map.put('a', 1);
			map.put('b', 2);

			map.delete('a');

			expect(map.len()).toBe(1);
		});
	});

	describe('isEmpty()', () => {
		it('should return true when empty', () => {
			expect(map.isEmpty()).toBe(true);
		});

		it('should return false after inserting an entry', () => {
			map.put('a', 1);

			expect(map.isEmpty()).toBe(false);
		});

		it('should return true after deleting every entry', () => {
			map.put('a', 1);
			map.put('b', 2);

			map.delete('a');
			map.delete('b');

			expect(map.isEmpty()).toBe(true);
		});
	});

	describe('collision handling', () => {
		it('should preserve distinct keys that collide into the same bucket', () => {
			// With an initial capacity of 8 and a typical polynomial hash,
			// "ab" and "ba" collide when the multiplier is 31.
			map.put('ab', 1);
			map.put('ba', 2);

			expect(map.get('ab')).toBe(1);
			expect(map.get('ba')).toBe(2);
			expect(map.len()).toBe(2);
		});

		it('should update one colliding key without changing the other', () => {
			map.put('ab', 1);
			map.put('ba', 2);

			map.put('ab', 100);

			expect(map.get('ab')).toBe(100);
			expect(map.get('ba')).toBe(2);
			expect(map.len()).toBe(2);
		});

		it('should delete one colliding key without deleting its neighbors', () => {
			map.put('ab', 1);
			map.put('ba', 2);

			map.delete('ab');

			expect(map.has('ab')).toBe(false);
			expect(map.get('ba')).toBe(2);
			expect(map.len()).toBe(1);
		});
	});

	describe('resizing', () => {
		it('should preserve all entries when the hash map grows', () => {
			const expected = new Map<string, number>();

			for (let i = 0; i < 100; i++) {
				const key = `key-${i}`;
				map.put(key, i);
				expected.set(key, i);
			}

			expect(map.len()).toBe(expected.size);

			for (const [key, value] of expected) {
				expect(map.has(key)).toBe(true);
				expect(map.get(key)).toBe(value);
			}

			expect(map.entries()).toHaveLength(100);
		});

		it('should correctly update existing keys after resizing', () => {
			for (let i = 0; i < 100; i++) {
				map.put(`key-${i}`, i);
			}

			map.put('key-50', 'updated');

			expect(map.get('key-50')).toBe('updated');
			expect(map.len()).toBe(100);
		});

		it('should correctly delete entries after resizing', () => {
			for (let i = 0; i < 100; i++) {
				map.put(`key-${i}`, i);
			}

			map.delete('key-50');

			expect(map.has('key-50')).toBe(false);
			expect(map.get('key-49')).toBe(49);
			expect(map.get('key-51')).toBe(51);
			expect(map.len()).toBe(99);
		});
	});
});
