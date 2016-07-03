const electron = require('electron');
const path = require('path');
const minimist = require('minimist');
const usage = require('./usage');
const ipcMain = electron.ipcMain;

const argv = minimist(process.argv.slice(2), {
  boolean: true
});

if (argv.help) {
  console.error(usage);
  process.exit(0);
}

let argument = argv._[0];
if (!argument) {
  console.error('Error: No filename specified!');
  process.exit(1);
}
argument = path.resolve(argument);

global.qmlwebViewer = {
  argument
};

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 20,
    height: 20,
    fullscreen: argv.fullscreen
  });
  mainWindow.setMenu(null);
  if (argv.maximized) {
    mainWindow.maximize();
  }
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  if (argv.debug) {
    mainWindow.webContents.openDevTools({ detach: true });
  }
  mainWindow.on('closed', () => { mainWindow = null });
}

ipcMain.on('console', (event, arg) => {
  try {
    console[arg.method].apply(console, arg.args);
  } catch (e) {}
});

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});
