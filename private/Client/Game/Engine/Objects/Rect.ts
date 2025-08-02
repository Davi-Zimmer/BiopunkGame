import { RectInterface } from "../../../Types/RectInterface.js"
import { RectProps } from "../../../Types/RectProps.js"
import { SimpleRect } from "../../../Types/SimpleRect.js"

export default class Rect {

    private position : RectInterface

    constructor( { x, y, w, h, z=1, scale=1 }: RectProps ){
        this.position = { x, y, w, h, z, scale }
    }

    public extractRect(){
        const { x, y, w, h, z, scale } = this.position  
        return {
            x: x,
            y: y,
            w: ( w / z ) * scale,
            h: ( h / z ) * scale
        }
    }

    public getMiddle = () => {
        const { x, y, w, h } = this.extractRect()

        return {
            x: x + w / 2,
            y: y + h / 2
        }

    }

    public getX         = () => this.position.x 
    public getY         = () => this.position.y
    public getW         = () => this.position.w
    public getH         = () => this.position.h
    public getZ         = () => this.position.z
    public getScale     = () => this.position.scale
    public getPositions = () => this.position

    public setX     = ( x: number )    => this.position.x = x
    public setY     = ( y: number )    => this.position.y = y
    public setW     = ( w: number )    => this.position.w = w
    public setH     = ( h: number )    => this.position.h = h
    public setZ     = ( z: number )    => this.position.z = z
    public setScale = ( scale: number) => this.position.scale = scale


    static ListToRect = ( x: number, y: number, w: number, h: number) => ({ x, y, w, h } as SimpleRect) 

    static RectToList = ( { x, y, w, h }: SimpleRect ) => ([ x, y, w, h ] as [ number, number, number, number ]) 
}
