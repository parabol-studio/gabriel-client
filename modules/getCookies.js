'use strict';

/****************************************************************************
* Function getCookies()
* This function is used to collect the cookies stored in the browser and 
* return them for use in the report.
*****************************************************************************/
module.exports = function getCookies() {
  const pairs = document.cookie.split(';');
  const cookies = {};
  
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    cookies[(pair[0]+'').trim()] = unescape(pair[1]);
  }
  
  return cookies;
};
