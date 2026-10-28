export class _Array<T> {
	protected length: number = 0;
	protected data: T[] = [];
	constructor(initial_value?: T[]) {
		this.data = initial_value ? [...initial_value] : [];
		this.length = initial_value?.length || 0;
	}

	private indexValidator(index: number) {
		if (index < 0) throw Error('negative index');
		if (index >= this.length) throw Error('out of bound');
		if (index % 1 !== 0) throw Error('invalid index');
	}

	len() {
		return this.length;
	}

	traverse(callback?: (item: T, index: number) => unknown) {
		if (!callback) return [...this.data];

		const new_data: unknown[] = [];

		for (let i = 0; i < this.length; i++) {
			new_data[i] = callback(this.data[i], i);
		}

		return new_data;
	}

	get(index: number) {
		this.indexValidator(index);
		return this.data[index];
	}

	push_start(item: T) {
		let new_data: T[] = [item];
		for (let i = 0; i < this.length; i++) {
			new_data[i + 1] = this.data[i];
		}
		this.data = new_data;
		this.length = this.length + 1;
	}

	push_end(item: T) {
		let new_data: T[] = this.data;
		new_data[this.length] = item;
		this.data = new_data;
		this.length = this.length + 1;
	}

	delete_at(index: number) {
		this.indexValidator(index);
		let new_data: T[] = [];
		let new_length: number = 0;
		for (let i = 0; i < this.length; i++) {
			if (i != index) {
				new_data[new_length] = this.data[i];
				new_length += 1;
			}
		}
		this.data = new_data;
		this.length = new_length;
	}

	find(item: T) {
		let found_item: number | undefined;

		for (let i = 0; i < this.length; i++) {
			if (this.data[i] === item) {
				found_item = i;
				break;
			}
		}
		return found_item;
	}
}
