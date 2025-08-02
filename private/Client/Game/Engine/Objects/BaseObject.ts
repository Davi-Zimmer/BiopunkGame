import { RectProps } from "../../../Types/RectProps.js";
import Rect from "./Rect.js";
import { p5 } from "../../../Types/P5.js";

interface BaseObjectInterface extends RectProps {
    
}

export class BaseObject extends Rect {

    constructor( { x, y, w, h, z, scale }: BaseObjectInterface ) {

        super({ x, y, w, h, z, scale })

    }


    tick(){

    }

    render( s:p5 ){

    }
}