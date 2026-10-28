export class _Stack<T> {
	protected length: number = 0;
	protected data: { [key: number]: T } = [];

	constructor(initial_value?: T[]) {
		this.data = initial_value ? [...initial_value] : [];
		this.length = initial_value?.length || 0;
	}

	push(item: T) {
		let new_data: { [key: number]: T } = this.data;
		new_data[this.length] = item;
		this.data = new_data;
		this.length = this.length + 1;
	}

	peek() {
		if (this.isEmpty()) throw new Error('stack is empty');
		else {
			return this.data[this.length - 1];
		}
	}

	pop() {
		if (this.isEmpty()) throw new Error('stack is empty');
		const item = this.peek();
		this.length = this.length - 1;
		delete this.data[this.length];
		return item;
	}

	len() {
		return this.length;
	}

	isEmpty() {
		return this.length < 1;
	}
}
