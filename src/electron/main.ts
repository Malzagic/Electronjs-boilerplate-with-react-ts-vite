import { app, BrowserWindow } from "electron";
import path from "path";
import { getPreloadPath } from "./pathResolver.js";
import { isDev } from "./util.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    height: 900,
    width: 1400,
    webPreferences: {
      preload: getPreloadPath(),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
});
