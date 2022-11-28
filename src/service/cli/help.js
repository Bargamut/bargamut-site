const fs = require('fs');

/** Запустить скрипт */
const run = () => {
	console.info('запустите команду с параметрами --version или --generate [N], где N - необязательное число');
};

module.exports = {
	name: '--help',
	run,
};