// sensible linting config/rules, will help reduce bugs whilst not getting in the way

module.exports = {
	"parser": "babel-eslint",
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"react-app"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		// --------------------------------------------------------------------
		// Stylistic rules, only using ones that make sense for the purpose of developing code
		// --------------------------------------------------------------------
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],						// be consistent with the rest of the JS community, https://eslint.org/docs/rules/brace-style
		'comma-dangle': 'off',																// allow dangling comma's, it makes refactoring easier and there is no negative harms to the code from dangling commas, https://eslint.org/docs/rules/comma-dangle
		'dot-location': ['error', 'property'],												// have your properties easy to see as such, https://eslint.org/docs/rules/dot-location
		'eol-last': 'error',																// makes it easier for git diffs and file concats, https://eslint.org/docs/rules/eol-last
		'jsx-quotes': 'error',																// be consistent, https://eslint.org/docs/rules/jsx-quotes
		'max-lines-per-function': 'error',													// try keep functions small, https://eslint.org/docs/rules/max-lines-per-function
		'max-statements-per-line': ['error', { max: 1 }],									// makes code harder to debug. https://eslint.org/docs/rules/max-statements-per-line
		'no-extra-semi': 'error',															// disallow extra semi-colons (';;'), they generally mean you've not tidied up after refactoring, https://eslint.org/docs/rules/no-extra-semi
		'no-floating-decimal': 'error',														// let it local like a decimal, https://eslint.org/docs/rules/no-floating-decimal
		'no-lone-blocks': 'error',															// make code cleaner by removing pointless blocks, https://eslint.org/docs/rules/no-lone-blocks
		'no-trailing-spaces': 'error',	 													// this helps reduce `git diff` noise, plus is often the result of rushed refactoring, https://eslint.org/docs/rules/no-trailing-spaces
		'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],	// have consistent quotes, https://eslint.org/docs/rules/quotes
		'yoda': ['error', 'never'],															// just makes code harder to read, https://eslint.org/docs/rules/yoda
		"max-len": ["warn", { "code": 240 }],												// makes code harder for read, https://eslint.org/docs/rules/max-len

		// --------------------------------------------------------------------
		// Common errors / best practice rules
		// --------------------------------------------------------------------
		'accessor-pairs': 'warn',																// warn of get/set is not provided in pairs, https://eslint.org/docs/rules/accessor-pairs
		'array-callback-return': 'error',														// consistent returns will make the code easier to work with, https://eslint.org/docs/rules/array-callback-return
		'block-scoped-var': 'error',															// far too easy to have misshapes with `var`, https://eslint.org/docs/rules/block-scoped-var
		'complexity': 'error',																	// don't let you functions get too complex (Cyclomatic/number of paths), https://eslint.org/docs/rules/complexity
		'consistent-return': 2,																	// make it clear what your functions are doing, https://eslint.org/docs/rules/consistent-return
		'default-case': 'error',																// you probably do want default, https://eslint.org/docs/rules/default-case
		'eqeqeq': 'error', 																		// you probably didn't mean to use '==', // https://eslint.org/docs/rules/eqeqeq
		'guard-for-in': 'error',																// know what you're looping over, https://eslint.org/docs/rules/guard-for-in
		'handle-callback-err': 'error',															// if you are using Node.js callback patterns, handle the error, https://eslint.org/docs/rules/handle-callback-err
		'max-nested-callbacks': ['error', 4],													// max 4 callbacks, don't make things hard for yourself, https://eslint.org/docs/rules/max-nested-callbacks
		'no-alert': 'error',																	// lets not piss the user off, https://eslint.org/docs/rules/no-alert
		'no-caller': 'error',																	// arguments.caller / arguments.callee will be deprecated in future version of JS, already is out in strict mode, https://eslint.org/docs/rules/no-caller
		'no-catch-shadow': 'error',																// even in catch statements, shadows are shadows, https://eslint.org/docs/rules/no-catch-shadow
		'no-eq-null': 'error',																	// you probably didn't mean to use '==', https://eslint.org/docs/rules/no-eq-null
		'no-eval': 'error',																		// eval just leaves the door open to injection attacks, https://eslint.org/docs/rules/no-eval
		'no-extend-native': 'error',															// extending native objects is really confusing, especially in large code based, https://eslint.org/docs/rules/no-extend-native
		'no-extra-bind': 'error',																// if using bind, make sure it's clean, https://eslint.org/docs/rules/no-extra-bind
		'no-extra-label': 'error',																// it's either a loop, or it's not, https://eslint.org/docs/rules/no-extra-label
		'no-fallthrough': 'error',																// fallthrough in switch statements are usually a mistake, https://eslint.org/docs/rules/no-fallthrough
		'no-implicit-coercion': ['error', { 'boolean': false, number: true, string: false }],	// makes code harder to follow, https://eslint.org/docs/rules/no-implicit-coercion
		'no-implicit-globals': 'error',															// if you want it global, use `window.`, no-implicit-globals
		'no-implied-eval': 'error',																// eval just leaves the door open to injection attacks, https://eslint.org/docs/rules/no-implied-eval
		'no-iterator': 'error',																	// use ES6 iterators/generators instead, https://eslint.org/docs/rules/no-iterator
		'no-label-var': 'error',																// avoid confusion, https://eslint.org/docs/rules/no-label-var
		'no-labels': 'error',																	// labels make code harder to follow, https://eslint.org/docs/rules/no-labels
		'no-loop-func': 'error',																// the woes of `var`, https://eslint.org/docs/rules/no-loop-func
		'no-multi-str': 'error',																// use `\n`, https://eslint.org/docs/rules/no-multi-str
		'no-native-reassign': 'error',															// let native objects be what you expect them to be, https://eslint.org/docs/rules/no-native-reassign
		'no-new-func': 'error',																	// if you want a function, write one, https://eslint.org/docs/rules/no-new-func
		'no-new-require': 'error',																// make it clear what is being new'd, https://eslint.org/docs/rules/no-new-require
		'no-new-wrappers': 'error',																// you don't need new for primitive wrappers, https://eslint.org/docs/rules/no-new-wrappers
		'no-new': 'error',																		// you want your new to be stored in something, https://eslint.org/docs/rules/no-new
		'no-octal-escape': 'error',																// what is it, unicode, hex? https://eslint.org/docs/rules/no-octal-escape
		'no-param-reassign': 'error',															// let params be constant, https://eslint.org/docs/rules/no-param-reassign
		'no-path-concat': 'error',																// use the path lib instead, https://eslint.org/docs/rules/no-path-concat
		'no-proto': 'error',																	// deprecated since ES3, https://eslint.org/docs/rules/no-proto
		'no-restricted-globals': ['error', 'event'],											// leave restricted words out, except event, https://eslint.org/docs/rules/no-restricted-globals
		'no-restricted-syntax': ['error', 'WithStatement'],										// same deal as `no-with`, https://eslint.org/docs/rules/no-restricted-syntax
		'no-return-assign': ['error', 'always'],												// keeps code clean, https://eslint.org/docs/rules/no-return-assign
		'no-script-url': 'error',																// it's basically eval(), https://eslint.org/docs/rules/no-script-url
		'no-self-compare': 'error',																// it's pointless, https://eslint.org/docs/rules/no-self-compare
		'no-sequences': 'error',																// comma operator makes the code hard to read, https://eslint.org/docs/rules/no-sequences
		'no-shadow-restricted-names': 'error',													// leave restricted words out, https://eslint.org/docs/rules/no-shadow-restricted-names
		'no-shadow': 'error',																	// which var are you using? no-shadow
		'no-throw-literal': 'error',															// throw properly, https://eslint.org/docs/rules/no-throw-literal
		'no-unmodified-loop-condition': 'error',												// lets not get stuck in a loop, https://eslint.org/docs/rules/no-unmodified-loop-condition
		'no-unneeded-ternary': 'error',															// reduces complexity, https://eslint.org/docs/rules/no-unneeded-ternary
		'no-unused-expressions': 'error',														// pointless expressions, https://eslint.org/docs/rules/no-unused-expressions
		'no-use-before-define': ['error', 'nofunc'],											// declare stuff before you use it, https://eslint.org/docs/rules/no-use-before-define
		'no-useless-call': 'error',																// what are you calling/applying on? https://eslint.org/docs/rules/no-useless-call
		'no-useless-constructor': 'error',														// whats the point of your code? https://eslint.org/docs/rules/no-useless-constructor
		'no-var': 'error',																		// use let or const instead, https://eslint.org/docs/rules/no-var
		'no-void': 'warn',																		// warn only, maybe you do want to avoid side effects, https://eslint.org/docs/rules/no-void
		'no-warning-comments': 'warn',															// warn when these words are found in comments, https://eslint.org/docs/rules/no-warning-comments
		'no-with': 'error',																		// with is not needed in ES6, and clear as mud when it is used, https://eslint.org/docs/rules/no-with
		'quote-props': ['error', 'as-needed', { keywords: true, unnecessary: false }],			// forces the acknowledgement of keywords, https://eslint.org/docs/rules/quote-props
		'radix': 'error',																		// specify the radix for clarity
		'semi': ['error', 'always'],															// show where your statements end, https://eslint.org/docs/rules/semi
		'wrap-iife': ['error', 'inside'],														// IIFE clarity, https://eslint.org/docs/rules/wrap-iife
		"no-console": ["warn", { "allow": ["assert"] }],										// keep the console clear, you're using it for debugging aren't you? https://eslint.org/docs/rules/no-console

		// --------------------------------------------------------------------
		// React plug in rules
		// --------------------------------------------------------------------
		'react/jsx-filename-extension': 'error',	// not jsx code as such, https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
	},
	"settings": {
		"react": {
			"version": "15.0"
		}
	}
}