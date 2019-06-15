// Checks that the localisation (l10n) files do not contain untranslated strings, to be used after `npm run i18n:generate` which generates the strings

const fs = require('fs');
const path = require('path');
const config = require('./i18next-scanner.config');

const root = path.join(__dirname, '..');
const translationPath = config.options.resource.savePath;

// Get the full set of translated files
let resourceFiles = [];
for (let lng of config.options.lngs) {
	let file = translationPath;
	file = file.replace(`${config.options.interpolation.prefix}lng${config.options.interpolation.suffix}`, lng);
	file = file.replace(`${config.options.interpolation.prefix}ns${config.options.interpolation.suffix}`, config.options.defaultNs);
	file = path.join(root, file);
	resourceFiles.push(file);
}

function objectContains(obj, str) {
	for (let property in obj) {
		if (!obj.hasOwnProperty(property)) {
			continue;
		}

		if (typeof obj[property] === 'object') {
			return objectContains(obj[property], str);
		}
		else if (typeof obj[property] !== 'string') {
			continue;
		}

		if (obj[property] === str) {
			return true;
		}
	}

	return false;
}


for (let file of resourceFiles) {
	// Do the translation files exist?
	if (!fs.existsSync(file)) {
		console.error(`l10n check error: missing translation files ${file}`);
		process.exit(1);
	}

	// Do the files contain any missing translations?
	const content = require(file);
	if (objectContains(content, config.options.defaultValue)) {
		console.error(`l10n check error: untranslated string found in ${file}`);
		process.exit(1);
	}
}

console.log(`l10n check: ${resourceFiles.length} translation file(s) scanned`)
process.exit(0);