import { _SinglyLikedList } from './implement/';

function singly() {
	const list = new _SinglyLikedList<number>([1, 2, 3]);
	console.log('Initial list (traverse):', list.traverse());
	console.log('Length:', list.len());
	console.log('Peek front:', list.peek_front()?.value);
	console.log('Peek back:', list.peek_back()?.value);

	console.log('\n--- push_front 0 ---');
	list.push_front(0);
	console.log(list.traverse());
	console.log('Length:', list.len());

	console.log('\n--- push_back 4 ---');
	list.push_back(4);
	console.log(list.traverse());
	console.log('Length:', list.len());

	console.log('\n--- find 2 ---');
	const node2 = list.find(2);
	console.log('Found node:', node2?.value);

	console.log('\n--- pop_front ---');
	const popFront = list.pop_front();
	console.log('Removed value:', popFront);
	console.log(list.traverse());
	console.log('Length:', list.len());

	console.log('\n--- pop_back ---');
	const popBack = list.pop_back();
	console.log('Removed value:', popBack);
	console.log(list.traverse());
	console.log('Length:', list.len());

	console.log('\n--- traverse with callback ---');
	list.traverse((v, i) => console.log(`Index ${i}: ${v}`));

	console.log('\n--- find non-existing 99 ---');
	console.log(list.find(99));

	console.log('\n--- final list ---');
	console.log(list.traverse());
}

singly();
