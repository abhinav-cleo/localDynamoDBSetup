'use strict'

const shell = require('shelljs');
//shell.exec(comandToExecute, {silent:true}).stdout;
//you need little improvisation
shell.exec('./dynamodb/stopDynamoDB.sh')