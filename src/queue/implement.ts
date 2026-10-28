import { _Array } from '../array/implement';

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

/*
    queue base on implemented _Array
    its not recomended bcz of the time complexity issue on pop() 
    its not o(1)
*/
export class _QueueArray<T> {
	private data: _Array<T> = new _Array([]);

	constructor(init_value?: T[]) {
		this.data = new _Array(init_value || []);
	}

	push(item: T) {
		this.data.push_start(item);
	}

	pop(): T {
		const last_item = this.peek();
		this.data.delete_at(0);
		return last_item;
	}

	peek(): T {
		return this.data.get(0);
	}

	isEmpty() {
		return this.len() == 0;
	}

	len() {
		return this.data.len();
	}
}
