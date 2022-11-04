import test  from 'ava';
import parseDeviceLines from '../helpers/parseDeviceLines.js';

test('should parse a device line succesfuly', t => {
  t.deepEqual(parseDeviceLines('device for printer: printerPath'), { printer: 'printerPath'});
});