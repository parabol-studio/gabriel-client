[![https://nodei.co/npm/gabriel-client.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/gabriel-client.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/gabriel-client)

[![Node version](https://img.shields.io/node/v/gabriel-client.svg?style=flat)](http://nodejs.org/download/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)


# Gabriel - client

This package accopanies the `Gabriel - server` package.

This tool is used as a QA reporting tool which helps QA communicate context to developers by reporting the applications localStorage values, cookies, console logs and any custom data you wish.

## Instalation

`npm i gabriel-client`

## Usage

Import the module to the file you wish to use with:

```
const gabriel = require('gabriel-server');
```
or

```
import * as gabriel from 'gabriel-client';
```


### Collect

To store reports, call the .store() function in your Node/Express application:

```
const report = gabriel.collect();
```

This will collect the nessesary information from your browser and return the object in the correct format to be passed to your Node/Express app running the `Gabriel - server` module by submitting a POST request to the `/gabriel/store` endpoint generated by the `Gabriel - server` store function.

To add custom data to the report, simply attach it to `report.data.some_custom_field` before sending it.