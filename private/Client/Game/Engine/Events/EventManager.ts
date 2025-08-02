import { KeyEvent } from "./KeyEvent.js"
import { KeyFunc, KeyHandlersInterface } from "../../../Types/KeyHandlersInterface.js"
import { MouseFunc } from "../../../Types/MouseFunc.js"
import { debounce } from "../../Utils/Debouncer.js"

const lowerKey = ( { key }:KeyboardEvent ) => key.toLowerCase()

class _EventManager {
    private constructor() {}

    private static Instance: _EventManager

    public static GetInstance(){

        if( !this.Instance ) this.Instance = new _EventManager()

        return this.Instance
    }

    private keyMap: Record< string, KeyHandlersInterface > = {}


    public addEvents( canvas: HTMLCanvasElement ){

        canvas.addEventListener('keydown'  , e => this.keyDownTrigger( e ) )
        canvas.addEventListener('keyup'    , e => this.keyUpTrigger( e ) )

        canvas.addEventListener('mousedown'  , e => this.mouseDownTrigger( e ))
        canvas.addEventListener('mouseup'    , e => this.mouseUpTrigger( e ))
        canvas.addEventListener('wheel'      , e => this.mouseWheelTrigger( e ))
        canvas.addEventListener('mousemove'  , e => this.mouseMoveTrigger( e ))
        canvas.addEventListener('contextmenu', e => this.mouseContextMenuTrigger( e ))


    }

    private keyDownTrigger( e: KeyboardEvent ) {

        const eventKey = lowerKey( e )

        const data = this.keyMap[ eventKey ]


        if( !data ) return

        if( !data.pressed ){
            
            data.pressed = true

            const { altKey, shiftKey, ctrlKey, key } = e

            const event = new KeyEvent({ key, altKey, ctrlKey, shiftKey })

            for( const callback of data.onDown ) callback( event )

        }

    }

    private keyUpTrigger( e: KeyboardEvent ) {

        const eventKey = lowerKey( e )

        const data = this.keyMap[ eventKey ]

        if( !data ) return

        if( data.pressed ){
            
            data.pressed = false

            const { ctrlKey, altKey, shiftKey, key } = e

            const event = new KeyEvent({ key, ctrlKey, altKey, shiftKey })

            for( const callback of data.onUp ) callback( event )

        }


    }

    public executeKeyPressed(){
        for( const key in this.keyMap ){
            
            const data = this.keyMap[ key ]

            if( data.pressed ){
                const event = new KeyEvent({
                    key,
                    ctrlKey: false,
                    altKey: false,
                    shiftKey: false
                })

                for( const callback of data.onPress ) callback( event )

            }
            
        }

    }

    private ensureKey( key: string ) {
        if( !this.keyMap[key] ){
            this.keyMap[key] = {
                onDown: new Set(),
                onPress: new Set(),
                onUp: new Set(),
                pressed: false
            }
        }
    }

    public resizeEvent( callback: () => void ){

        window.addEventListener('resize', debounce(() => {
            
            callback()

        }, 200) )
    }

    public onDown = ( key: string, callback: KeyFunc ) => {
        
        this.ensureKey( key )

        this.keyMap[ key ].onDown.add( callback )

    }

    public onUp = ( key: string, callback: KeyFunc ) => {
        
        this.ensureKey( key )

        this.keyMap[ key ].onUp.add( callback )

    }

    public onPress = ( key: string, callback: KeyFunc ) => {
        
        this.ensureKey( key )
        
        this.keyMap[ key ].onPress.add( callback )

    }

    private notify( list: any[], data:any ){


    }

    // ----------------------------------------------------------------------------- \\
    private mouseDownCallbacks: Record<string, Function[]> = {}
    private mouseUpCallbacks: Record<string, Function[]> = {}
    private mouseMoveCallbacks : Function[] = []
    private mouseWheelCallbacks: Function[] = []



private mouseDownTrigger( e: MouseEvent ) {
        
        const callback = this.mouseDownCallbacks[ e.button ]

        if( callback ) callback.forEach( cb => cb( e ) )

    }

    private mouseUpTrigger( e: MouseEvent ){
        
        const callback = this.mouseUpCallbacks[ e.button ]

        if( callback ) callback.forEach( cb => cb( e ) )

    }

    private mouseMoveTrigger( e: MouseEvent ){
        this.mouseMoveCallbacks.forEach( callback => callback( e ) )
    }

    private mouseWheelTrigger( e: MouseEvent ){
        this.mouseWheelCallbacks.forEach( callback => callback( e ) )
    }

    private mouseContextMenuTrigger( e: MouseEvent ){

        e.preventDefault()

        const callback = this.mouseDownCallbacks[ e.button ]

        if( callback ) callback.forEach( cb => cb( e ) )

    }

    public onMouseDown = ( button: number, callback: MouseFunc ) => {

        if( !this.mouseDownCallbacks[ button ] ) this.mouseDownCallbacks[ button ] = []

        this.mouseDownCallbacks[button].push( callback )

    }

    public onMouseUp = ( button: number, callback: MouseFunc) => {

        if( !this.mouseUpCallbacks[ button ] ) this.mouseUpCallbacks[ button ] = []

        this.mouseUpCallbacks[button].push( callback )
        
    }

    public onMouseMove = ( callback: MouseFunc ) => {
        this.mouseMoveCallbacks.push( callback )
    }

    public onMouseWheel = ( callback: MouseFunc ) => {
        this.mouseWheelCallbacks.push( callback )
    }

    
    public getConnectEvent( target: any ){
        return ( name: string, callback: Function ) => {

            const event = target.events[name]

            if( !event ) throw new Error(`O Evento ${name} não existe na lista de eventos`)

            event.connect( callback )
        }
        
    }

    public getTriggerEvents( target: any ){

        return ( name:string, data?:any ) => {

            const event = target.events[name]

            if( !event ) throw new Error(`O Evento ${name} não existe na lista de eventos`)

            event.trigger( data )
        }
    }
  

}

const EventManager = _EventManager.GetInstance()

export default EventManager