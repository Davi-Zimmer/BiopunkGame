import { app, BrowserWindow } from 'electron'
import { configServer, startServer } from './Server.js'

const createWindowIn = ( path:string ) => {

    const window = new BrowserWindow({
        width: 600, 
        height: 400,
        resizable: true,
        webPreferences: {
                
        }
    })

    window.loadURL( path )

    return window
}


app.on( 'ready', () => {
    
    configServer()
    
    const url = startServer()
    
    const window = createWindowIn( url )
} )