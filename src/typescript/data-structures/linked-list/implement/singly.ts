class _Node<T> {
	readonly value: T;
	next: _Node<T> | null;

	constructor(value: T, next?: _Node<T>) {
		this.value = value;
		this.next = next || null;
	}
}

export class _SinglyLikedList<T> {
	length: number = 0;
	head: _Node<T> | null = null;
	tail: _Node<T> | null = null;

	constructor(items?: T[]) {
		if (items && Array.isArray(items) && items.length > 0) {
			this.length = items.length;

			for (let item of items) {
				const node = new _Node(item);
				if (!this.head) {
					this.head = node;
					this.tail = node;
				} else {
					this.tail!.next = node;
					this.tail = node;
				}
			}
		}
	}

	len() {
		return this.length;
	}
	peek_front() {
		return this.head;
	}
	peek_back() {
		return this.tail;
	}

	traverse(callback?: (v: T, idx: number) => unknown) {
		let current = this.head;
		let index = 0;
		const results: T[] = [];

		while (current) {
			if (callback) callback(current.value, index);
			else results.push(current.value);

			current = current.next;
			index++;
		}

		if (!callback) return results;
	}

	find(value: T): _Node<T> | null {
		let current = this.head;

		while (current) {
			if (current.value == value) return current;
			else current = current.next;
		}
		return null;
	}

	push_front(value: T) {
		const node = new _Node(value, this.length > 0 ? this.head! : undefined);
		this.head = node;
		this.tail = this.tail || node;
		this.length++;
	}
	push_back(value: T) {
		const node = new _Node(value);
		if (this.tail) {
			this.tail.next = node;
			this.tail = node;
		} else {
			this.head = node;
			this.tail = node;
		}
		this.length += 1;
	}

	pop_front() {
		if (!this.head) return null;

		const removed = this.head;

		this.head = this.head.next;
		this.length -= 1;

		if (!this.head) this.tail = null;
		return removed;
	}
	pop_back() {
		if (!this.tail) return null;

		const removed = this.tail;

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			let current = this.head;
			while (current!.next !== this.tail) {
				current = current!.next;
			}
			current!.next = null;
			this.tail = current;
		}

		this.length--;
		return removed.value;
	}
}
