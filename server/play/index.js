const { BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let window;

exports.play = link => {
  window = new BrowserWindow({
    height: 1000,
    width: 1000,
  });

  window.loadURL(
    url.format({
      pathname: path.resolve(__dirname, 'player.html'),
      protocol: 'file:',
      slashes: true,
    })
  );

  window.webContents.on('dom-ready', () => {
    window.webContents.send('play', link);
  })
};
