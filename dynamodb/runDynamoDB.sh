#!/usr/bin/env bash
echo 'running Local DynamoDB Service'
java -Djava.library.path=. -jar dynamodb/DynamoDBLocal.jar