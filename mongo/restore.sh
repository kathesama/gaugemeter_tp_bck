#!/bin/bash

# Change --db cleanCode to new database name: --db newDatabaseName.
mongorestore --db gaugemeterTp ./data/dump-db/cleanCode --drop --authenticationDatabase admin -u root -p pass12345
