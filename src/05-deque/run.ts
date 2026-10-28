import { _Deque } from './implement';

function main() {
	const deque = new _Deque<number>();

	console.log('Is empty?', deque.isEmpty());

	deque.push_back(10);
	deque.push_front(5);
	deque.push_back(20);

	console.log('Length:', deque.len());
	console.log('Front:', deque.peek_front());
	console.log('Back:', deque.peek_back());

	console.log('Pop front:', deque.pop_front());
	console.log('Pop back:', deque.pop_back());
	console.log('Pop front:', deque.pop_front());

	console.log('Is empty now?', deque.isEmpty());
}

main();
