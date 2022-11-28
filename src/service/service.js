'use strict';

const { cli } = require('./cli');
const { DEFAULT_COMMAND, USER_ARGV_INDEX, ExitCode } = require('../constants');

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [userCommand] = userArguments;

const cliUserCommand = cli[userCommand];

if (!userArguments.length || !cliUserCommand) {
	cli[DEFAULT_COMMAND].run();

	process.exit(ExitCode.success);
}

cliUserCommand.run(userArguments.slice(1));