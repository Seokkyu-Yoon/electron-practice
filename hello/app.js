const path = require('path');
const { app, BrowserWindow } = require('electron');

const viewPath = path.join(__dirname, 'views');
const mainView = path.join(viewPath, 'main.html');

const mainConfig = {
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: true,
  },
};

const frames = {
  main: {
    config: mainConfig,
    view: mainView,
  },
};

function createFrame(frameName) {
  const { config, view } = frames[frameName];
  const win = new BrowserWindow(config);
  win.loadFile(view);
  // win.webContents.openDevTools();
}

app.whenReady().then(() => createFrame('main'));
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('active', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createFrame('main');
  }
});
