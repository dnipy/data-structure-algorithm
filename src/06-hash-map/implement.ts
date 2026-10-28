export class _HashMap<T> {
	protected length: number = 0;

	// TODO: Define the bucket storage and entry representation.

	constructor(initialCapacity: number = 8) {
		// TODO: Initialize the bucket storage.
	}

	// TODO: Implement a hash function.
	// TODO: Implement resizing and rehashing.

	put(key: string, value: T): void {
		// TODO
	}

	get(key: string): T | undefined {
		// TODO
		return undefined;
	}

	has(key: string): boolean {
		// TODO
		return false;
	}

	delete(key: string): void {
		// TODO
	}

	keys(): string[] {
		// TODO
		return [];
	}

	values(): T[] {
		// TODO
		return [];
	}

	entries(): [string, T][] {
		// TODO
		return [];
	}

	len(): number {
		return this.length;
	}

	isEmpty(): boolean {
		return this.length === 0;
	}
}
