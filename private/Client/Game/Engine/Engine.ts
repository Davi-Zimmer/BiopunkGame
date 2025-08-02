//import { WEBGL } from "p5"
import { p5 } from "../../Types/P5.js"
import Game from "../Game.js"

import { createRenderer } from "../P5/P5Funcs.js"
import EventManager from "./Events/EventManager.js"

class _Engine {

    private static Instance: _Engine

    public static GetInstance(){

        if( !this.Instance ) this.Instance = new _Engine()
        return this.Instance
    }

    public game = new Game()

    private constructor() {

        this.configureP5()

        this.setup()
    }

    private configureP5() {
        
        createRenderer( (s) => this.configCanvas(s), (s) => {
            this.game.update(s)
            this.systemUpdate()
        } )
        
    }

    private configCanvas( s: p5 ){
        
        s.createCanvas( innerWidth, innerHeight, s.WEBGL)

        EventManager.resizeEvent( () => {
            s.resizeCanvas( innerWidth, innerHeight, true )
        })

        EventManager.addEvents( s.canvas )

        s.canvas.setAttribute('tabindex', '1')

    }

    private systemUpdate(){
        EventManager.executeKeyPressed()
    }

    private setup(){
   
    }
   


}


const Engine = _Engine.GetInstance()

export default Engine

// @ts-ignore
window.EventManager = EventManager
// @ts-ignore
window.Engine = Engine