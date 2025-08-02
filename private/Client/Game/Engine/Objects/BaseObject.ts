import { RectProps } from "../../../Types/RectProps.js";
import Rect from "./Rect.js";
import { p5 } from "../../../Types/P5.js";

interface BaseObjectInterface extends RectProps {
    
}

let frame = 0

export class BaseObject extends Rect {

    private facingAtRight: boolean = false

    constructor( { x, y, w, h, z, scale }: BaseObjectInterface ) {

        super({ x, y, w, h, z, scale })

    }


    tick(){

    }

    render( s:p5 ){

        s.fill( '#8700ff' )

        const coords = Rect.RectToList( this.extractRect() )

        s.rect( ...coords )

    }
}