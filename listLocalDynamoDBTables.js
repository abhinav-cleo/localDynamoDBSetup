'use strict';

var AWS = require('aws-sdk');
var dyn = new AWS.DynamoDB({endpoint: new AWS.Endpoint('http://localhost:8000')});

dyn.listTables(function (err, data) {
    console.log('listTables', err, data);
});