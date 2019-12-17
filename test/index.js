const path  = require('path');
const Mocha = require('mocha');
const glob = require('glob');

exports.run = function run(testsRoot, cb) {

	const mocha = new Mocha({
		ui: 'tdd'
	});
	mocha.useColors(true);

	glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
		if (err) {
			return cb(err);
		}

		files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));

		try {
			// Run the mocha test
			mocha.run(failures => {
				cb(null, failures);
			});
		} catch (err) {
			console.error(err);
			cb(err);
		}
	});
}