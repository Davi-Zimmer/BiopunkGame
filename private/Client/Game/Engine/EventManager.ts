import { KeyEvent } from "../../Types/KeyEvent.js"
import { KeyFunc, KeyHandlersInterface } from "../../Types/KeyHandlersInterface.js"

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

        canvas.addEventListener('keydown'     , this.keyDownTrigger )
        canvas.addEventListener('keyup'       , this.keyUpTrigger )

        canvas.addEventListener('mousedown'   , () => {})
        canvas.addEventListener('mouseup'     , () => {})
        canvas.addEventListener('contextmenu' , () => {})

        canvas.addEventListener('mousemove'   , () => {})
        canvas.addEventListener('wheel'       , () => {})
    }

    private keyDownTrigger = ( e: KeyboardEvent ) => {

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

    private keyUpTrigger = ( e: KeyboardEvent ) => {

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

}

const EventManager = _EventManager.GetInstance()

export default EventManager