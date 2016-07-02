#!/usr/bin/env node

const child_process = require('child_process');
const path = require('path');

const electron = path.join(__dirname, '..', '.bin', 'electron');
child_process.execFileSync(electron, [__dirname, path.resolve(process.argv[2] || '')]);
