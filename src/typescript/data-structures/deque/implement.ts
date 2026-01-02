export class _Deque<T> {
	protected length: number = 0;
	protected data: { [key: number]: T } = [];

	constructor(initial_value?: T[]) {
		this.data = initial_value ? [...initial_value] : [];
		this.length = initial_value?.length || 0;
	}

	len() {
		return this.length;
	}

	private get(index: number) {
		if (index > this.length) throw Error('out of bound');
		return this.data[index];
	}

	private delete_at(index: number) {
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

	pop_front() {
		if (this.isEmpty()) throw new Error('deque is empty');
		else {
			const item = this.peek_front();
			this.delete_at(0);
			return item;
		}
	}

	pop_back() {
		if (this.isEmpty()) throw new Error('deque is empty');
		else {
			const item = this.peek_back();
			this.delete_at(this.length - 1);
			return item;
		}
	}

	peek_front() {
		if (this.isEmpty()) throw new Error('deque is empty');
		else return this.get(0);
	}

	peek_back() {
		if (this.isEmpty()) throw new Error('deque is empty');
		else return this.get(this.length - 1);
	}

	push_front(item: T) {
		let new_data: { [key: number]: T } = [item];
		for (let i = 0; i < this.length; i++) {
			new_data[i + 1] = this.data[i];
		}
		this.data = new_data;
		this.length = this.length + 1;
	}

	push_back(item: T) {
		let new_data: { [key: number]: T } = this.data;
		new_data[this.length] = item;
		this.data = new_data;
		this.length = this.length + 1;
	}

	isEmpty() {
		return this.length < 1;
	}
}
