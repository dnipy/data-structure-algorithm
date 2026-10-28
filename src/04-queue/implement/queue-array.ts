import { _Array } from '../../01-array/implement';

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
		this.data.push_end(item);
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
