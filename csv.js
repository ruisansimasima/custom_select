export let csvToJson = function(csvStr, userOptions) {
	if (typeof csvStr !== 'string') return null;

	let options = { header : 0, columnName : [], ignoreBlankLine : true };

	if (userOptions) {
		if (userOptions.header) options.header = userOptions.header;
		if (userOptions.columnName) options.columnName = userOptions.columnName;
	}

	let rows = csvStr.split('\n'),
	    json = [], line = [], row = '', data = {},
	    j, len2;

	for (let i = 0; i < rows.length; i++) {
		if (i + 1 <= options.header) continue;
		if (options.ignoreBlankLine && rows[i] === '') continue;

		line = rows[i].split(',');

		if (options.columnName.length > 0) {
			data = {};
			for (j = 0, len2 = options.columnName.length; j < len2; j++) {
				if (typeof line[j] !== 'undefined') {
					row = line[j];
					row = row.replace(/^"(.+)?"$/, '$1');
				} else {
					row = null;
				}

				data[options.columnName[j]] = row;
			}
			json.push(data);
		} else {
			json.push(line);
		}
	}

	return json;
};
