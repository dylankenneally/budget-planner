module.exports = {
	input: [
		'src/**/*.{js,jsx}',
		'!src/**/*.test.{js,jsx}',
		'!**/node_modules/**',
	],
	output: './',
	options: {
		debug: process.env.NODE_ENV === 'development',
		func: {
			list: ['t'],
			extensions: ['.js', '.jsx']
		},
		lngs: ['en-US'],
		ns: [
			'translation'
		],
		defaultLng: 'en-US',
		defaultNs: 'translation',
		defaultValue: '__STRING_NOT_TRANSLATED__',
		resource: {
			loadPath: 'public/resources/locale/{{lng}}/{{ns}}.json',
			savePath: 'public/resources/locale/{{lng}}/{{ns}}.json',
			jsonIndent: 2,
			lineEnding: '\n'
		},
		interpolation: {
			prefix: '{{',
			suffix: '}}'
		},
		removeUnusedKeys: true
	}
};
