export class _HashMap<T> {
	protected length: number = 0;
	protected data: { [key: string]: T } = {};

	put(key: string, values: T) {
		this.data[key] = values;
	}

	delete(key: string) {
		delete this.data[key];
	}

	get(key: string) {
		const item = this.data[key];
		return item;
	}

	has(item: string) {
		return this.data[item] ? true : false;
	}

	keys() {
		return Object.keys(this.data);
	}

	values() {
		return Object.values(this.data);
	}

	entries() {
		return Object.entries(this.data) as [string, T][];
		// or just this.data
	}
}
