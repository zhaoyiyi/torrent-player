const { BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const app = require('./server');

try {
  require('electron-reloader')(module);
} catch (err) {}

let window;

const entryUrl = url.format({
  pathname: path.join(__dirname, 'dist', 'index.html'),
  protocol: 'file:',
  slashes: true,
});

app.on('ready', () => {
  window = new BrowserWindow({ width: 1000, height: 800 });
  window.loadURL(entryUrl);
});