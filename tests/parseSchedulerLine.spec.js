import test  from 'ava';
import parseSchedulerLine from '../helpers/parseSchedulerLine.js';

test('should parse the running scheduler status line correct', t => {
  t.is(parseSchedulerLine('scheduler is running'), 'running');
});

test('should parse the not running scheduler status line correct', t => {
  t.is(parseSchedulerLine('scheduler is not running'), 'not running');
});

test('should throw on incorrect input', t => {
  t.throws(() => parseSchedulerLine('some random string'));
  t.throws(() => parseSchedulerLine(''));
  t.throws(() => parseSchedulerLine());
});