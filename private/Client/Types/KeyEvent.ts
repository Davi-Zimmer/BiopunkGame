import { KeyEventInterface } from "./KeyEventInterface.js"

export class KeyEvent {
    private key: string
    private ctrlKey: boolean
    private altKey: boolean
    private shiftKey: boolean

    constructor( {key, ctrlKey, altKey, shiftKey } : KeyEventInterface ){

        this.key      = key
        this.ctrlKey  = ctrlKey
        this.altKey   = altKey
        this.shiftKey = shiftKey 
        
    }

    public getLowerKey = () => this.key.toLowerCase()
    public getKey      = () => this.key
    public getCrtlKey  = () => this.ctrlKey
    public getAltKey   = () => this.altKey
    public getShiftKey = () => this.shiftKey

    public getAll = () => ({
        key: this.key,
        crtlKey: this.ctrlKey,
        altKey: this.altKey,
        shiftKey: this.shiftKey
    })

    public setKey      = ( key: string  )   => this.key      = key
    public setCrtlKey  = ( state: boolean ) => this.ctrlKey  = state 
    public setAltKey   = ( state: boolean ) => this.altKey   = state 
    public setShiftKey = ( state: boolean ) => this.shiftKey = state 
}