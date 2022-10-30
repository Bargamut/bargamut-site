'use strict';

const generate = require('./generate');
const help = require('./help');
const version = require('./version');

const cli = {
	[generate.name]: generate,
	[help.name]: help,
	[version.name]: version,
};

module.exports = {
	cli,
};