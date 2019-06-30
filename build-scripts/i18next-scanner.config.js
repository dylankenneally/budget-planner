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
		lngs: ['en'],
		ns: [
			'translation'
		],
		defaultLng: 'en',
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
		// NB: do not removed "unused", we translate some strings by ID on i18n being loaded, so it can't see them during generation - hence it thinks they are missing and removes them
		// removeUnusedKeys: true
	}
};
