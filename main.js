const { app, BrowserWindow } = require('electron');
let mainWin;

function createWindow() {
    mainWin = new BrowserWindow({
        width: 540,
        height: 650,
        minWidth: 540,
        maxWidth: 540,
        minHeight: 650,
        maxHeight: 650,
        resizable: false,
        frame: false,                    // 无边框
        transparent: false,
        backgroundColor: '#1a1a22',
        title: "艾莎计算器",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    
    mainWin.loadFile('index.html');
    mainWin.setMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
