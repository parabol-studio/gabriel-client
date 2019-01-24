'use strict';

const getLocalStorage = require('./modules/getLocalStorage');
const getConsoleLogs = require('./modules/getConsoleLogs');
const getCookies = require('./modules/getCookies');


getConsoleLogs();

/****************************************************************************
* Function collect()
* This function is used to gather data on the client side to be used in
* report.
*****************************************************************************/
function collect(data) {
  const localStorage = getLocalStorage();
  const cookies = getCookies();

  const report = {
    localstorage: localStorage,
    cookies: cookies,
    console: console.logs,
    timestamp: Date.now(),
    title: data.title,
    message: data.message,
    data: data
  };
  
  delete data.title;
  delete data.message;
  
  return report;
}

module.exports = {
  collect: collect
};
