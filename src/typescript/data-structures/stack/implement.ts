import { _Array } from '../array/implement';

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

/*
    Stack base on implemented _Array
    its not recomended bcz of the time complexity issue on pop() 
    its not o(1)
*/
export class _StackArray<T> {
	private data: _Array<T> = new _Array([]);

	constructor(init_value?: T[]) {
		this.data = new _Array(init_value || []);
	}

	push(item: T) {
		this.data.push_end(item);
	}

	pop(): T {
		const last_item = this.peek();
		this.data.delete_at(this.data.len() - 1);
		return last_item;
	}

	peek(): T {
		return this.data.get(this.data.len() - 1);
	}

	isEmpty() {
		return this.len() == 0;
	}

	len() {
		return this.data.len();
	}
}
