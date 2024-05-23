const { contextBridge, ipcRenderer } = require('electron');
const rpc = require('./utils/rpc');

contextBridge.exposeInMainWorld('rpc', {
  setActivity: (activity) => ipcRenderer.send('set-activity', activity),
  clearActivity: () => ipcRenderer.send('clear-activity')
});