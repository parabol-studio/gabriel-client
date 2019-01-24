'use strict';

/****************************************************************************
* Function getLocalStorage()
* This function is used to get all values from localStorage and return them
* for use in the collect() function.
*****************************************************************************/
module.exports = function getLocalStorage() {
  const values = {};
  const keys = Object.keys(localStorage);
  let i = keys.length;

  while (i--) {
    if (localStorage.getItem(keys[i]).charAt(0) === '{' || localStorage.getItem(keys[i]).charAt(0) === '[')
      values[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
    else
      values[keys[i]] = localStorage.getItem(keys[i]);
  }
  
  return values;
};
