const electron = require('electron');

const argument = process.argv[process.argv.length - 1];
if (argument.substr(-4) !== '.qml') {
  console.error(new Error('you should specify a *.qml file.'));
  process.exit(0);
}

global.qmlwebViewer = {
  argument
};

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 20, height: 20});
  mainWindow.setMenu(null);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => { mainWindow = null });
}

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
