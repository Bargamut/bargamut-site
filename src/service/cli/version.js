'use strict';

const {version} = require(`../../../package.json`);

const printVersion = () => console.info(version);

module.exports = {
	name: '--version',
	run: () => printVersion(),
};
