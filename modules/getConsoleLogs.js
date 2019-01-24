'use strict';

/****************************************************************************
* Function getConsoleLogs()
* This function is used to collect the contents of the console.
*****************************************************************************/
module.exports = function getConsoleLogs() {
  console.stdlog = console.log.bind(console);
  console.logs = [];

  console.log = (log) => {
    console.logs.push(log);
    console.stdlog.apply(console, arguments);
  };
};
