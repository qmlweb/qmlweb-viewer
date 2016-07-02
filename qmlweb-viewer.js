#!/usr/bin/env node

const electron = require('electron-prebuilt');
const child_process = require('child_process');

child_process.execFileSync(electron, [__dirname, process.argv[2]]);
