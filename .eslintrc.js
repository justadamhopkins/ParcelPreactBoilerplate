module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['standard-preact', 'airbnb'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	settings: {
		react: {
			pragma: 'h',
		},
	},
	plugins: ['react'],
	rules: {
		'indent': [2, 'tab'],
		'no-tabs': 0,
	},
};
