import { p5 } from "../../Types/P5.js"

import { createRenderer } from "../P5/P5Funcs.js"
import EventManager from "./EventManager.js"

class _Engine {

    private static Instance: _Engine

    public static GetInstance(){

        if( !this.Instance ) this.Instance = new _Engine
        return this.Instance
    }

    private constructor() {

        this.configureP5()

        this.setup()
    }


    private configureP5() {
        
        createRenderer( (s) => this.configCanvas(s), (s) => {
            this.update(s)
            this.systemUpdate()
        } )
        
    }

    private configCanvas( s: p5 ){
        
        s.resizeCanvas( innerWidth, innerHeight, false )
        s.background( 0 )

        EventManager.addEvents( s.canvas )

        s.canvas.setAttribute('tabindex', '1')

    }

    private systemUpdate(){
        EventManager.executeKeyPressed()
    }


    private setup(){
   
    }


    private update( s: p5 ) {

        s.arc( 50, 50, 50, 50, 0, Math.PI * 2 )


    }
    


}


const Engine = _Engine.GetInstance()

export default Engine

// @ts-ignore
window.a = EventManager
console.log('AAAAAAAAAAAAAAAAAAAAAAA')