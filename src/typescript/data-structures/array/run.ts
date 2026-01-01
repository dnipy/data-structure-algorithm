import { _Array } from './implement';
function main() {
	const x = new _Array(['amir']);
	console.log('- all :');

	console.log(x.traverse(), 'length :', x.len());
	console.log('- add ali to end :');
	x.push_end('ali');

	console.log('- add hi to start :');
	x.push_start('hi');
	console.log(x.traverse(), 'length :', x.len());

	console.log('- add goozo to end :');
	x.push_end('goozo');
	console.log(x.traverse(), 'length :', x.len());

	const amir_index = x.find('amir');
	console.log(`-amir index : ${amir_index}`);

	const ali_index = x.find('ali');
	console.log(`-ali index : ${ali_index}`);

	console.log(`-remove amir`);
	x.delete_at(amir_index!);

	const new_amir_index = x.find('amir');
	console.log(`-amir index : ${new_amir_index}`);

	const new_ali_index = x.find('ali');
	console.log(`-ali index : ${new_ali_index}`);
	console.log(x.traverse(), 'length :', x.len());
	console.log(x.traverse((d, i) => `${i} - ${d}`));
}
main();
