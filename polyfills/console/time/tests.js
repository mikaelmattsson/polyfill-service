/* eslint-env mocha, browser*/
/* global proclaim, it */

describe('console', function () {

	it('time()', function () {
		proclaim.doesNotThrow(function () {
			console.time();
		});
	});

});
