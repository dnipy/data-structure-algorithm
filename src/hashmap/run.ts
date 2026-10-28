import { _HashMap } from './implement';

function main() {
	const map = new _HashMap<number>();
	console.log('--- _HashMap Showcase ---');

	console.log('Has key "a"?', map.has('a'));

	map.put('a', 10);
	map.put('b', 20);
	map.put('c', 30);

	console.log('Get "b":', map.get('b'));
	console.log('Has key "a"?', map.has('a'));

	console.log('Keys:', map.keys());
	console.log('Values:', map.values());
	console.log('Entries:', map.entries());

	map.delete('b');

	console.log('After delete "b":');
	console.log('Keys:', map.keys());
	console.log('Values:', map.values());
	console.log('Has key "b"?', map.has('b'));
}

main();
