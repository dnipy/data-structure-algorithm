export class _Queue<T> {
	protected length: number = 0;
	protected data: { [key: number]: T } = [];

	constructor(initial_value?: T[]) {
		this.data = initial_value ? [...initial_value] : [];
		this.length = initial_value?.length || 0;
	}

	enqueue(item: T) {
		let new_data: { [key: number]: T } = this.data;
		new_data[this.length] = item;
		this.data = new_data;
		this.length = this.length + 1;
	}

	dequeue() {
		if (this.isEmpty()) throw new Error('stack is empty');
		let new_data: { [key: number]: T } = this.data;
		const item = this.peek();

		this.length = this.length - 1;
		for (let i = 0; i < this.length; i++) {
			new_data[i] = this.data[i + 1];
		}
		this.data = new_data;
		return item;
	}

	peek() {
		if (this.isEmpty()) throw new Error('stack is empty');
		else {
			return this.data[0];
		}
	}

	len() {
		return this.length;
	}

	isEmpty() {
		return this.length < 1;
	}
}
