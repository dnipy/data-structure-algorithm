export class _Array<T> {
	protected length: number = 0;
	protected data: { [key: number]: T } = [];

	constructor(initial_value?: T[]) {
		this.data = initial_value ? [...initial_value] : [];
		this.length = initial_value?.length || 0;
	}

	len() {
		return this.length;
	}

	traverse(callback?: (item: T, index: number) => unknown | T) {
		if (!callback) return this.data;
		let new_data: { [key: number]: unknown | T } = [];
		for (let i = 0; i < this.length; i++) {
			new_data[i] = callback(this.data[i], i);
		}
		return new_data;
	}

	get(index: number) {
		if (index > this.length) throw Error('out of bound');
		return this.data[index];
	}

	push_start(item: T) {
		let new_data: { [key: number]: T } = [item];
		for (let i = 0; i < this.length; i++) {
			new_data[i + 1] = this.data[i];
		}
		this.data = new_data;
		this.length = this.length + 1;
	}

	push_end(item: T) {
		let new_data: { [key: number]: T } = this.data;
		new_data[this.length] = item;
		this.data = new_data;
		this.length = this.length + 1;
	}

	delete_at(index: number) {
		if (index > this.length) throw Error('out of bound');
		let new_data: { [key: number]: T } = [];
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
			if (this.data[i] == item) {
				found_item = i;
				break;
			}
		}
		return found_item;
	}
}
