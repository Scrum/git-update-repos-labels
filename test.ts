import test from 'ava';
import gitUpdateReposLabels from './index';

test('pkg is function', t => {
	t.is(typeof gitUpdateReposLabels, 'function');
});