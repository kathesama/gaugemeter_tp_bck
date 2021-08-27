#!/bin/bash

# Change --db cleanCode to new database name: --db newDatabaseName.
mongorestore --db gaugemetertp ./data/dump-db/gaugemetertp --drop --authenticationDatabase admin -u root -p pass12345
