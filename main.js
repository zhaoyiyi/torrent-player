const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let window;

function createWindow() {
  window = new BrowserWindow({ width: 1000, height: 800 });

  window.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist', 'index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );

  try {
    require('electron-reloader')(module);
  } catch (err) {}
}

app.on('ready', createWindow);
