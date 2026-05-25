const { app, BrowserWindow } = require('electron');
let mainWin;

function createWindow() {
    mainWin = new BrowserWindow({
        width: 520,
        height: 600,
        minWidth: 520,
        maxWidth: 520,
        minHeight: 600,
        maxHeight: 600,
        resizable: false,
        frame: false,           // 关键：去除窗口边框
        transparent: true,      // 推荐开启，配合下面CSS更干净
        backgroundColor: '#00000000', // 透明背景
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
app.on('window-all-closed', () => app.quit());