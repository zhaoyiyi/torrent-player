const { app, ipcMain } = require('electron');
const { search } = require('./search');
const { play } = require('./play');

ipcMain.on('search', async ({ sender }, { source, searchText }) => {
  sender.send('search-result', await search(source, { keyword: searchText }));
});

ipcMain.on('select-file', (_, { link }) => {
  play(link)
});

module.exports = app;
