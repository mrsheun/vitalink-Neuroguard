const {app,BrowserWindow,shell}=require('electron');
const path=require('node:path');
function createWindow(){const win=new BrowserWindow({width:1350,height:900,minWidth:900,minHeight:650,backgroundColor:'#f3f7fa',webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true,webSecurity:true}});win.removeMenu();win.webContents.setWindowOpenHandler(({url})=>{if(url.startsWith('https://'))shell.openExternal(url);return {action:'deny'};});win.webContents.on('will-navigate',(event,url)=>{if(!url.startsWith('file://'))event.preventDefault();});win.loadFile('index.html');}
app.whenReady().then(createWindow);app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});
