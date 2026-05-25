const { app, BrowserWindow } = require('electron');
let mainWin;

function createWindow() {
    mainWin = new BrowserWindow({
        width: 540,
        height: 680,
        minWidth: 540,
        maxWidth: 540,
        minHeight: 680,
        maxHeight: 680,
        resizable: false,
        frame: true,                    // 开启系统原生标题栏
        titleBarStyle: 'default',
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
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
