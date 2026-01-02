import { _Stack } from './implement';

function main() {
	const s = new _Stack<number>();

	console.log('empty?', s.isEmpty());

	s.push(1);
	s.push(2);
	s.push(3);

	console.log('top:', s.peek());
	console.log('len:', s.len());

	console.log('pop:', s.pop());
	console.log('top after pop:', s.peek());
	console.log('empty?', s.isEmpty());

	s.pop();
	s.pop();

	console.log('empty after pop all?', s.isEmpty());
}
main();
