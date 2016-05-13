module.exports = function() {
	'use strict';

	return {
		files: [
			'bin/*.js',
			'filters/**/*.js',
			'lib/*.js',
			'tests/server/mocks/*.js',
			'tests/helpers/*.js'
		],
		tests: [
			'tests/server/core/*.js',
			'tests/server/filters/*.js'
		],
		env: {
			type: 'node'
		},
		debug: true
	};
};
