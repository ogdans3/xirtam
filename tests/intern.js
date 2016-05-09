define({
	// Unit test suite(s) to run in each browser
	suites: [ "tests/unit/matrixTest" /* 'myPackage/tests/foo', 'myPackage/tests/bar' */ ],

	// A regular expression matching URLs to files that should not be included in code coverage analysis. Set to `true`
	// to completely disable code coverage.
	excludeInstrumentation: /^(?:tests|node_modules)\//
});
