class _Node<T> {
	readonly value: T;
	prev: _Node<T> | null = null;
	next: _Node<T> | null = null;

	constructor(value: T, next?: _Node<T>, prev?: _Node<T>) {
		this.value = value;
		this.next = next || null;
		this.prev = prev || null;
	}
}

export class _LikedListDoubly<T> {
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
		// add to start
		const node = new _Node(value);
		this.length += 1;

		if (this.head) {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		} else {
			this.head = node;
			this.tail = node;
		}
	}

	push_back(value: T) {
		// add to end
		const node = new _Node(value);
		this.length += 1;

		if (this.tail) {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		} else {
			this.head = node;
			this.tail = node;
		}
	}

	pop_front() {
		if (!this.head) return null;

		const removed = this.head;

		this.head = this.head.next;
		if (this.head) this.head.prev = null;
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
			this.tail = removed.prev;
			if (this.tail) this.tail.next = null;
		}

		this.length--;
		return removed.value;
	}
}
