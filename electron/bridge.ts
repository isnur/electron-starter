import { contextBridge, ipcRenderer } from 'electron'

export const api = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can accessed using `window.Main.sayHello`
   */
  send(sql: string) {
    return new Promise((resolve) => {
      ipcRenderer.once('asynchronous-reply', (_, arg) => {
        resolve(arg);
        // eslint-disable-next-line no-console
        console.log(arg);
      });
      ipcRenderer.send('asynchronous-message', sql);
    });
  },

  /**
   * Provide an easier way to listen to events
   */
   on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  },
  /**
   * Provide an easier way to listen to events
   */
  once: (channel: string, callback: Function) => {
    ipcRenderer.once(channel, (_, data) => callback(data))
  }
}

contextBridge.exposeInMainWorld('Main', api)
