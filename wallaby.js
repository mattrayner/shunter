module.exports = function() {
	'use strict';

	return {
		files: [
			'bin/*.js',
			'lib/*.js',
			'tests/server/mocks/*.js'
		],
		tests: [
			'tests/server/core/*.js'
		],
		env: {
			type: 'node'
		},
		debug: true
	};
};
