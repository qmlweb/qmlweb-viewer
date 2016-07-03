'use strict';

const electron = require('electron');

const _console = console;
console = {};
[ 'assert', 'count', 'dir', 'dirxml', 'error',
  'group', 'groupCollapsed', 'groupEnd',
  'info', 'log', 'profile', 'profileEnd', 'table',
  'time', 'timeEnd', 'timeStamp', 'trace', 'warn'
].forEach(method => {
  console[method] = function(...args) {
    _console[method].apply(_console, args);
    try {
      electron.ipcRenderer.send('console', {method: method, args: args});
    } catch (e) {}
   };
});
