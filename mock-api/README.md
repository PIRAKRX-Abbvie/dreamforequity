This project is a mock API server to use with the web application.

# Mock API

The library [connect-api-mocker](https://github.com/muratcorlu/connect-api-mocker) is used for for the automatic routing. This library maps the url to the file system, and automatically returns the appropiate js or json file based on the HTTP method.

See here on how to setup the response folder structure: [https://github.com/muratcorlu/connect-api-mocker#directory-structure](https://github.com/muratcorlu/connect-api-mocker#directory-structure)

## File Types

If the file is json, it will return the contents of that file.

If the file is a js file, logic can be performed to determine a response. The reponse data can be manually created, pulled from determined json file, or generated using a mocking tool

## Mocking Tool

The tool we use for mocking data is [mocker-data-generator](https://www.npmjs.com/package/mocker-data-generator) which generates data based off of a schema.

Internally mocker-data-generator has many ways to generate the data. You can supply a single value, a list of values for it to pick from, or use another tool [faker](https://www.npmjs.com/package/faker).

## Commands

`npm start` - starts the mock server
