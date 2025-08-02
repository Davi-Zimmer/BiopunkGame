import express from "express"
import getDirname from "./Util/Dirname.js"
import path from 'path'

const app = express()

app.use( express.json() )

export function configServer(){
    
    const dirname = getDirname()
    
    const lastFolder = '../'
    
    const root = path.join( dirname, lastFolder, lastFolder )
    
    const htmlPage =  path.join( root, 'Client', 'Page', 'Game.html' )

    const clientPath = path.join( root, 'Client' )
    
    const clientScripts = path.join( clientPath, 'ClientScripts' )

    const p5 = path.join( root, lastFolder, 'node_modules', 'p5', 'lib') //  'p5.min.js' 

    const game = path.join( clientPath, 'Game' )

    const types = path.join( clientPath, 'Types' )

    app.use('/P5Lib', express.static( p5 ) )
    // app.use( '/ClientScripts', express.static( clientScripts ) )
    // app.use( '/Game', express.static( game ) )
    // app.use( '/Types', express.static( types ) )

    app.use( '/', express.static( clientPath ) )

    console.log( clientPath )
    app.get( '/', ( req, res ) => res.sendFile( htmlPage ) )


    // app.use( 'P5', express.static( p5 ) )
    // app.get('', ( req, res ) => res.sendFile( p5 )  )

    console.log( p5 )
}

export function startServer(){
    const PORT = 5000
    const HOST = 'localhost'

    const server = `http://${HOST}:${PORT}`

    app.listen( PORT, HOST,  () =>  console.log( server ) )

    return server
    
}