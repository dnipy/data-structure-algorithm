import { _Queue } from './implement';

function main() {
	const q = new _Queue<number>();

	console.log('isEmpty:', q.isEmpty());

	console.log('\n-- enqueue 1, 2, 3 --');
	q.enqueue(1);
	q.enqueue(2);
	q.enqueue(3);

	console.log('peek (front):', q.peek());
	console.log('length:', q.len());
	console.log('isEmpty:', q.isEmpty());

	console.log('\n-- dequeue --');
	console.log('dequeued:', q.dequeue());

	console.log('peek after dequeue:', q.peek());
	console.log('length:', q.len());

	console.log('\n-- dequeue all --');
	console.log('dequeued:', q.dequeue());
	console.log('dequeued:', q.dequeue());

	console.log('isEmpty after all:', q.isEmpty());
}

main();
