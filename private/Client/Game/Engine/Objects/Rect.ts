import { RectInterface } from "../../../Types/RectInterface.js"
import { RectProps } from "../../../Types/RectProps.js"

export default class Rect {

    private position : RectInterface

    constructor( { x, y, w, h, z=1, scale=1 }: RectProps ){
        this.position = { x, y, w, h, z, scale }
    }

    protected extractRect(){
        const { x, y, w, h, z, scale } = this.position  
        return {
            x: x,
            y: y,
            w: ( w / z ) * scale,
            h: ( h / z ) * scale
        }
    }

    protected getMiddle = () => {
        const { x, y, w, h } = this.extractRect()

        return {
            x: x + w / 2,
            y: y + h / 2
        }

    }

    protected getX         = () => this.position.x 
    protected getY         = () => this.position.y
    protected getW         = () => this.position.w
    protected getH         = () => this.position.h
    protected getZ         = () => this.position.z
    protected getScale     = () => this.position.scale
    protected getPositions = () => this.position 

    protected setX     = ( x: number )    => this.position.x = x
    protected setY     = ( y: number )    => this.position.y = y
    protected setW     = ( w: number )    => this.position.w = w
    protected setH     = ( h: number )    => this.position.h = h
    protected setZ     = ( z: number )    => this.position.z = z
    protected setScale = ( scale: number) => this.position.scale = scale

}