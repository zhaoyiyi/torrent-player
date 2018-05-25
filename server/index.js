const { app, ipcMain } = require('electron');
const { search } = require('./search');

ipcMain.on('search', async ({ sender }, { source, searchText }) => {
  sender.send('search-result', search(source, { keyword: searchText }));
});

module.exports = app;
